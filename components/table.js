import styles from "../styles/table.module.css";

const Table = () => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.caption}>Users' Data</caption>
        <thead>
          <tr>
            <th className={styles.th} scope="col">
              Index ^
            </th>
            <th className={styles.th} scope="col">
              First Name
            </th>
            <th className={styles.th} scope="col">
              Last Name
            </th>
            <th className={styles.th} scope="col">
              Email
            </th>
            <th className={styles.th} scope="col">
              Gender
            </th>
            <th className={styles.th} scope="col">
              Created Date
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
