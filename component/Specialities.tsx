import styles from "./Specialities.module.scss";
import Image from "next/image";
import { handleBookAppointmentNavigation } from "../utils/utils";

function Specialities() {
  return (
    <div className={styles.specialities_item_container}>
      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/births-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Births</h1>
          <p className="font-400">
            Cardiology is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/pulmonary-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Pulmonary</h1>
          <p className="font-400">
            Pulmonary is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/cardiology-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Cardiology</h1>
          <p className="font-400">
            Cardiology is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/neurology-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Neurology</h1>
          <p className="font-400">
            Neurology is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/traumatology-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Traumatology</h1>
          <p className="font-400">
            Traumatology is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/neurology-specialities-img-2.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Neurology</h1>
          <p className="font-400">
            Neurology is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/dental-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Dental</h1>
          <p className="font-400">
            Dental is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/pregnancy-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Pregnancy</h1>
          <p className="font-400">
            Pregnancy is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/for-disabled-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">For Disabled</h1>
          <p className="font-400">
            For disabled is a specialty of internal medicine.
          </p>
        </div>
      </div>

      <div
        className={styles.specialities_item}
        onClick={() => {
          handleBookAppointmentNavigation();
        }}
      >
        <div className={styles.specialities_item_img}>
          <Image
            src="/images/prostheses-specialities-img.svg"
            alt="banner"
            layout="fill"
            // objectFit={"cover"}
          />
        </div>
        <div className={styles.specialities_item_contain}>
          <h1 className="font-600">Prostheses</h1>
          <p className="font-400">
            Prostheses is a specialty of internal medicine.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specialities;
