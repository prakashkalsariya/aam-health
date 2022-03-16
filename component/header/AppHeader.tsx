import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ClientRoutes } from "../../constants/pages";
import PrimaryButton from "../buttons/PrimaryButton";
import styles from "./AppHeader.module.scss";
import Logo from "../Logo";

const navigationLinks = [
  {
    title: "Home",
    href: "/",
    id: "home",
  },
  {
    title: "About us",
    href: "#",
    id: "our_services",
  },
  {
    title: "Medical Services",
    href: "#",
    id: "testimonials",
  },
  {
    title: "Blog",
    href: "#",
    id: "calculators",
  },
  {
    title: "Doctors",
    href: "#",
    id: "contact",
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

  useEffect(() => {
    // let activeLink = "home";
    // const pathname = window.location.pathname;
    setActiveNavLink("home");
  }, []);

  const handleMobileNavBar = () => {
    setMobileNavBar(!mobileNavBar);
  };

  useEffect(() => {
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

  return (
    <header className={`${styles.head} ${classes.header}`}>
      <nav className={`${styles.navbar} ${classes.navbar}`}>
        <div className={styles.logo}>
          <h1 className="font-700"><Logo/></h1>
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
                    className={`font-500 ${styles.menuLink} ${
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
