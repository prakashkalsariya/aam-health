import styles from "./HeaderHover.module.scss";
import Link from "next/link";
import Logo from "../component/Logo";
import Hoverbox from "./hover-box-manubar/HoverBox";


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
                    <Logo />
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.menubar}>
            <div className={styles.manubar_container}>
              <div className={styles.manubar_name}>
                <p>COVID-19</p>
              </div>

              <div className={styles.manubar_hover_box}> 
              <Hoverbox/>

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
