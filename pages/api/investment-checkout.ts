import type { NextApiRequest, NextApiResponse } from "next";
import shortid from "shortid";
import { RazorpayServices } from "../../services/razorpay/razorpay";

type Data = {
  name: string;
};

export interface OrderReqPayload {
  amount: string;
}

export default async function InvestmentCheckoutHandler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    try {
      const body = req.body as OrderReqPayload;

      const amount = body.amount ?? 100;

      const options = {
        amount: Number(amount) * 100,
        currency: "INR",
        receipt: shortid.generate(),
      };

      const order = await RazorpayServices.instance.orders.create(options);

      console.log("Order >>>", order);
      res.status(201).json({
        status: true,
        data: {
          ...order,
        },
        message: "Order created successfully",
      });
    } catch (err) {
      console.log("Something went wrong while creating checkout order", err);
      res.status(200).json({
        status: false,
        data: null,
        message: "Something went wrong while creating checkout order",
      });
    }
  }
}
