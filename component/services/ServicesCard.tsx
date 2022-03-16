import styles from "./ServicesCard.module.scss";

function Servicescard() {
  return (
    <div className={styles.services_card_main_container}>
      <div className={styles.primary_care_container}>
        <div className={styles.contain_container}>
          <h1>Primary Care</h1>
          <p>Ideal for preventative care</p>
          <button>Book an Appointment</button>
          <p className={styles.contain_date}>Next: Today 8pm</p>
        </div>

        <div className={styles.color_box}>
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
        </div>
      </div>

      <div className={styles.urgent_care_container}>
        <div className={styles.contain_container}>
          <h1>Urgent Care</h1>
          <p>Ideal for immediate needs</p>
          <button>Book an Appointment</button>
          <p className={styles.contain_date}>Next: Today 6pm</p>
        </div>

        <div className={styles.color_box}>
          <p>UTI</p> <p>Headache </p>
          <p>Injuries</p>
          <p>Cuts </p> <p>STI </p>
          <p>Rash </p>
          <p>Cough</p>
          <p>Cold or Flu </p>
          <p>Fever </p> <p>Stomach Pain </p> <p>Red Eye </p>
        </div>
      </div>





      <div className={styles.mental_health_container}>
        <div className={styles.contain_container}>
          <h1>Mental Health</h1>
          <p>Video call with a provider</p>
          <button>Book an Appointment</button>
          <p className={styles.contain_date}>Next: Today 9pm</p>
        </div>

        <div className={styles.color_box}>
               <p>Anxiety</p>
             <p>Depression </p>
             <p>Smoking Cessation  </p>
             <p>Alcohol Use </p>
             <p>Weight Loss </p>
             <p>Stress</p>
             <p>Family Therapy</p>
             <p>ADHD </p>
             <p>Sadness </p>
             <p>Relationships </p>
             <p>Group Therapy</p>
        </div>
      </div>




      <div className={styles.women_health_container}>
        <div className={styles.contain_container}>
          <h1>Women's Health</h1>
          <p>Women's health and wellness</p>
          <button>Book an Appointment</button>
          <p className={styles.contain_date}>Next: Today 10pm</p>
        </div>

        <div className={styles.color_box}>
             <p>UTI</p>
             <p>Breast Health </p>
             <p>Annual Physical  </p>
             <p>Pelvic Exam </p>
             <p>Pap Smear </p>
             <p>Bone Density Exam</p>
             <p>Ultrasound </p>
             <p>Birth Control </p>
             <p>Skin Cancer </p>
             <p>Pregnancy Test </p>
             <p>Vaginal Infection</p>
        </div>
      </div>





      <div className={styles.lgbtq_health_container}>
        <div className={styles.contain_container}>
          <h1>LGBTQ + Health</h1>
          <p>Inclusive + judgment-free</p>
          <button>Book an Appointment</button>
          <p className={styles.contain_date}>Next: Today 11pm</p>
        </div>

        <div className={styles.color_box}>
               <p>Annual Physical</p>
             <p>Pelvic Exam </p>
             <p>Chest Health  </p>
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
    </div>
  );
}

export default Servicescard;
