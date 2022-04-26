import Link from "next/link";
import Image from "next/image";
import styles from "./styles/InvestmentSuccess.module.scss";

function InvestmentSuccess() {
  return (
    <div className={styles.model_container}>
      <div className={styles.model_contain_container}>
        <div className={styles.right_tick_img}>
          <Image
            src="/images/right-img.svg"
            alt="banner"
            layout="fill"
            objectFit={"cover"}
            quality={100}
          />
        </div>
        <h2 className="font-600">Thanks for your interest</h2>
        <h1 className="font-600">We received your request</h1>
        <p className="font-400">
          We received your request and we will get back to you shorty. Thanks
          for your support.
        </p>
        <ul>
          <li>
            <Link href="/">
              <a>
                <button className="font-500">Back to home</button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.model_img_container}>
        <div className={styles.shadow}></div>
        <div className={styles.img}>
          <Image
            src="/images/nursing-care-manu-bar.webp"
            alt="banner"
            layout="fill"
            objectFit={"cover"}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}

export default InvestmentSuccess;
