import { useState, useContext } from "react";
import styles from "../styles/table.module.css";
import { UsersContext } from "../context/UsersContext";

const Table = () => {
  const { users, sortUsers } = useContext(UsersContext);
  const [sorting, setSorting] = useState({
    element: "date",
    param: "createdAt",
    direction: "desc",
  });

  const handleSorting = (e) => {
    e.preventDefault();
    if (e.target.id === sorting.element) {
      const direction = sorting.direction === "asc" ? "desc" : "asc";
      setSorting({
        ...sorting,
        direction,
      });
      let text = e.target.innerText.split(" ");
      text[1] = text[1] === "v" ? "^" : "v";
      e.target.innerText = text.join(" ");
      sortUsers(sorting.param, direction);
    } else {
      const oldElement = document.querySelector(`#${sorting.element}`);
      oldElement.innerText = oldElement.innerText.split(" ")[0];
      setSorting({
        element: e.target.id,
        param: e.target.dataset.param,
        direction: "desc",
      });
      let text = e.target.innerText.split(" ");
      text[1] = text[1] === "v" ? "^" : "v";
      e.target.innerText = text.join(" ");
      sortUsers(e.target.dataset.param, "desc");
    }
  };

  const usersRows = users.map((user, index) => {
    return (
      <tr key={user._id}>
        <td className={styles.td} data-label="Index">
          {index + 1}
        </td>
        <td className={styles.td} data-label="firstName">
          {user.firstName}
        </td>
        <td className={styles.td} data-label="lastName">
          {user.lastName}
        </td>
        <td className={styles.td} data-label="email">
          {user.email}
        </td>
        <td className={styles.td} data-label="gender">
          {user.gender}
        </td>
        <td className={styles.td} data-label="createdDate">
          {user.createdAt}
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.caption}>Users' Data</caption>
        <thead>
          <tr>
            <th
              id="index"
              className={styles.th}
              scope="col"
              // onClick={handleSorting}
            >
              Index
            </th>
            <th
              id="firstName"
              className={styles.th}
              data-param="firstName"
              scope="col"
              onClick={handleSorting}
            >
              FirstName
            </th>
            <th
              id="lastName"
              data-param="lastName"
              className={styles.th}
              scope="col"
              onClick={handleSorting}
            >
              LastName
            </th>
            <th
              id="email"
              data-param="email"
              className={styles.th}
              scope="col"
              onClick={handleSorting}
            >
              Email
            </th>
            <th
              id="gender"
              data-param="gender"
              className={styles.th}
              scope="col"
              onClick={handleSorting}
            >
              Gender
            </th>
            <th
              id="date"
              data-param="createdAt"
              className={styles.th}
              scope="col"
              onClick={handleSorting}
            >
              CreatedDate v
            </th>
          </tr>
        </thead>
        <tbody>{usersRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
