import styles from "../styles/invest-now.module.scss";
import { CircularProgress } from "@material-ui/core";
import { useFormik } from "formik";
import React, { useState } from "react";
import CustomInput from "../component/inputs/CustomInput";
import * as Yup from "yup";
import CloseIcon from "../component/icons/CloseIcon";
import investorService from "../services/firebase/investors";
import AppHeader from "../component/header/AppHeader";
import LayoutContainer from "../component/layout/LayoutContainer";
import Modal from "../component/modals/Modal";
import InvestmentSuccess from "../component/modals/InvestmentSuccess";
import { IInvestor } from "../services/firebase/models/Iinvestors";
import Footer from "../component/Footer";

const ContactUsSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Please enter valid email address!")
    .required("Please enter your email address!"),
  phone: Yup.string().required("Phone number is required!"),
  message: Yup.string(),
});

const Investnow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [succces, setSuccess] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const handleSubmit = async (values: IInvestor) => {
    setIsSubmitting(true);
    const response = await investorService.addInvestorDetails(values);

    if (response) {
      setIsModalOpen(true);
      setIsSubmitting(false);
      return;
    }
    setIsSubmitting(false);
    setSuccess(["Something went wrong while saving your details!"]);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ContactUsSchema,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  const removeMessage = (index: number) => {
    let tempErrors = [...succces];

    tempErrors = tempErrors.filter((error, idx) => idx !== index);

    setSuccess(tempErrors);
  };

  return (
    <div className={styles.main}>
      <AppHeader />

      <Modal open={isModalOpen} handleClose={() => {}}>
        <InvestmentSuccess />
      </Modal>

      <LayoutContainer>
        <div className={styles.contact_us_form}>
          <div className={styles.heading}>
            <h2 className="font-700">
              <span> Invest </span>Now
            </h2>
            <p className="font-400">
              Please fill your details in form below and we will get back to you
              shorty
              <br />
              Thanks for your interest
            </p>
          </div>

          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.inputs_container}>
              <CustomInput
                placeholder="First name *"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.first_name)}
                helperText={formik.errors.first_name}
                type="text"
              />
              <CustomInput
                placeholder="Last name *"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.last_name)}
                helperText={formik.errors.last_name}
                type="text"
              />
              <CustomInput
                placeholder="Email *"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={formik.errors.email}
                type="email"
              />
              <CustomInput
                placeholder="Mobile no. *"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={Boolean(formik.errors.phone)}
                helperText={formik.errors.phone}
                type="text"
              />
            </div>
            <textarea
              className={styles.textArea}
              placeholder="Message"
              rows={4}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            ></textarea>
            <div className={styles.errors_container}>
              {succces.map((message, idx) => (
                <div key={idx} className={styles.message_container}>
                  <p className={`font-400`}>{message}</p>

                  <div
                    className={styles.close_icon}
                    onClick={() => removeMessage(idx)}
                  >
                    <CloseIcon />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.button_container}>
              <button
                type="submit"
                className={`font-600 ${styles.submit_button} ${
                  isSubmitting ? styles.button_disabled : ""
                }`}
              >
                <div
                  className={`${styles.loader_container} ${
                    isSubmitting ? "" : styles.display_none
                  }`}
                >
                  <CircularProgress className={styles.loader} />
                </div>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </LayoutContainer>

      <Footer />
    </div>
  );
};

export default Investnow;
