import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import styles from "../styles/pagination.module.css";

const Paginations = () => {
  const [userCount, setUsersCount] = useState(10);
  const { page, fetchUsersByPage } = useContext(UsersContext);

  // handling form change and submitting
  const handleChange = (e) => {
    e.preventDefault();
    const newCount = e.target.value;
    setUsersCount(newCount);
    fetchUsersByPage(newCount, undefined);
  };
  // getting previous page
  const getPrevPage = (e) => {
    e.preventDefault();
    fetchUsersByPage(userCount, "-");
  };
  // getting the next page
  const getNextPage = (e) => {
    e.preventDefault();
    fetchUsersByPage(userCount, "+");
  };
  return (
    <div className={styles.container}>
      <select name="usersPerPage" id="users-select" onChange={handleChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="all">All</option>
      </select>
      <div>
        <button id="prevPage" onClick={getPrevPage}>
          {"<"}
        </button>
        <span> {page + 1} </span>
        <button id="nextPage" onClick={getNextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Paginations;
