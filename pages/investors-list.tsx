import styles from "../styles/investors-list.module.scss";
import Image from "next/image";
import LayoutContainer from "../component/layout/LayoutContainer";
import EmailIcon from "../component/icons/EmailIcon";
import MoNumberIcon from "../component/icons/MoNumberIcon";
import TimeIcon from "../component/icons/TimeIcon";
import { investorsList } from "../data/investors";

const date = investorsList[0].created_at.toDateString()
const hours = investorsList[0].created_at.getHours()
const minutes = investorsList[0].created_at.getMinutes()


function InvesotorList() {
// console.log(time.toDateString())
  
  return (
    <LayoutContainer>

<div className={styles.main_container}>
        {
 
investorsList.map( data =>


    
      <div className={styles.investor_list_main_container}>
        <div className={styles.investor_img_container}>
          <Image
            src="/images/investors-list-img.png"
            alt="app-data"
            // objectFit="cover"
            layout="fill"
          />
        </div>
        <div className={styles.investor_contain_container}>
          <div className={styles.investor_contain_right}>
            <p className={`font-500     ${styles.investor_contain_right_name}`}>
              {data.first_name} {data.last_name}
            </p>
            <p className={`font-400 ${styles.investor_contain_right_email}`}>
              <EmailIcon />
              <span className={styles.icon}>{data.email}</span>
            </p>
            <p className={`font-400 ${styles.investor_contain_right_number}`}>
              <MoNumberIcon />{" "}
              <span className={styles.icon}> {data.phone}</span>
            </p>
            <p className={`font-400 ${styles.investor_contain_right_date}`}>
              <TimeIcon />
              <span className={styles.icon}> {date}, {hours} :{minutes} </span> 
            </p>
          </div>
          <div className={styles.investor_contain_left}>
            <p className={`font-500  ${styles.investor_contain_left_invested}`}>
              Invested
            </p>
            <p className={`font-500 ${styles.investor_contain_left_ruppy}`}>
              ${data.amount}
            </p>
            <p className={`font-400 ${styles.investor_contain_left_more}`}>
              View details
            </p>
          </div>
        </div>
      </div>
    
           )  }

           </div>

<div className={styles.mobile_main_container}>

    {

investorsList.map( data =>

    

      <div className={styles.mobile_investor_list_main_container}>
          <div className={styles.mobile_top_contain_img_container}>
          <div className={styles.mobile_investor_img_container}>
          <Image
            src="/images/investors-list-img.png"
            alt="app-data"
            // objectFit="cover"
            layout="fill"
          />
        </div>
          <div className={styles.mobile_investor_top_contain}>
            <p className={`font-500  ${styles.mobile_investor_contain_top_invested}`}>
              Invested
            </p>
            <p className={`font-500 ${styles.mobile_investor_contain_top_ruppy}`}>
            ${data.amount}
            </p>
            <p className={`font-400 ${styles.mobile_investor_contain_top_more}`}>
              View details
            </p>
          </div>
          </div>
       
        <div className={styles.mobile_investor_bottom_contain_container}>
         
            <p className={`font-500     ${styles.mobile_investor_contain_bottom_name}`}>
            {data.first_name} {data.last_name}
            </p>
            <p className={`font-400 ${styles.mobile_investor_contain_bottom_email}`}>
              <EmailIcon />
              <span className={styles.icon}> {data.email}</span>
            </p>
            <p className={`font-400 ${styles.mobile_investor_contain_bottom_number}`}>
              <MoNumberIcon />{" "}
              <span className={styles.icon}> {data.phone}</span>
            </p>
            <p className={`font-400 ${styles.mobile_investor_contain_bottom_date}`}>
              <TimeIcon />
              <span className={styles.icon}> {date}, {hours} :{minutes} </span>
            </p>
          
         
        </div>
      </div>
) };
      </div>




    </LayoutContainer>
  );
}

export default InvesotorList;
