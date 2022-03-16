import styles from "../styles/CreateAccount.module.scss";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ICreateUserValues } from "../interfaces/api/IAuth";
import { useRouter } from "next/router";
import { CircularProgress } from "@material-ui/core";
import AppHeader from "../component/header/AppHeader";
import CloseIcon from "../component/icons/CloseIcon";
import CustomInput from "../component/inputs/CustomInput";
import { QueryParams } from "../constants/pages";
import VerifyPhoneNumber from "../component/login/VerifyPhoneNumber";
import { LocalStorageService } from "../services/localStorage";

const RegisterShema = Yup.object().shape({
  first_name: Yup.string().required("First name is required!"),
  last_name: Yup.string().required("Last name is required!"),
  email: Yup.string()
    .email("Please enter valid email address!")
    .required("Please enter your email address!"),
  password: Yup.string()
    .min(6, "Password must be 6 characters long!")
    .required("Password is required!"),
  phone: Yup.string()
    .min(10, "Phone number must be 10 digits long!")
    .required("Phone number is required!"),
});

function Createaccount() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [verifyPhone, setVerifyPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
  };

  const handleSubmit = async (values: ICreateUserValues) => {
    setIsSubmitting(true);
    if (errors.length) {
      setErrors([]);
    }

    const reponse = await LocalStorageService.auth.sigupUser(values);

    if (reponse) {
      setIsSubmitting(false);

      let _errors: string[] = [];
      if (!reponse.success && reponse.message) {
        _errors = [...Object.values(reponse?.errors as Record<any, any>)];

        setErrors(_errors);
        setIsSubmitting(false);
        return;
      }

      let link = "?verify_phone=true";
      const redirectTo = router?.query?.[QueryParams.redirectTo] || "";

      if (redirectTo) {
        link = `?${QueryParams.verifyPhone}=true&${QueryParams.redirectTo}=${redirectTo}`;
      }
      router.push(link);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegisterShema,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: handleSubmit,
  });

  const removeMessage = (index: number) => {
    let tempErrors = [...errors];

    tempErrors = tempErrors.filter((error, idx) => idx !== index);

    setErrors(tempErrors);
  };

  useEffect(() => {
    const verifyPhone = router?.query?.verify_phone;

    if (verifyPhone) {
      setVerifyPhone(true);
    } else {
      setVerifyPhone(false);
    }
  }, [router.query]);

  return (
    <div className={styles.create_account_container}>
      <div className={styles.create_account_img}>
        <Image
          src="/images/login-background-img.webp"
          alt="Intro Model"
          layout="fill"
          objectFit={"cover"}
        />
      </div>
      <div className={styles.header}>
        <AppHeader
          hideAuthButtons={true}
          hideNavlinks={true}
          showMobileNavBar={true}
          classes={{
            header: styles.navigation_header,
            navbar: styles.navigation_navbar,
          }}
        />
      </div>
      <div className={styles.create_account_contain_main_container}>
        <div className={styles.create_account_contain_container}>
          <form
            onSubmit={formik.handleSubmit}
            className={`${styles.form_content} ${
              verifyPhone && styles.display_none
            }`}
          >
            <div className={styles.contain_head_para}>
              <h1 className="font-700">
                <span className="primary">Create</span> your account
              </h1>
              <p className="font-400">
                Please fill your details and create your account
              </p>
            </div>
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
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={Boolean(formik.touched.phone && formik.errors.phone)}
                helperText={formik.errors.phone}
              />
            </div>
            <div className={styles.input_container}>
              <CustomInput
                name="password"
                label="Password"
                placeholder="Enter Your password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                helperText={formik.errors.password}
              />
            </div>
            <div className={styles.errors_container}>
              {errors.map((message, idx) => (
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
                <span>Register</span>
              </button>
            </div>{" "}
            <p className={`font-400 ${styles.contain_register}`}>
              Do you have an account?
              <span className="primary">
                {" "}
                <Link href={"/login"} passHref>
                  <a>
                    <span className="font-500 primary">Login</span>
                  </a>
                </Link>
              </span>
            </p>
          </form>
          <div
            className={`${!verifyPhone && styles.display_none} ${
              styles.verify_phone_container
            }`}
          >
            <VerifyPhoneNumber />
          </div>
        </div>
      </div>
      {/* <div className={`${!verifyPhone && styles.display_none}`}>
        <Verifyphonenumber />
      </div> */}
    </div>
  );
}

export default Createaccount;
