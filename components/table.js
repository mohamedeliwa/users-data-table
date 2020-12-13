import { useState } from "react";
import styles from "../styles/table.module.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
const Table = () => {
  const [sorting, setSorting] = useState({
    element: "date",
    param: "createdAt",
    direction: "desc",
  });

  const handleSorting = (e) => {
    e.preventDefault();
    if (e.target.id === sorting.element) {
      setSorting({
        ...sorting,
        direction: sorting.direction === "asc" ? "desc" : "asc",
      });
      let text = e.target.innerText.split(" ");
      text[1] = text[1] === "v" ? "^" : "v";
      e.target.innerText = text.join(" ");
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
    }
  };
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
              onClick={handleSorting}
            >
              Index
            </th>
            <th
              id="firstName"
              className={styles.th}
              data-param="first_name"
              scope="col"
              onClick={handleSorting}
            >
              FirstName
            </th>
            <th
              id="lastName"
              data-param="last_name"
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
        <tbody>
          <tr>
            <td className={styles.td} data-label="Index">
              1
            </td>
            <td className={styles.td} data-label="firstName">
              JHON
            </td>
            <td className={styles.td} data-label="lastName">
              DEO
            </td>
            <td className={styles.td} data-label="email">
              Jhon@Deo.com
            </td>
            <td className={styles.td} data-label="gender">
              Male
            </td>
            <td className={styles.td} data-label="createdDate">
              03/01/2016
            </td>
          </tr>
          <tr>
            <td className={styles.td} data-label="Index">
              1
            </td>
            <td className={styles.td} data-label="firstName">
              JHON
            </td>
            <td className={styles.td} data-label="lastName">
              DEO
            </td>
            <td className={styles.td} data-label="email">
              Jhon@Deo.com
            </td>
            <td className={styles.td} data-label="gender">
              Male
            </td>
            <td className={styles.td} data-label="createdDate">
              03/01/2016
            </td>
          </tr>
          <tr>
            <td className={styles.td} data-label="Index">
              1
            </td>
            <td className={styles.td} data-label="firstName">
              JHON
            </td>
            <td className={styles.td} data-label="lastName">
              DEO
            </td>
            <td className={styles.td} data-label="email">
              Jhon@Deo.com
            </td>
            <td className={styles.td} data-label="gender">
              Male
            </td>
            <td className={styles.td} data-label="createdDate">
              03/01/2016
            </td>
          </tr>
          <tr>
            <td className={styles.td} data-label="Index">
              1
            </td>
            <td className={styles.td} data-label="firstName">
              JHON
            </td>
            <td className={styles.td} data-label="lastName">
              DEO
            </td>
            <td className={styles.td} data-label="email">
              Jhon@Deo.com
            </td>
            <td className={styles.td} data-label="gender">
              Male
            </td>
            <td className={styles.td} data-label="createdDate">
              03/01/2016
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
