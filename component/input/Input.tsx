import styles from "./Input.module.scss";

function Input() {
  return (
    <div className={styles.input_container}>
      <input type="text" placeholder="Search by specialities" />
      <input type="text" placeholder="Search by city" />
    </div>
  );
}

export default Input;
