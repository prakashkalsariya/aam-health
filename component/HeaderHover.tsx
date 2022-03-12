import styles from "./HeaderHover.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "../component/Logo";
function Headerhover() {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                  <Logo/>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.menubar}>
            <div className={styles.manubar_covid_container}>
              <div className={styles.manubar_covid_link_container}>
                <div className={styles.covid_point}>
                  <p></p>
                </div>
                <div className={styles.manubar_covid_name}>
                  <p>COVID-19</p>
                  <p className={styles.covid_arrow}>⮟</p>
                </div>
              </div>

              <div className={styles.manubar_covid_hover_box}>
                <div className={styles.hover_box_left_contain_container}>
                  <div className={styles.hover_box_left_contain_head}>
                    <p>COVID-19 CARE</p>

                    <div
                      className={
                        styles.hover_box_left_contain_services_container
                      }
                    >
                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          <div className={styles.services_circle_img}>
                            <Image
                              src="/images/get-tested-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                        </div>
                        <div className={styles.services_contain}>
                          <h1>Get Tested</h1>
                          <p>Find and book a test</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/virtual-care-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Virtual Care</h1>
                          <p>Connect on the go</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/travel-testing-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Travel Testing</h1>
                          <p>$150-$195 per porson</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/get-vaccinated-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Get Vaccinated</h1>
                          <p>Find & book a vaccine</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.hover_box_right_contain_container}>
                  <div className={styles.hover_box_right_contain_head}>
                    <p>More</p>
                  </div>
                  <div className={styles.hover_box_right_contain_bottom}>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Employer Program</p>
                    </div>

                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> COVID-Positive Patient Care</p>
                    </div>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Order a Home Test</p>
                    </div>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Resource Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.manubar_get_care_container}>
              <div className={styles.manubar_get_care_link_container}>
                <div className={styles.get_care_point}>
                  <p></p>
                </div>
                <div className={styles.manubar_get_care_name}>
                  <p>Get Care</p>
                  <p className={styles.get_care_arrow}>⮟</p>
                </div>
              </div>

              <div className={styles.manubar_get_care_hover_box}>
                <div className={styles.hover_box_left_contain_container}>
                  <div className={styles.hover_box_left_contain_head}>
                    <p>CORE SERVICES</p>

                    <div
                      className={
                        styles.hover_box_left_contain_services_container
                      }
                    >
                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/urgent-care-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Urgent Care</h1>
                          <p>Get care quickly</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/virtual-care-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Virtual Care</h1>
                          <p>Connect on the go</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/primary-care-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Primary Care</h1>
                          <p>Get preventive care</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/mental-health-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Mental health</h1>
                          <p>Video chat with a provider </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.hover_box_right_contain_container}>
                  <div className={styles.hover_box_right_contain_head}>
                    <p>SPECIALITIES</p>
                  </div>
                  <div className={styles.hover_box_right_contain_bottom}>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Women's Health</p>
                    </div>

                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> LGBTQ + Health</p>
                    </div>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Diabetes Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.manubar_insurance_location_container}>
              <ul>
                <li>
                  {" "}
                  <p className={styles.manubar_insurance_location_point}></p>
                  <Link href="">
                    <a>Insurance & Pricing</a>
                  </Link>
                </li>
                <li>
                  {" "}
                  <p className={styles.manubar_insurance_location_point}></p>
                  <Link href="">
                    <a>Location</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.manubar_company_container}>
              <div className={styles.manubar_company_link_container}>
                <div className={styles.company_point}>
                  <p></p>
                </div>
                <div className={styles.manubar_company_name}>
                  <p>Company</p>
                  <p className={styles.company_arrow}>⮟</p>
                </div>
              </div>

              <div className={styles.manubar_company_hover_box}>
                <div className={styles.hover_box_left_contain_container}>
                  <div className={styles.hover_box_left_contain_head}>
                    <p>AAM HEALTH</p>

                    <div
                      className={
                        styles.hover_box_left_contain_services_container
                      }
                    >
                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/about-us-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>About Us</h1>
                          <p>Vision, value,& team</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/press-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Press</h1>
                          <p>News & press kit</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/careers-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Careers</h1>
                          <p>We're hiring</p>
                        </div>
                      </div>

                      <div className={styles.hover_box_left_contain_service}>
                        <div className={styles.services_circle}>
                          
                          
                        <div className={styles.services_circle_img}>
                            <Image
                              src="/images/blog-img.png"
                              alt="banner"
                              layout="fill"
                              objectFit={"cover"}
                            />
                          </div>
                          
                          
                          </div>
                        <div className={styles.services_contain}>
                          <h1>Blog</h1>
                          <p>Health & Wellness resources</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.hover_box_right_contain_container}>
                  <div className={styles.hover_box_right_contain_head}>
                    <p>FOR BUSINESS</p>
                  </div>
                  <div className={styles.hover_box_right_contain_bottom}>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p>Partners</p>
                    </div>

                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p>Aam For Campus</p>
                    </div>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> Occupational Health</p>
                    </div>
                    <div className={styles.hover_box_right_contain_bottom_para}>
                      <p
                        className={styles.hover_box_right_contain_bottom_point}
                      ></p>
                      <p> COVID Employer Program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.login_btn}>
            <button>Log In</button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Headerhover;
