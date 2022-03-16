import styles from "./Footer.module.scss";
import Link from "next/link";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_top_contain_container}>
        <div className={styles.footer_top_contain_logo}>
          <h2>
            {" "}
            <Logo />
          </h2>
          <p>All your healthcare, in one place.</p>
        </div>
        <div className={styles.footer_top_contain_button}>
          <button>Get the App</button>
          <button>Find a Clinic</button>
        </div>
      </div>

      <div className={styles.footer_center_contain_container}>
        <div className={styles.footer_center_services}>
          <p>SERVICES</p>
          <ul>
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
          <p>COMPANY</p>
          <ul>
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
          <p>FOR BUSINESS</p>
          <ul>
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
          <p>FOLLOW</p>
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
          <ul>
            <p>GET SUPPORT</p>
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
      <div className={styles.footer_bottom_contain_bg_color}>
        <div className={styles.footer_bottom_contain_container}>
          <div className={styles.footer_bottom_logo}>
            <h2>Aam Health</h2>
            <p>© 2022</p>
          </div>

          <div className={styles.footer_bottom_policy}>
            <ul>
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
      </div>
    </footer>
  );
}

export default Footer;
