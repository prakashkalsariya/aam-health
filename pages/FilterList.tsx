import styles from "../styles/FilterList.module.scss";
import AppHeader from "../component/header/AppHeader";
import Input from "../component/input/Input";
function Filterlist() {
  return (
    <div className={styles.filter_list_container}>
      <div className={styles.navbar}>
        <AppHeader />
      </div>
     
      <div className={styles.input}>
        <Input />
      </div>
      <div className={styles.btn}>
        <button  className={styles.cancel_btn}>Cancel</button>
        <button  className={styles.ok_btn}>Ok</button>
      </div>
    </div>
  );
}

export default Filterlist;
