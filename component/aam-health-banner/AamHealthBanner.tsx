import styles from "./AamHealthBanner.module.scss"
import Image from "next/image"



function Aamhealthbanner(){
    return(
        <div className={styles.aam_health_banner_img_container}>
               <div className={styles.img}>
               <Image
                  src="/images/aam-health-banner-bottom-img.png"
                  alt="banner"
                  layout="fill"
                  objectFit={"cover"}
                  quality={100}
                />
               </div>
               <div className={styles.btn}>
                   <button className="font-600">Invest Now</button>
               </div>
        </div>
    )
}


export default Aamhealthbanner;