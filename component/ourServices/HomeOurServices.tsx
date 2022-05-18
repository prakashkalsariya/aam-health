import styles from "./HomeOurServices.module.scss";
import Image from "next/image";
import Taxi from "./svgSymbol/Taxi";
import Food from "./svgSymbol/Food";
import Pharmacy from "./svgSymbol/Pharmacy";
import Consultation from "./svgSymbol/Consultation";
import Tests from "./svgSymbol/Tests";
import OtherServices from "./svgSymbol/OtherServices";

const servicesData = [
  {
    name_black: "Aam Health",
    name_orange: "Taxi",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Book Now",
    logo: <Taxi />,
    src: "/images/Aam-Health-Taxi-Services-img.webp",
  },
  {
    name_black: "Aam Health",
    name_orange: "Food",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Order Now",
    logo: <Food />,
    src: "/images/Aam-Health-Food-Our Services.webp",
  },
  {
    name_black: "Aam Health",
    name_orange: "Pharmacy",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Order Now",
    logo: <Pharmacy />,
    src: "/images/Aam-Health-Pharmacy-Our-Services.webp",
  },
  {
    name_black: "Doctors and experts",
    name_orange: "consultation",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Book Appointment",
    logo: <Consultation />,
    src: "/images/Doctors-and-experts-consultation-Services-img.webp",
  },
  {
    name_black: "Lab",
    name_orange: "tests",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Book Appointment",
    logo: <Tests />,
    src: "/images/Lab-tests-Services-img.webp",
  },
  {
    name_black: "Health training and",
    name_orange: "other services",
    para: "Get your medications sent straight to your chosen pharmacy or to your door—whatever works for you.",
    button: "Book Appointment",
    logo: <OtherServices />,
    src: "/images/Health-training-and-other-Services-img.webp",
  },
];

function HomeOurServices() {
  return (
    <div className={styles.our_services_main_container}>
      <div className={styles.our_services_heading}>
        <p className={styles.line1}></p>
        <h1 className="font-700">Our Services</h1>
        <p className={styles.line2}></p>
      </div>
      <div className={styles.our_services_main_item_container}>
        {servicesData.map((servicesData) => (
          <div className={styles.our_services_single_item_container}>
            <div className={styles.image}>
              <Image
                src={servicesData.src}
                alt="services"
                layout="fill"
                objectFit={"cover"}
                quality={100}
              />
            </div>
            <div className={styles.main_contain_container}>
              <div className={styles.services_name}>
                <p className={styles.symbol}>{servicesData.logo}</p>
                <p className={`font-700 ${styles.name}`}>
                  {servicesData.name_black}{" "}
                  <span className="primary"> {servicesData.name_orange}</span>
                </p>
              </div>
              <div className={styles.contain_container}>
                <p className="font-400">{servicesData.para}</p>
                <button className="font-500"> {servicesData.button}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.why_us_heading}>
        <p className={styles.line1}></p>
        <h1 className="font-700">Why Us</h1>
        <p className={styles.line2} ></p>
      </div>
    </div>
  );
}

export default HomeOurServices;
