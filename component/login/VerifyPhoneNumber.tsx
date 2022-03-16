import styles from "./VerifyPhoneNumber.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import CustomInput from "../inputs/CustomInput";
import { useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import { useRouter } from "next/router";
import { CircularProgress } from "@material-ui/core";
import { QueryParams } from "../../constants/pages";

const VerifyPhoneNumberSchema = Yup.object().shape({
  otp: Yup.string().required("Verification code is required!"),
});

function VerifyPhoneNumber() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const initialValues = {
    otp: "",
  };

  const handleSubmit = (values: any) => {
    const redirectTo = router?.query?.[QueryParams.redirectTo] || "/";
    if (redirectTo) {
      router.push(redirectTo as string);
      return;
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: VerifyPhoneNumberSchema,
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
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.contain_head_para}>
        <h1 className="font-700">
          <span className="primary">Verify</span> your phone <br />
          number
        </h1>
        <p className="font-400">
          Check your phone for the OTP code we sent you
        </p>
      </div>
      <div className={styles.input_container}>
        <CustomInput
          name="otp"
          label="Verification code"
          placeholder="Enter verification code here"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.otp}
          error={Boolean(formik.touched.otp && formik.errors.otp)}
          helperText={formik.errors.otp}
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
          <span>Verify</span>
        </button>
      </div>{" "}
      <p className={`font-400 ${styles.contin_register}`}>
        Resend code in <span className="primary">00:30</span>
      </p>
    </form>
  );
}

export default VerifyPhoneNumber;
