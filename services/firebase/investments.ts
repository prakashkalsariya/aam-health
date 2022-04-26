import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "./config";
import { IInvestments } from "./models/investments";

export class InvestmentService {
  addInvestmentRecord = async (values: IInvestments): Promise<boolean> => {
    try {
      let updatedValues = { ...values };

      const docId = `${updatedValues.first_name.toLowerCase()}_${updatedValues.last_name.toLowerCase()}_${
        updatedValues.phone
      }`;

      const investmentsRef = doc(firebaseFirestore, "investments", docId);

      updatedValues.created_at = new Date().toISOString();
      updatedValues.updated_at = new Date().toISOString();
      await setDoc(investmentsRef, updatedValues);
      return true;
    } catch (err) {
      console.log("Something went wrong while saving investments record!");
      return false;
    }
  };

  getInvestorsList = async (): Promise<IInvestments[]> => {
    try {
      const investmentsRef = query(
        collection(firebaseFirestore, "investments")
      );

      const investmentsSnapshot = await getDocs(investmentsRef);

      const ivestorsList: IInvestments[] = [];

      investmentsSnapshot.forEach((doc) => {
        ivestorsList.push(doc.data() as any);
      });

      return ivestorsList as any;
    } catch (err) {
      console.log("Something went wrong while getting investors list!");
      return [];
    }
  };
}

const investmentService = new InvestmentService();

export default investmentService;
