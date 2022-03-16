import styles from "../styles/LoginPage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AppHeader from "../component/header/AppHeader";
import CustomInput from "../component/inputs/CustomInput";
import { ILoginValues } from "../interfaces/api/IAuth";
import CloseIcon from "../component/icons/CloseIcon";
import { ClientRoutes, QueryParams } from "../constants/pages";
import { CircularProgress } from "@material-ui/core";
import { LocalStorageService } from "../services/localStorage";
import { MessageCodes } from "../constants/message-codes";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email address!")
    .required("Please enter your email address!"),
  password: Yup.string()
    .min(6, "Password must be 6 characters long!")
    .required("Please enter your password!"),
});

function Loginpage() {
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [registerLink, setRegisterLink] = useState(`/${ClientRoutes.register}`);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginValues) => {
    setIsSubmitting(true);
    if (errors.length) {
      setErrors([]);
    }
    const reponse = await LocalStorageService.auth.loginUser(values);

    if (reponse) {
      setIsSubmitting(false);

      let _errors: string[] = [];
      if (!reponse.success) {
        switch (reponse.message_code) {
          case MessageCodes.user_not_found_with_email_address:
            _errors.push("User not found!");
            break;
          case MessageCodes.wrong_password:
            _errors.push("You enterd wrong password!");
            break;
          default:
            _errors.push("");
        }

        setErrors(_errors);
        setIsSubmitting(false);
        return;
      }

      const redirectTo = router?.query?.[QueryParams.redirectTo] || "/";
      if (redirectTo) {
        router.push(redirectTo as string);
      }
    }
  };

  useEffect(() => {
    const redirectTo = router?.query?.[QueryParams.redirectTo];
    if (redirectTo) {
      setRegisterLink(
        `/${ClientRoutes.register}?${QueryParams.redirectTo}=${redirectTo}`
      );
    }
  }, [router.query]);

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
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

  return (
    <div className={styles.login_page_container}>
      <div className={styles.login_page_img}>
        <Image
          src="/images/login-background-img.webp"
          alt="Intro Model"
          layout="fill"
          objectFit={"cover"}
          // unoptimized
          // quality={100}
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
      <form
        onSubmit={formik.handleSubmit}
        className={styles.login_page_contain_main_container}
      >
        <div className={styles.login_page_contain_container}>
          <div className={styles.contain_head_para}>
            <h1 className="font-700">
              <span className="primary">Login</span> to your account
            </h1>
            <p className="font-400">Please enter your details and Log in</p>
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
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={Boolean(formik.touched.password && formik.errors.password)}
              helperText={formik.errors.password}
            />
          </div>

          <div className={styles.contain_checkbox_forgot_container}>
            <div className={styles.contain_checkbox}>
              <input type="checkbox" />
              <p className={`font-400 ${styles.text}`}>Remember me</p>
            </div>
            <div className={styles.contain_password}>
              <p className={`font-400 ${styles.text}`}>Forgot password</p>
            </div>
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
              <span>Login</span>
            </button>
          </div>

          <p className={`${styles.contin_register}`}>
            Don&apos;t have an account?{" "}
            <Link href={registerLink} passHref>
              <a>
                <span className="font-500 primary">Register now</span>
              </a>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
