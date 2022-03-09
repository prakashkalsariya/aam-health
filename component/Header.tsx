
 import styles from "./Header.module.scss";
 import Link from "next/link";

function Header(){
    return(
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
    )
}


export default Header;