import type { NextPage } from "next";
import React from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

import { useRouter } from "next/router";






const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main_layout_container}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <ul>
                <li>
                  <Link href="/">
                    <a>
                      <h1>Aam Health</h1>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.menubar}>
              <ul>
                <li>
                  <Link href="">
                    <a>COVID-19</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Get Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Insurance & Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Location </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Company</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.login_btn}>
              <button>Log In</button>
            </div>
          </nav>
        </header>

        <div className={styles.banner_container}>
          <div className={styles.banner_img}>
            <Image
              src="/images/banner.jpg"
              alt="banner"
              width={1600}
              height={920}
            />
          </div>

          <div className={styles.banner_contain_container}>
            <div className={styles.contain_text_area_container}>
              <h1>
                Making good health accessible <span>to all.</span>{" "}
              </h1>
              <p>Book same day appointments. No subscriptions.</p>
            </div>

            <div className={styles.contain_box_container}>
              <div className={styles.box_heading}>
                <p>Book an Appointment</p>
              </div>

              <div className={styles.box_item_container}>
                <div className={styles.box_primary_care_container}>
                  <div className={styles.box_circle}> </div>
                  <div className={styles.box_contain}>
                    <h3>Primary Care</h3>
                    <p>Ideal for preventive Care </p>
                  </div>
                  <div className={styles.box_date}>
                    <p>Next: Today 10pm</p>
                  </div>
                </div>

                <div className={styles.box_urgent_care_container}>
                  <div className={styles.box_circle}> </div>
                  <div className={styles.box_contain}>
                    <h3>Urgent Care</h3>
                    <p>Ideal for immediate medical attention</p>
                  </div>
                  <div className={styles.box_date}>
                    <p>Next: Today 6pm</p>
                  </div>
                </div>

                <div className={styles.box_virtual_care_container}>
                  <div className={styles.box_circle}> </div>
                  <div className={styles.box_contain}>
                    <h3>Virtual Care</h3>
                    <p>Video with your health team</p>
                  </div>
                  <div className={styles.box_date}>
                    <p>Next: Today 7pm</p>
                  </div>
                </div>
              </div>

              <div className={styles.box_btn}>
                <button>Book In Appointment</button>
              </div>
            </div>
          </div>
        </div>

        <main className={styles.main}>
          <div className={styles.main_top_contain}>
            <h1>
              A friendlier healthcare experience,{" "}
              <span> without the membership fees.</span>{" "}
            </h1>
            <button>Book In Appointment</button>
          </div>

          <div className={styles.information_item_container}>
            <div className={styles.appointments_item_container}>
              <Image
                src="/images/appointments.svg"
                alt="item"
                width={200}
                height={200}
              />
              <h1>Book same day appointments</h1>
              <p>Primary, urgent, and virtual care visits on YOUR schedule.</p>
            </div>

            <div className={styles.team_item_container}>
              <Image
                src="/images/team.svg"
                alt="item"
                width={200}
                height={200}
              />
              <h1>Chat with your health team</h1>
              <p>
                Get treated for a range of symptoms & conditions right from your
                smartphone.
              </p>
            </div>

            <div className={styles.doorstep_item_container}>
              <Image
                src="/images/doorstep.svg"
                alt="item"
                width={200}
                height={200}
              />
              <h1>Prescriptions at your doorstep</h1>
              <p>
                Get your medications sent straight to your chosen pharmacy or to
                your door—whatever works for you.
              </p>
            </div>

            <div className={styles.place_item_container}>
              <Image
                src="/images/place.svg"
                alt="item"
                width={200}
                height={200}
              />
              <h1>All your health in one place</h1>
              <p>
                Access your medical charts, complete records, and test results
                immediately.
              </p>
            </div>
          </div>

          {/* <div className={styles.services_container}>
            <div className={styles.blue}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                adipisci soluta cumque unde amet laborum sunt suscipit
                praesentium aut provident.
              </p>
              <div className={styles.blue_contain}>
                <h2>position care</h2>
              </div>
            </div>




            <div className={styles.yellow}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                adipisci soluta cumque unde amet laborum sunt suscipit
                praesentium aut provident.
              </p>
              <div className={styles.yellow_contain}>
                <h2>position care</h2>
              </div>
            </div> */}






         
        </main>
      </div>
    </div>
  );
};

export default Home;
