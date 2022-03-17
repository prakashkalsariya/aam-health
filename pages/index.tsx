import type { NextPage } from "next";
import React from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Footer from "../component/Footer";
import Specialities from "../component/Specialities";
import AppHeader from "../component/header/AppHeader";
import LayoutContainer from "../component/layout/LayoutContainer";
import { handleBookAppointmentNavigation } from "../utils/utils";
import MedicalServices from "../component/MedicalServices";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amm Health | Together through life</title>
        <meta name="description" content="Health care and dietary services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main_layout_container}>
        {/* <Header /> */}
        <AppHeader />
        <div className={styles.banner_container}>
          <div className={styles.banner_img}>
            <Image
              src="/images/banner-img.webp"
              alt="banner"
              layout="fill"
              objectFit={"cover"}
              quality={100}
            />
          </div>
          <div className={styles.banner_contain_container}>
            <h1 className="font-700">
              We care about <br />
              your health
            </h1>
            <p className="font-400 sub-text">
              Book a same day appointment with, <br />
              our specialized doctors
            </p>
            <button
              onClick={() => {
                handleBookAppointmentNavigation();
              }}
              className={`font-600 ${styles.banner_button}`}
            >
              Book an Appointment Now
            </button>
          </div>
        </div>

        <LayoutContainer>
          <div className={styles.information_item_container}>
            <div className={styles.appointment_item}>
              <div className={styles.item_img}>
                <Image
                  src="/images/appointment-item-img.png"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  quality={100}
                />
              </div>
              <div className={styles.item_contain}>
                <h1 className="font-700">
                  Book a same day
                  <br /> appointment
                </h1>
                <p className="font-400">
                  Primary, urgent, and virtual care visits on YOUR schedule.
                </p>
              </div>
            </div>

            <div className={styles.team_item}>
              <div className={styles.item_contain}>
                <h1 className="font-700">
                  Chat with your <br /> health team
                </h1>
                <p className="font-400">
                  Get treated for a range of symptoms & conditions right from
                  your smartphone.
                </p>
              </div>

              <div className={styles.item_img}>
                <Image
                  src="/images/team-item-img.png"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  quality={100}
                />
              </div>
            </div>

            <div className={styles.doorstep_item}>
              <div className={styles.item_img}>
                <Image
                  src="/images/doorstep-item-img.png"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  quality={100}
                />
              </div>
              <div className={styles.item_contain}>
                <h1 className="font-700">
                  Prescriptions at your <br /> doorstep
                </h1>
                <p className="font-400">
                  Get your medications sent straight to your chosen pharmacy or
                  to your door whatever works for you.
                </p>
              </div>
            </div>

            <div className={styles.place_item}>
              <div className={styles.item_contain}>
                <h1 className="font-700">
                  All your health in <br /> one place
                </h1>
                <p className="font-400">
                  Access your medical charts, complete records, and test results
                  immediately.
                </p>
              </div>
              <div className={styles.item_img}>
                <Image
                  src="/images/place-item-img.png"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  quality={100}
                />
              </div>
            </div>
          </div>
        </LayoutContainer>

        <LayoutContainer>
          <div className={styles.specialities_heading}>
            <h1 className="font-700">Doctors of various specialities </h1>
            <p className="font-400">
              Find doctors of all specializations suitable to treat your <br />{" "}
              medical conditions
            </p>
          </div>

          <div className={styles.specialities_section}>
            <Specialities />
          </div>
        </LayoutContainer>

        <MedicalServices />

        <div className={styles.move_in_container}>
          <div className={styles.move_in_top_contain}>
            <h1 className="font-700">We&apos;re movin&apos;in!</h1>
            <p className="font-400">
              Modern clinics, designed from the ground up, with patient
              experience in mind. Check out our new locations.
            </p>
          </div>

          <LayoutContainer>
            <div className={styles.move_in_img_contain_container}>
              <div className={styles.move_in_img}>
                <Image
                  src="/images/home-img.jpg"
                  alt="location"
                  objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className={styles.move_in_location_container}>
                <div
                  className={`${styles.santa_clara_square_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Mumbai</h2>
                  <p className="font-400">
                    4, Sukan Apt, Mg Road No.3, Kandivli(w)
                  </p>
                  <button className="font-400">View Location</button>
                </div>

                <div
                  className={`${styles.san_pedro_square_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Delhi</h2>
                  <p className="font-400">
                    309 Narsi Natha Street Masjid Bunder, Delhi, 400003
                  </p>
                  <button className="font-400">View Location</button>
                </div>

                <div
                  className={`${styles.almaden_ranch_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Patna</h2>
                  <p className="font-400">
                    11 Troop Bazar, Hyderabad, Patna, 500001
                  </p>
                  <button className="font-400">View Location</button>
                </div>

                <div
                  className={`${styles.hillsdale_mall_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Jaipur</h2>
                  <p className="font-400">
                    60 Hirnen Shopping Centre M.g. Road Opp Ratna Hotel
                    Goregaon, Jaipur, 400062
                  </p>
                  <button className="font-400">View Location</button>
                </div>

                <div
                  className={`${styles.redwood_plaza_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Ranchi</h2>
                  <p className="font-400">
                    Radium Rd, beside Maharaja Hotel, Ahirtoli, Ranchi,
                    Jharkhand 834001
                  </p>
                  <button className="font-400">View Location</button>
                </div>

                <div
                  className={`${styles.grand_plaza_location} ${styles.move_in_content}`}
                >
                  <h2 className="font-500">Lucknow</h2>
                  <p className="font-400">
                    Mody Estate L B Shastri Marg Chira Nagar Ghatkopar, Mumbai,
                    Lucknow, 400086
                  </p>
                  <button className="font-400">View Location</button>
                </div>
              </div>
            </div>
          </LayoutContainer>
        </div>

        <div className={styles.phone_app_container}>
          <div className={styles.phone_app_img}>
            <Image
              src="/images/mobile-app-demo.webp"
              alt="app-data"
              // objectFit="cover"
              layout="fill"
            />
          </div>
          <div className={styles.phone_app_contain_container}>
            <div className={styles.phone_app_top_contain}>
              <h1 className="font-700">Get treated right from your phone.</h1>
              <div className={styles.mobile_no_contain}>
                <input
                  className="font-500"
                  type="number"
                  placeholder="Phone Number"
                />
                <button className="font-400">Text Me The App</button>
              </div>
              <p className="font-400">
                AVAILABLE IN THE APP STORE AND GOOGLE PLAY
              </p>
            </div>

            <div className={styles.phone_app_bottom_contain}>
              <div className={styles.mobile_phone_used_img}>
                <Image
                  src="/images/mobile-phone-used-img.webp"
                  alt="app-data"
                  // objectFit="cover"
                  layout="fill"
                />
              </div>

              <div className={styles.mobile_point}>
                <p>
                  <span className={styles.checkmark}></span> Book same-day
                  appointments
                </p>
                <p>
                  <span className={styles.checkmark}></span> Talk to a provider
                  in real time
                </p>
                <p>
                  <span className={styles.checkmark}></span> Get care from the
                  comfort of home
                </p>
                <p>
                  <span className={styles.checkmark}></span> Most insurance
                  accepted
                </p>
              </div>
            </div>
          </div>
        </div>

        <main className={styles.main}>
          {/* <div className={styles.specialities_btn}>
            <p></p>
            <button className="font-400">View More</button>
            <p></p>
          </div> */}

          <div className={styles.covid_container}>
            <div className={styles.covid_img}>
              <Image
                src="/images/covid-img.jpg"
                alt="app-data"
                objectFit={"cover"}
                layout="fill"
              />
            </div>

            <LayoutContainer>
              <div className={styles.covid_contain_container}>
                <div className={styles.covid_top_contain}>
                  <p className="font-300">
                    CAPTAIN NAJERA, LA FIRE DEPT, DODGER STADIUM VACCINATION
                    SITE:
                  </p>
                  <h1 className="font-00">
                    In order to make this work well, we have a collaborative
                    effort with Carbon Health... Without them this wouldn’t
                    work.
                  </h1>
                  <button className="font-00">
                    See All COVID-19 Initiatives
                  </button>
                </div>
                <div className={styles.covid_bottom_contain}>
                  <div className={styles.covid_bottom_left}>
                    <p>TESTS CONDUCTED</p>
                    <h1>1.44 million +</h1>
                  </div>
                  <div className={styles.covid_bottom_center}>
                    <p>VACCINES ADMINISTERED</p>
                    <h1>1.55 million +</h1>
                  </div>

                  <div className={styles.covid_bottom_right}>
                    <p>UCSF DIGITAL HEALTH AWARDS</p>
                    <h1>
                      COVID Patriot Best Delivery & Decision Support Award
                    </h1>
                  </div>
                </div>
              </div>
            </LayoutContainer>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
