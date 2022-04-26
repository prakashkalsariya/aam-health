import { TapAndPlay } from "@material-ui/icons";
import axios from "axios";
import { IResponse } from "../../interfaces/api/api";

export interface ICreateOrderResponse {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  offer_id: string | null;
  status: string;
  attempts: number;
  notes: any;
  created_at: string;
  updated_at: string;
}

export class RazorpayApiServices {
  static createOrder = async ({
    amount,
  }: {
    amount: string;
  }): Promise<IResponse<ICreateOrderResponse>> => {
    try {
      const payload = {
        amount,
      };
      const order = await axios.post("/api/investment-checkout", payload);

      return order?.data;
    } catch (err) {
      console.log(
        "Something went wrong while creating order for checkout",
        err
      );
      return {
        errors: err as any,
      };
    }
  };
}
