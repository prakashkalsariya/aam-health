
 import styles from "./Header.module.scss";
 import Link from "next/link";
 import Logo from "./Logo";
function Header(){
    return(
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
            <div className={styles.menubar_btn_container}>
            <div className={styles.menubar}>
              <ul className="font-400">
                <li>
                  <Link href="">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>About us</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Medical Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Blog </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Doctors</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.login_btn}>
              <button className="font-400">Log In</button>
            </div>

            </div>
          </nav>
        </header>
    )
}


export default Header;