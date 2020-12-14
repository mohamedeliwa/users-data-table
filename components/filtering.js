import { useState } from "react";
import styles from "../styles/filter.module.css";
const Filtering = () => {
  const [filterParam, setFilterParam] = useState("firstName");

  const handleParamChange = (e) => {
    e.preventDefault();
    setFilterParam(e.target.value);
  };
  const filter =
    filterParam == "firstName" || filterParam == "lastName" ? (
      <input type="text" />
    ) : filterParam == "email" ? (
      <input type="email" />
    ) : filterParam == "gender" ? (
      <span>gender</span>
    ) : filterParam == "createdAt" ? (
      <span>creation Date</span>
    ) : null;

  return (
    <form className={styles.form}>
      <select name="filter" id="users-filter" onChange={handleParamChange}>
        <option value="firstName">First Name</option>
        <option value="lastName">Last Name</option>
        <option value="gender">Gender</option>
        <option value="email">email</option>
        <option value="createdAt">Creation Date</option>
      </select>
      {filter}
      <input type="submit" />
    </form>
  );
};

export default Filtering;
