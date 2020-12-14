import { useState, useContext } from "react";
import styles from "../styles/filter.module.css";
import { UsersContext } from "../context/UsersContext";

const Filtering = () => {
  const [filterParam, setFilterParam] = useState("first_name");
  const { searchUsers } = useContext(UsersContext);
  const handleParamChange = (e) => {
    e.preventDefault();
    setFilterParam(e.target.value);
    const element = document.querySelector("#searchKey");
    element.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const element = document.querySelector("#searchKey");
    searchUsers(filterParam, element.value);
  };
  const filter =
    filterParam == "first_name" || filterParam == "last_name" ? (
      <input id="searchKey" type="text" />
    ) : filterParam == "email" ? (
      <input id="searchKey" type="email" />
    ) : filterParam == "gender" ? (
      <select id="searchKey">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    ) : filterParam == "createdAt" ? (
      <input id="searchKey" type="date" />
    ) : null;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>Search by:</label>
      <select name="filter" id="users-filter" onChange={handleParamChange}>
        <option value="first_name">First Name</option>
        <option value="last_name">Last Name</option>
        <option value="gender">Gender</option>
        <option value="email">Email</option>
        <option value="createdAt">Creation Date</option>
      </select>
      <label>Search key:</label>
      {filter}
      <input style={{ marginTop: "10px" }} type="submit" />
    </form>
  );
};

export default Filtering;
