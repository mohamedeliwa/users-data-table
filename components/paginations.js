import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import styles from "../styles/pagination.module.css";
const Paginations = () => {
  const [page, setPage] = useState(0);
  const [userCount, setUsersCount] = useState(10);
  const { fetchUsersByPage } = useContext(UsersContext);
  const handleChange = (e) => {
    e.preventDefault();
    const newCount = e.target.value;
    setUsersCount(newCount);
    fetchUsersByPage(newCount, page*newCount);
  };
  const getPrevPage = (e) => {
    e.preventDefault();
    const prevPage = page - 1;
    setPage(prevPage);
    fetchUsersByPage(userCount, prevPage*userCount);
  };
  const getNextPage = (e) => {
    e.preventDefault();
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsersByPage(userCount, nextPage*userCount);
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
        <span> {page+1} </span>
        <button id="nextPage" onClick={getNextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Paginations;
