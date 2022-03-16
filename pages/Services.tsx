import styles from "../styles/Services.module.scss";
import Servicescard from "../component/services/ServicesCard";

function Services() {
  return (
    // <div>
    //   <Servicescard />
    // </div>

    <div>
      <div className={styles.service_section_container}>
        <div className={styles.service_color_varient_box_container}>
          <div className={styles.service_color_varient_box_primary}>
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

          <div className={styles.service_color_varient_box_urgent}>
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

          <div className={styles.service_color_varient_box_mental}>
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

          <div className={styles.service_color_varient_box_women}>
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

          <div className={styles.service_color_varient_box_lgbtq}>
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

            <div className={styles.service_contain_section}>
              <h1>Primary Care</h1>
              <p>Ideal for preventative care</p>
              <div className={styles.service_contain_btn}>
                <button className={styles.service_contain_appointment_btn}>
                  Book In Appointment
                </button>
                <button className={styles.service_contain_learn_more_btn}>
                  Learn More
                </button>
              </div>
              <p className={styles.service_contain_date}>Next: Today 10:10pm</p>
            </div>
          </div>

          <div className={styles.service_contain_urgent}>
            <div className={styles.service_contain_circle}></div>

            <div className={styles.service_contain_section}>
              <h1>Urgent Care</h1>
              <p>Ideal for immediate needs</p>
              <div className={styles.service_contain_btn}>
                <button className={styles.service_contain_appointment_btn}>
                  Book In Appointment
                </button>
                <button className={styles.service_contain_learn_more_btn}>
                  Learn More
                </button>
              </div>
              <p className={styles.service_contain_date}>Next: Today 7pm</p>
            </div>
          </div>

          <div className={styles.service_contain_mental}>
            <div className={styles.service_contain_circle}></div>

            <div className={styles.service_contain_section}>
              <h1>Mental Health</h1>
              <p>Vidio call with a provider</p>
              <div className={styles.service_contain_btn}>
                <button className={styles.service_contain_appointment_btn}>
                  Book In Appointment
                </button>
                <button className={styles.service_contain_learn_more_btn}>
                  Learn More
                </button>
              </div>
              <p className={styles.service_contain_date}>Next: Today 3:00am</p>
            </div>
          </div>

          <div className={styles.service_contain_women}>
            <div className={styles.service_contain_circle}></div>

            <div className={styles.service_contain_section}>
              <h1>Women's Health</h1>
              <p>Women's health and wellness</p>
              <div className={styles.service_contain_btn}>
                <button className={styles.service_contain_appointment_btn}>
                  Book In Appointment
                </button>
                <button className={styles.service_contain_learn_more_btn}>
                  Learn More
                </button>
              </div>
              <p className={styles.service_contain_date}>Next: Today 3:00am</p>
            </div>
          </div>

          <div className={styles.service_contain_lgbtq}>
            <div className={styles.service_contain_circle}></div>

            <div className={styles.service_contain_section}>
              <h1>LGBTQ + Health</h1>
              <p>Inclusive + judgment-free</p>
              <div className={styles.service_contain_btn}>
                <button className={styles.service_contain_appointment_btn}>
                  Book In Appointment
                </button>
                <button className={styles.service_contain_learn_more_btn}>
                  Learn More
                </button>
              </div>
              <p className={styles.service_contain_date}>Next: Today 3:00am</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
