import Link from "next/link";
import React, { useEffect, useState } from "react";
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

const AppHeader = () => {
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
    <header className={styles.head}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1 className="font-700"><Logo/></h1>
        </div>
        <div className={styles.headerLeftContent}>
          <ul className={styles.manu}>
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
          <div className={`${styles.btn} ${styles.buttonContainer}`}>
            <button className={styles.login_btn}>Login</button>
            <button className={styles.signup_btn}>Sign Up</button>
          </div>
          <div
            className={`close-button ${styles.menuButtonContainer} ${
              mobileNavBar ? styles.mobileMenuCloseButton : ""
            }`}
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
                <PrimaryButton
                  className={styles.login_btn}
                  color="secondary"
                  outlined={true}
                >
                  Login
                </PrimaryButton>
                <PrimaryButton className={styles.signup_btn}>
                  Sign Up
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
