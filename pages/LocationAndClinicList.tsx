import styles from "../styles/LocationAndClinicList.module.scss";

import Header from "../component/Header";
import Footer from "../component/Footer";

const clinicData = [
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
  {
    location: "Bostom, Ma-Downtown Boston",
    date: "Open 9am today",
    address: "80 Summer St-7479 mi away",
    primary_dot: "▸",
    primary: "Primary Care  -",
    primary_date: "Today 7:50pm",

    urgent_dot: "▸",
    urgent: "Urgent Care  -",
    urgent_date: "Today 8:50pm",

    covid_test_dot: "▸",
    covid_test: " COVID Testing  -",
    covid_test_date: "Today 2:50pm",

    covid_travel_dot: "▸",
    covid_travel: "COVID Travel Testing  -",
    covid_travel_date: "Today 6:50pm",
  },
];

function Locationandcliniclist() {
  return (
    <div>
      <Header />
      <hr />
      {clinicData.map((value, idx) => (
        <div className={styles.main_container} key={idx}>
          <div className={styles.location_contain}>
            <h2>{value.location}</h2>
            <p>{value.date}</p>
            <p>{value.address}</p>
          </div>
          <div className={styles.care_contain}>
            <div className={styles.care_contain_item}>
              <p className={styles.care_contain_item_point}>
                {value.primary_dot}
              </p>
              <p className={styles.care_contain_item_item_name}>
                {value.primary}
              </p>
              <p className={styles.care_contain_item_date}>
                {value.primary_date}
              </p>
            </div>
            <div className={styles.care_contain_item}>
              <p className={styles.care_contain_item_point}>
                {value.urgent_dot}
              </p>
              <p className={styles.care_contain_item_item_name}>
                {value.urgent}
              </p>
              <p className={styles.care_contain_item_date}>
                {value.urgent_date}
              </p>
            </div>
            <div className={styles.care_contain_item}>
              <p className={styles.care_contain_item_point}>
                {value.covid_test_dot}
              </p>
              <p className={styles.care_contain_item_item_name}>
                {value.covid_test}
              </p>
              <p className={styles.care_contain_item_date}>
                {value.covid_test_date}
              </p>
            </div>
            <div className={styles.care_contain_item}>
              <p className={styles.care_contain_item_point}>
                {value.covid_travel_dot}
              </p>
              <p className={styles.care_contain_item_item_name}>
                {value.covid_travel}
              </p>
              <p className={styles.care_contain_item_date}>
                {value.covid_travel_date}
              </p>
            </div>
            <button>Select Clinic</button>
          </div>
          <div className={styles.dot}>
            -----------------------------------------------------------------------------------
          </div>
        </div>
      ))}
      <hr />
      <Footer />
    </div>
  );
}

export default Locationandcliniclist;

