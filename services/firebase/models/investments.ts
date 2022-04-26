export interface IInvestments {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  amount: string;
  image: "";
  razorpay_payment_id: string;
  success: boolean;
  created_at?: string;
  updated_at?: string;
}
