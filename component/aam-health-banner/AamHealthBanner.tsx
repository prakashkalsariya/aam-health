import styles from "./AamHealthBanner.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ClientRoutes } from "../../constants/pages";

function Aamhealthbanner() {
  return (
    <div className={styles.aam_health_banner_img_container}>
      <div className={styles.img}>
        <Image
          src="/images/aam-health-banner-bottom-img.webp"
          alt="banner"
          layout="fill"
          objectFit={"cover"}
          quality={100}
        />
      </div>
      <div className={styles.btn}>
        <Link href={ClientRoutes.investNow}>
          <a>
            <button className="font-600">Invest Now</button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Aamhealthbanner;
