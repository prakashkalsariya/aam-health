import React from "react";
import AppHeader from "../component/header/AppHeader";
import CustomInput from "../component/inputs/CustomInput";
import LayoutContainer from "../component/layout/LayoutContainer";
import styles from "../styles/InvestmentForm.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";

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

const InvestmentForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    amount: "",
  };

  const handleSubmit = async (values) => {};

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

          <div className={styles.input_container}>
            <CustomInput
              name="amount"
              label="Enter your amount"
              placeholder="Enter Your amount"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.amount}
              error={Boolean(formik.touched.amount && formik.errors.amount)}
              helperText={formik.errors.amount}
            />
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default InvestmentForm;
