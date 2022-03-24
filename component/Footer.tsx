import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "./Logo";
import LayoutContainer from "./layout/LayoutContainer";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <LayoutContainer>
        <div className={styles.footer_top_contain_container}>
          <div className={styles.footer_top_contain_logo}>
            <h2>
              <Link href="/" passHref>
                <a>
                  <Logo />
                </a>
              </Link>
            </h2>
            <p className="font-500">Together through life</p>
          </div>
          <div className={styles.footer_top_contain_button}>
            <button className="font-400">Get the App</button>
            <button className="font-400">Find a Clinic</button>
          </div>
        </div>

        <div className={styles.footer_center_contain_container}>
          <div className={`${styles.footer_center_services} `}>
            <p className={styles.footer_links_title}>SERVICES</p>
            <ul className="font-400">
              <li>
                <Link href="">
                  <a>COVID-19</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Virtual Care </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Urgent Care </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Primary Care</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Popular Reasons</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a> Mental Health Care</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Insurance & Pricing</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_center_company}>
            <p className={styles.footer_links_title}>COMPANY</p>
            <ul className="font-400">
              <li>
                <Link href="">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>press</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Locations</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_center_for_business}>
            <p className={styles.footer_links_title}>FOR BUSINESS</p>
            <ul className="font-400">
              <li>
                <Link href="">
                  <a>Partners</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Carbon for Campus</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Occupational Health</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>COVID Employer Program</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_center_follow}>
            <p className={styles.footer_links_title}>FOLLOW</p>
            <ul>
              <li>
                <Link href="">
                  <a>Instagram</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Twitter</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>Facebook</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>LinkedIn</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer_center_get_support}>
            <p className={styles.footer_links_title}>GET SUPPORT</p>
            <ul className="font-400">
              <li>
                <Link href="">
                  <a> Support Center</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>support@aamhealth.com</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </LayoutContainer>
      <div className={styles.footer_bottom_contain_bg_color}>
        <LayoutContainer>
          <div className={styles.footer_bottom_contain_container}>
            <div className={styles.footer_bottom_logo}>
              <div className={styles.bottom_logo}>
                <Image
                  src="/images/logo.webp"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  // quality={100}
                />
              </div>
              <p className="font-400">© 2022</p>
            </div>

            <div className={styles.footer_bottom_policy}>
              <ul className="font-400">
                <li>
                  <Link href="">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Terms of Service</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </LayoutContainer>
      </div>
    </footer>
  );
}

export default Footer;
