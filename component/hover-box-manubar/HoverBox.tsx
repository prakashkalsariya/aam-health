import styles from "./HoverBox.module.scss";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ClientRoutes } from "../../constants/pages";

class ServicesSlides {
  static MedicalCheckup = "MedicalCheckup";
  static PurchaseMedicine = "PurchaseMedicine";
  static AamHealthStore = "AamHealthStore";
  static DoctorBooking = "DoctorBooking";
  static NursingCare = "NursingCare";
  static RegisterWithUS = "RegisterWithUS";
}

function Hoverbox() {
  const [currentSlide, setCurrentSlide] = useState(ServicesSlides.NursingCare);

  const handleHover = (slide: any) => {
    setCurrentSlide(slide);
  };
  return (
    <div>
      <div className={styles.hover_box_left_contain_container}>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.MedicalCheckup);
          }}
        >
          <Link href={ClientRoutes.bookAppointment} passHref>
            <a>Medical Checkup</a>
          </Link>
        </p>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.PurchaseMedicine);
          }}
        >
          <Link href={"#"} passHref>
            <a>Purchase Medicine</a>
          </Link>
        </p>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.AamHealthStore);
          }}
        >
          <Link href={"#"} passHref>
            <a>Aam Health Store</a>
          </Link>
        </p>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.DoctorBooking);
          }}
        >
          <Link href={ClientRoutes.bookAppointment} passHref>
            <a>Doctor Booking</a>
          </Link>
        </p>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.NursingCare);
          }}
        >
          <Link href={ClientRoutes.bookAppointment} passHref>
            <a>Nursing Care</a>
          </Link>
        </p>
        <p
          className="font-700"
          onMouseOver={() => {
            handleHover(ServicesSlides.RegisterWithUS);
          }}
        >
          <Link href={ClientRoutes.register} passHref>
            <a>Register With US</a>
          </Link>
        </p>
      </div>

      <div className={styles.hover_box_right_contain_container}>
        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.MedicalCheckup
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/medical-checkup-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>

        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.PurchaseMedicine
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/purchase-medicine-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>

        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.AamHealthStore
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/aam-health-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>

        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.DoctorBooking
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/doctor-booking-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>

        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.NursingCare
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/nursing-care-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>

        <div className={styles.right_contain_img_container}>
          <div className={styles.right_contain_shadow}></div>
          <div
            className={`${styles.right_contain_img} ${styles.opacity} ${
              currentSlide === ServicesSlides.RegisterWithUS
                ? ""
                : styles.display_none
            }`}
          >
            <Image
              src="/images/register-with-manu-bar.webp"
              alt="manu"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hoverbox;
