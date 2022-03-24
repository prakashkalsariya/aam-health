import styles from "./MedicalServices.module.scss";
import Servicescard from "../component/services/ServicesCard";
import { useState } from "react";
import { handleBookAppointmentNavigation } from "../utils/utils";

class ServicesSlides {
  static primaryCare = "primaryCare";
  static urgentCare = "urgentCare";
  static mentalHealth = "mentalHealth";
  static womansHealth = "womansHealth";
  static lgbtq = "lgbtq";
}

const MedicalServices = () => {
  const [currentSlide, setCurrentSlide] = useState(ServicesSlides.primaryCare);

  const handleHover = (slide: any) => {
    setCurrentSlide(slide);
  };

  return (
    <>
      <div className={styles.mobile_services}>
        <Servicescard />
      </div>

      <div className={styles.desktop_mobile_services}>
        <div className={styles.service_section_container}>
          <div className={styles.service_color_varient_box_container}>
            <div
              className={`${styles.service_color_varient_box_primary} ${
                styles.service_slide
              } ${
                currentSlide === ServicesSlides.primaryCare
                  ? styles.active_slide
                  : ""
              }`}
            >
              <p>Allergy Symptoms</p>
              <p>Back Pain</p>
              <p>Cold or Flu</p>
              <p>Red Eye</p>
              <p>Birth Control</p>
              <p>Hypertension</p>
              <p>Specialist Referral</p>
              <p>Diabetes</p>
              <p>Medication Refill</p>
              <p>Skin Rash</p>
              <p>Annual Physical</p>
              <p></p>
            </div>

            <div
              className={`${styles.service_color_varient_box_urgent} ${
                styles.service_slide
              } ${
                currentSlide === ServicesSlides.urgentCare
                  ? styles.active_slide
                  : ""
              }`}
            >
              <p>UTI</p>
              <p>Headache </p>
              <p>Injuries</p>
              <p>Cuts </p>
              <p>STI </p>
              <p>Rash </p>
              <p>Cough</p>
              <p>Cold or Flu </p>
              <p>Fever </p>
              <p>Stomach Pain </p>
              <p>Red Eye </p>
              <p></p>
            </div>

            <div
              className={`${styles.service_color_varient_box_mental} ${
                styles.service_slide
              } ${
                currentSlide === ServicesSlides.mentalHealth
                  ? styles.active_slide
                  : ""
              }`}
            >
              <p>Anxiety</p>
              <p>Depression </p>
              <p>Smoking Cessation </p>
              <p>Alcohol Use </p>
              <p>Weight Loss </p>
              <p>Stress</p>
              <p>Family Therapy</p>
              <p>ADHD </p>
              <p>Sadness </p>
              <p>Relationships </p>
              <p>Group Therapy</p>
            </div>

            <div
              className={`${styles.service_color_varient_box_women} ${
                styles.service_slide
              } ${
                currentSlide === ServicesSlides.womansHealth
                  ? styles.active_slide
                  : ""
              }`}
            >
              <p>UTI</p>
              <p>Breast Health </p>
              <p>Annual Physical </p>
              <p>Pelvic Exam </p>
              <p>Pap Smear </p>
              <p>Bone Density Exam</p>
              <p>Ultrasound </p>
              <p>Birth Control </p>
              <p>Skin Cancer </p>
              <p>Pregnancy Test </p>
              <p>Vaginal Infection</p>
            </div>

            <div
              className={`${styles.service_color_varient_box_lgbtq} ${
                styles.service_slide
              }  ${
                currentSlide === ServicesSlides.lgbtq ? styles.active_slide : ""
              }`}
            >
              <p>Annual Physical</p>
              <p>Pelvic Exam </p>
              <p>Chest Health </p>
              <p>STI/HIV </p>
              <p>Cancer Screening </p>
              <p>Ultrasound</p>
              <p>Depression</p>
              <p>Anxiety</p>
              <p>Pap Smear</p>
              <p>Behavioral Health </p>
              <p>UTI </p>
            </div>
          </div>

          <div className={styles.service_contain_container}>
            <div className={styles.service_contain_primary}>
              <div className={styles.service_contain_circle}></div>

              <div
                className={styles.service_contain_section}
                onMouseOver={() => {
                  handleHover(ServicesSlides.primaryCare);
                }}
              >
                <h1 className="font-700">Primary Care</h1>
                <p>Ideal for preventative care</p>
                <div className={styles.service_contain_btn}>
                  <button
                    className={styles.service_contain_appointment_btn}
                    onClick={() => {
                      handleBookAppointmentNavigation();
                    }}
                  >
                    Book In Appointment
                  </button>
                  <button className={styles.service_contain_learn_more_btn}>
                    Learn More
                  </button>
                </div>
                <p className={styles.service_contain_date}>
                  Next: Today 10:10pm
                </p>
              </div>
            </div>

            <div
              className={styles.service_contain_urgent}
              onMouseOver={() => {
                handleHover(ServicesSlides.urgentCare);
              }}
            >
              <div className={styles.service_contain_circle}></div>

              <div className={styles.service_contain_section}>
                <h1 className="font-700">Urgent Care</h1>
                <p>Ideal for immediate needs</p>
                <div className={styles.service_contain_btn}>
                  <button
                    className={styles.service_contain_appointment_btn}
                    onClick={() => {
                      handleBookAppointmentNavigation();
                    }}
                  >
                    Book In Appointment
                  </button>
                  <button className={styles.service_contain_learn_more_btn}>
                    Learn More
                  </button>
                </div>
                <p className={styles.service_contain_date}>Next: Today 7pm</p>
              </div>
            </div>

            <div
              className={styles.service_contain_mental}
              onMouseOver={() => {
                handleHover(ServicesSlides.mentalHealth);
              }}
            >
              <div className={styles.service_contain_circle}></div>

              <div className={styles.service_contain_section}>
                <h1 className="font-700">Mental Health</h1>
                <p>Vidio call with a provider</p>
                <div className={styles.service_contain_btn}>
                  <button
                    className={styles.service_contain_appointment_btn}
                    onClick={() => {
                      handleBookAppointmentNavigation();
                    }}
                  >
                    Book In Appointment
                  </button>
                  <button className={styles.service_contain_learn_more_btn}>
                    Learn More
                  </button>
                </div>
                <p className={styles.service_contain_date}>
                  Next: Today 3:00am
                </p>
              </div>
            </div>

            <div
              className={styles.service_contain_women}
              onMouseOver={() => {
                handleHover(ServicesSlides.womansHealth);
              }}
            >
              <div className={styles.service_contain_circle}></div>

              <div className={styles.service_contain_section}>
                <h1 className="font-700">Women&apos;s Health</h1>
                <p>Women&apos;s health and wellness</p>
                <div className={styles.service_contain_btn}>
                  <button
                    className={styles.service_contain_appointment_btn}
                    onClick={() => {
                      handleBookAppointmentNavigation();
                    }}
                  >
                    Book In Appointment
                  </button>
                  <button className={styles.service_contain_learn_more_btn}>
                    Learn More
                  </button>
                </div>
                <p className={styles.service_contain_date}>
                  Next: Today 3:00am
                </p>
              </div>
            </div>

            <div
              className={styles.service_contain_lgbtq}
              onMouseOver={() => {
                handleHover(ServicesSlides.lgbtq);
              }}
            >
              <div className={styles.service_contain_circle}></div>

              <div className={styles.service_contain_section}>
                <h1 className="font-700">LGBTQ + Health</h1>
                <p>Inclusive + judgment-free</p>
                <div className={styles.service_contain_btn}>
                  <button
                    className={styles.service_contain_appointment_btn}
                    onClick={() => {
                      handleBookAppointmentNavigation();
                    }}
                  >
                    Book In Appointment
                  </button>
                  <button className={styles.service_contain_learn_more_btn}>
                    Learn More
                  </button>
                </div>
                <p className={styles.service_contain_date}>
                  Next: Today 3:00am
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalServices;
