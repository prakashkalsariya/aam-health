import { IInvestor } from "./models/Iinvestors";
import { doc, setDoc } from "firebase/firestore";
import { firebaseFirestore } from "./config";

export class InvestorService {
  addInvestorDetails = async (values: IInvestor): Promise<boolean> => {
    try {
      let updatedValues = { ...values };

      const investorRef = doc(
        firebaseFirestore,
        "investors",
        `${updatedValues.first_name}_${updatedValues.last_name}`
      );

      updatedValues.created_at = new Date().toISOString();
      updatedValues.updated_at = new Date().toISOString();
      await setDoc(investorRef, updatedValues);
      return true;
    } catch (err) {
      console.log("Something went wrong while saving investor details!");
      return false;
    }
  };
}

const investorService = new InvestorService();

export default investorService;
