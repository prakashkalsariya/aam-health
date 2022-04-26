import styles from "../styles/investors-list.module.scss";
import Image from "next/image";
import LayoutContainer from "../component/layout/LayoutContainer";
import EmailIcon from "../component/icons/EmailIcon";
import MoNumberIcon from "../component/icons/MoNumberIcon";
import TimeIcon from "../component/icons/TimeIcon";
import investmentService from "../services/firebase/investments";
import AppHeader from "../component/header/AppHeader";
import SearchIcon from "../component/icons/SearchIcon";
import { useEffect, useState } from "react";
import { IInvestments } from "../services/firebase/models/investments";
import { CircularProgress } from "@material-ui/core";

function InvesotorList() {
  const [investorsList, setInvestorsList] = useState<IInvestments[]>([]);

  const getInvestorsList = async () => {
    const res = await investmentService.getInvestorsList();
    debugger;
    setInvestorsList(res);
    console.log(res);
  };

  useEffect(() => {
    getInvestorsList();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <AppHeader />
      </div>

      <LayoutContainer>
        <div className={styles.header_search}>
          <h2>Investors</h2>
          <div className={styles.input_container}>
            <input
              className="search_food_id_input"
              type="text"
              placeholder="Search here"
            />
            <span>
              <div
                className={`search-icon-container ${styles.search_icon_container}`}
              >
                <SearchIcon />
              </div>
            </span>
          </div>
        </div>
        <div className={styles.loader_container}>
        <div className={styles.loader}>
                    <CircularProgress className={styles.loader} />
         </div>
        <p className="font-500">Fetching investors data, please wait...</p>
        </div>


<div className={styles.investors_list}>

        <div className={styles.main_container}>
          {investorsList.map((data) => (
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
                  <p
                    className={`font-500     ${styles.investor_contain_right_name}`}
                  >
                    {data.first_name} {data.last_name}
                  </p>
                  <p
                    className={`font-400 ${styles.investor_contain_right_email}`}
                  >
                    <EmailIcon />
                    <span className={styles.icon}>{data.email}</span>
                  </p>
                  <p
                    className={`font-400 ${styles.investor_contain_right_number}`}
                  >
                    <MoNumberIcon />{" "}
                    <span className={styles.icon}> {data.phone}</span>
                  </p>
                  <p
                    className={`font-400 ${styles.investor_contain_right_date}`}
                  >
                    <TimeIcon />
                    <span className={styles.icon}> {data.updated_at} </span>
                  </p>
                </div>
                <div className={styles.investor_contain_left}>
                  <p
                    className={`font-500  ${styles.investor_contain_left_invested}`}
                  >
                    Invested
                  </p>
                  <p
                    className={`font-500 ${styles.investor_contain_left_ruppy}`}
                  >
                    ${data.amount}
                  </p>
                  <p
                    className={`font-400 ${styles.investor_contain_left_more}`}
                  >
                    View details
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobile_main_container}>
          {investorsList.map((data) => (
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
                  <p
                    className={`font-500  ${styles.mobile_investor_contain_top_invested}`}
                  >
                    Invested
                  </p>
                  <p
                    className={`font-500 ${styles.mobile_investor_contain_top_ruppy}`}
                  >
                    ${data.amount}
                  </p>
                  <p
                    className={`font-400 ${styles.mobile_investor_contain_top_more}`}
                  >
                    View details
                  </p>
                </div>
              </div>

              <div className={styles.mobile_investor_bottom_contain_container}>
                <p
                  className={`font-500     ${styles.mobile_investor_contain_bottom_name}`}
                >
                  {data.first_name} {data.last_name}
                </p>
                <p
                  className={`font-400 ${styles.mobile_investor_contain_bottom_email}`}
                >
                  <EmailIcon />
                  <span className={styles.icon}> {data.email}</span>
                </p>
                <p
                  className={`font-400 ${styles.mobile_investor_contain_bottom_number}`}
                >
                  <MoNumberIcon />{" "}
                  <span className={styles.icon}> {data.phone}</span>
                </p>
                <p
                  className={`font-400 ${styles.mobile_investor_contain_bottom_date}`}
                >
                  <TimeIcon />
                  <span className={styles.icon}> {data.updated_at} </span>
                  {/* <span className={styles.icon}> {data.created_at.toDateString()}, {data.created_at.getHours()} :{data.created_at.getMinutes()} </span> */}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </LayoutContainer>
      
    </>
  );
}

export default InvesotorList;
