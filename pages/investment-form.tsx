import React, { useEffect, useState } from "react";
import AppHeader from "../component/header/AppHeader";
import CustomInput from "../component/inputs/CustomInput";
import LayoutContainer from "../component/layout/LayoutContainer";
import styles from "../styles/InvestmentForm.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import Footer from "../component/Footer";
import { RazorpayApiServices } from "../services/razorpay/apis";
import { CircularProgress } from "@material-ui/core";
import { IInvestments } from "../services/firebase/models/investments";
import investmentService from "../services/firebase/investments";
import { useRouter } from "next/router";
import { QueryParams } from "../constants/pages";
import Image from "next/image";

const LoginSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Please enter valid email address!")
    .required("Please enter your email address!"),
  phone: Yup.string()
    .min(10, "Phone number must be 10 digits long!")
    .required("Phone number is required!"),
  amount: Yup.number().required("Please enter amount!"),
});

export interface IInvestmentFormValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  amount: string;
  selected_amount_id: string;
  selected_amount: string;
}

const predefinedAmounts = [
  {
    id: 1000,
    amount: 1000,
  },
  {
    id: 10000,
    amount: 10000,
  },
  {
    id: 100000,
    amount: 100000,
  },
];

const initializeRazorpay = async () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const InvestmentForm = () => {
  const router = useRouter();
  const [state, setState] = useState({
    isSubmitting: false,
    isPaymentSuccess: false,
    isPaymentFailure: false,
    razorpay_payment_id: "",
  });
  const initialValues: IInvestmentFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    amount: "",
    selected_amount_id: "",
    selected_amount: "",
  };

  useEffect(() => {
    const isPaymentSuccess = router.query[QueryParams.paymentSuccess];
    const isPaymentFailure = router.query[QueryParams.paymentFailure];
    let _isPaymentSuccess = false;
    let _isPaymentFailure = false;
    if (isPaymentSuccess && !state.isPaymentSuccess) {
      _isPaymentSuccess = true;
    }

    if (isPaymentFailure && !state.isPaymentFailure) {
      _isPaymentFailure = true;
    }

    setState({
      ...state,
      isPaymentFailure: _isPaymentFailure,
      isPaymentSuccess: _isPaymentSuccess,
    });
  }, [router.query]);

  const handlePaynentSuccess = async (res: any) => {
    setState({
      ...state,
      razorpay_payment_id: res.razorpay_payment_id,
    });
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        [QueryParams.paymentSuccess]: true,
      },
    });
  };

  const handleSubmit = async (values: IInvestmentFormValues) => {
    let amount = values.amount || values.selected_amount;
    setState({
      ...state,
      isSubmitting: true,
    });

    const response = await RazorpayApiServices.createOrder({
      amount,
    });

    if (response && response.data) {
      setState({
        ...state,
        isSubmitting: false,
      });
      const order_id = response.data.id;
      const razorpayResponse = await initializeRazorpay();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: Number(values.amount || values.selected_amount) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Aam Health",
        description: "Investments",
        // image: "https://example.com/your_logo",
        order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        handler: async function (response: any) {
          const payload: IInvestments = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone: values.phone,
            amount: values.amount,
            image: "",
            razorpay_payment_id: response?.razorpay_payment_id || "",
            success: true,
          };

          const [paymentRecordResponse, _] = await Promise.all([
            investmentService.addInvestmentRecord(payload),
            handlePaynentSuccess(response),
          ]);

          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
        },
        prefill: {
          name: `${values.first_name} ${values.last_name}`,
          email: values.email,
          contact: values.phone,
        },
        notes: {
          address: "Aam Health",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new (window as any).Razorpay(options);

      paymentObject.on("payment.failed", function (response: any) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      paymentObject.open();
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  return (
    <div className={styles.container}>
      <AppHeader />

      <LayoutContainer className={styles.investment_form_content}>
        <div
          className={`${
            state.isPaymentFailure || state.isPaymentSuccess
              ? styles.display_none
              : ""
          }`}
        >
          <div className={styles.heading}>
            <h2 className="font-700">
              <span> Invest </span>with us
            </h2>
            <p className="font-400">
              Please fill your details in form below and we will get back to you
              shorty
              <br />
              Thanks for your interest
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className={styles.investment_form}>
              <div className={styles.input_container}>
                <CustomInput
                  name="first_name"
                  label="First Name"
                  placeholder="Enter Your first name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.first_name}
                  error={Boolean(
                    formik.touched.first_name && formik.errors.first_name
                  )}
                  helperText={formik.errors.first_name}
                />
              </div>
              <div className={styles.input_container}>
                <CustomInput
                  name="last_name"
                  label="Last Name"
                  placeholder="Enter Your last name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.last_name}
                  error={Boolean(
                    formik.touched.last_name && formik.errors.last_name
                  )}
                  helperText={formik.errors.last_name}
                />
              </div>

              <div className={styles.input_container}>
                <CustomInput
                  name="email"
                  label="Email"
                  placeholder="Enter Your email"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  helperText={formik.errors.email}
                />
              </div>

              <div className={styles.input_container}>
                <CustomInput
                  name="phone"
                  label="Mobile no."
                  placeholder="Enter Your mobile number"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  error={Boolean(formik.touched.phone && formik.errors.phone)}
                  helperText={formik.errors.phone}
                />
              </div>
            </div>

            <div className={styles.amount_input}>
              <div className={styles.input_container}>
                <CustomInput
                  name="amount"
                  label="Enter amount in rupees you want to invest"
                  placeholder="Enter amount in rupees you want to invest"
                  type="text"
                  onChange={(e) => {
                    let value = e.target.value;
                    value = value.slice(1).trim();
                    formik.setFieldValue("amount", value);
                  }}
                  value={`₹ ${formik.values.amount}`}
                  error={Boolean(formik.touched.amount && formik.errors.amount)}
                  helperText={formik.errors.amount}
                />
              </div>
            </div>

            <div className={styles.or_seperator}>
              <div className={`font-500 sub-text ${styles.or}`}>OR</div>
              <div className={`sub-text ${styles.subtext}`}>
                Pick one from below options
              </div>
            </div>

            <div className={styles.amount_blocks}>
              {predefinedAmounts.map((amount) => (
                <div
                  key={amount.id}
                  className={`${styles.amount_block} ${
                    formik.values.selected_amount_id &&
                    formik.values.selected_amount_id === (amount as any).id
                      ? styles.selected
                      : ""
                  }`}
                  onClick={() => {
                    formik.setValues({
                      ...formik.values,
                      selected_amount_id: amount.id as unknown as string,
                      selected_amount: amount.amount as unknown as string,
                      amount: amount.amount as unknown as string,
                    });
                  }}
                >
                  ₹ {amount.amount}
                </div>
              ))}
            </div>

            <div className={styles.button_container}>
              <button
                type="submit"
                className={`font-500 ${styles.submit_button} ${
                  state.isSubmitting ? styles.button_disabled : ""
                }`}
              >
                <div
                  className={`${styles.loader_container} ${
                    state.isSubmitting ? "" : styles.display_none
                  }`}
                >
                  <CircularProgress className={styles.loader} />
                </div>
                <span>Invest now</span>
              </button>
            </div>
          </form>
        </div>

        <div
          className={`${styles.success_container} ${
            !state.isPaymentSuccess ? styles.display_none : ""
          }`}
        >
          <div className={styles.image_container}>
            <div className={styles.right_tick_img}>
              <Image
                src="/images/right-img.svg"
                alt="banner"
                layout="fill"
                objectFit={"cover"}
                quality={100}
              />
            </div>
          </div>

          <h2 className={styles.success_title}>
            You invested with us successfully
            <br /> Thanks for your interest
          </h2>

          <div className={styles.payment_details}>
            <div className={styles.details_row}>
              <p>Amount invested</p>
              <p>₹ {formik.values.amount}</p>
            </div>

            <div className={styles.details_row}>
              <p>Transaction id</p>
              <p>{state.razorpay_payment_id}</p>
            </div>

            <div className={styles.buttons_container}>
              <button className={styles.print_button}>Print receipt</button>
              <button
                className={styles.back_button}
                onClick={() => {
                  router.push("/");
                }}
              >
                Back to home
              </button>
            </div>
          </div>
        </div>
      </LayoutContainer>

      <Footer />
    </div>
  );
};

export default InvestmentForm;
