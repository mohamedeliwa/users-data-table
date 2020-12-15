import { useState, useContext } from "react";
import styles from "../styles/filter.module.css";
import { UsersContext } from "../context/UsersContext";
import { useRouter } from "next/router";

const Filtering = () => {
  const router = useRouter();
  const [filterParam, setFilterParam] = useState("first_name");
  const { searchUsers } = useContext(UsersContext);

  // handling form inputs' changes
  const handleParamChange = (e) => {
    e.preventDefault();
    setFilterParam(e.target.value);
    const element = document.querySelector("#searchKey");
    element.value = "";
  };

  // submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // getting the value to search for
    const element = document.querySelector("#searchKey");
    searchUsers(filterParam, element.value);
  };
  // JSX Element to as an input for the search paramater
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
      {/* input to clear search params by refreshing the page */}
      <input
        style={{ marginTop: "10px" }}
        type="button"
        value="Clear search"
        style={{ marginTop: "3px" }}
        onClick={() => router.reload()}
      />
    </form>
  );
};

export default Filtering;
