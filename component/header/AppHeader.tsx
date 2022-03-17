import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ClientRoutes } from "../../constants/pages";
import PrimaryButton from "../buttons/PrimaryButton";
import styles from "./AppHeader.module.scss";
import Logo from "../Logo";
import { Person } from "@material-ui/icons";
import { LocalStorageService } from "../../services/localStorage";

const navigationLinks = [
  {
    title: "Home",
    href: "/",
    id: "home",
  },
  {
    title: "Medical Services",
    href: "#",
    id: "testimonials",
  },
  {
    title: "Doctors",
    href: "/book-appointment",
    id: "contact",
  },
  {
    title: "Blog",
    href: "#",
    id: "calculators",
  },
  {
    title: "About us",
    href: "#",
    id: "our_services",
  },
];

export interface IAppHeader {
  hideNavlinks?: boolean;
  hideAuthButtons?: boolean;
  showMobileNavBar?: boolean;
  classes?: {
    header: string;
    navbar: string;
  };
}

const AppHeader = ({
  hideNavlinks = false,
  hideAuthButtons = false,
  showMobileNavBar = false,
  classes = {
    header: "",
    navbar: "",
  },
}: IAppHeader) => {
  const [activeNavLink, setActiveNavLink] = useState("home");
  const [mobileNavBar, setMobileNavBar] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    // let activeLink = "home";
    // const pathname = window.location.pathname;
    setActiveNavLink("home");
  }, []);

  const handleMobileNavBar = () => {
    setMobileNavBar(!mobileNavBar);
  };

  useEffect(() => {
    const isUserLoggedIn = LocalStorageService.auth.isUserLoggedIn();

    if (isUserLoggedIn) {
      setIsUserLoggedIn(true);
    }
    const mobileDropdown = document.querySelector(".mobile-navbar");
    const closeButton = document.querySelector(".close-button");
    document.addEventListener("click", (e) => {
      if (
        !mobileDropdown?.contains(e.target as Node) &&
        !closeButton?.contains(e.target as Node)
      ) {
        setMobileNavBar(false);
      }
    });
  }, []);

  const handleLogout = () => {
    LocalStorageService.auth.logout();
    window.location.reload();
  };

  return (
    <header className={`${styles.head} ${classes.header}`}>
      <nav className={`${styles.navbar} ${classes.navbar}`}>
        <div className={styles.logo}>
          <h1 className="font-700">
            <Link href="/" passHref>
              <a>
                <Logo />
              </a>
            </Link>
          </h1>
        </div>
        <div className={styles.headerLeftContent}>
          <ul
            className={`${styles.manu} ${
              hideNavlinks ? styles.display_none : ""
            }`}
          >
            {navigationLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href}>
                  <a
                    className={`font-400 ${styles.menuLink} ${
                      activeNavLink === link.id ? styles.activeLink : ""
                    }`}
                    onClick={handleMobileNavBar}
                  >
                    {link.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`${styles.btn} ${styles.buttonContainer} ${
              hideAuthButtons ? styles.display_none : ""
            }`}
          >
            {isUserLoggedIn ? (
              <div className={styles.user_container}>
                <div
                  className={styles.circle}
                  title="click to Logout"
                  onClick={() => handleLogout()}
                >
                  <Person className={styles.icon} />
                </div>
              </div>
            ) : (
              <div>
                <Link href={`${ClientRoutes.login}`} passHref>
                  <a>
                    {" "}
                    <button className={styles.login_btn}>Login</button>
                  </a>
                </Link>{" "}
                <Link href={`${ClientRoutes.register}`} passHref>
                  <a>
                    {" "}
                    <button className={styles.signup_btn}>Sign Up</button>
                  </a>
                </Link>
              </div>
            )}
          </div>
          <div
            className={`close-button ${styles.menuButtonContainer} ${
              mobileNavBar ? styles.mobileMenuCloseButton : ""
            } ${showMobileNavBar ? styles.mobieButtonActive : ""}`}
            onClick={handleMobileNavBar}
          >
            <div className={styles.menuButtonTopLine}></div>
            <div className={styles.menuButtonMiddleLine}></div>
            <div className={styles.menuButtonBottomLine}></div>
          </div>

          <div
            className={`mobile-navbar ${styles.navigationDropDownContainer} ${
              mobileNavBar ? styles.navigationDropDownContainerActive : ""
            }`}
          >
            <div className={styles.linksContainer}>
              <ul className={styles.mobileMenu}>
                {navigationLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href}>
                      <a
                        className={`font-500 ${styles.menuLink} ${
                          activeNavLink === link.id ? styles.activeLink : ""
                        } ${
                          navigationLinks.length === idx + 1
                            ? styles.lastLink
                            : ""
                        }`}
                        onClick={handleMobileNavBar}
                      >
                        {link.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              <div
                className={`${styles.mobileNavButtons} ${styles.buttonContainer}`}
              >
                {isUserLoggedIn ? (
                  <div className={styles.user_container}>
                    <div
                      className={styles.circle}
                      onClick={() => handleLogout()}
                    >
                      <Person className={styles.icon} />
                    </div>
                  </div>
                ) : (
                  <div>
                    <Link href={`${ClientRoutes.login}`} passHref>
                      <a>
                        {" "}
                        <PrimaryButton
                          className={styles.login_btn}
                          color="secondary"
                          outlined={true}
                        >
                          Login
                        </PrimaryButton>
                      </a>
                    </Link>{" "}
                    <Link href={`${ClientRoutes.register}`} passHref>
                      <a>
                        {" "}
                        <PrimaryButton className={styles.signup_btn}>
                          Sign Up
                        </PrimaryButton>
                      </a>
                    </Link>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
