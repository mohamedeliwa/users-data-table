import { useState, createContext, useEffect } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const url = "http://localhost:5000/users?limit=10";
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.status === 200 && users.length === 0) {
          const reJSON = await res.json();
          setUsers([...reJSON]);
        } else if (users.length > 0) {
          return;
        } else {
          throw new Error("Failed to fetch Users!");
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);

  const sortUsers = (param, direction) => {
    if (direction === "asc") {
      const sortedUsers = [...users];
      sortedUsers.sort((a, b) => {
        if (a[param] > b[param]) {
          return -1;
        } else if (a[param] < b[param]) {
          return 1;
        }
        return 0;
      });
      setUsers([...sortedUsers]);
    } else if (direction === "desc") {
      const sortedUsers = [...users];
      sortedUsers.sort((a, b) => {
        if (b[param] > a[param]) {
          return -1;
        } else if (b[param] < a[param]) {
          return 1;
        }
        return 0;
      });
      setUsers([...sortedUsers]);
    }
  };

  const fetchUsersByPage = async (userPerPage, direction) => {
    let pageRequested = page;
    if (direction === "+") {
      pageRequested = page + 1;
    } else if (direction === "-" && page > 0) {
      pageRequested = page - 1;
    }
    try {
      const url = `http://localhost:5000/users?limit=${userPerPage}&skip=${
        pageRequested * userPerPage
      }`;
      const res = await fetch(url);
      if (res.status === 200) {
        const resJSON = await res.json();
        if (resJSON.length > 0) {
          setUsers([...resJSON]);
          if (userPerPage !== "all") setPage(pageRequested);
        }
      } else {
        throw new Error("Failed to fetch users!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const searchUsers = async (searchKey, searchValue) => {
    try {
      console.log(searchValue);
      const url = `http://localhost:5000/users?limit=10&skip=0&${searchKey}=${searchValue}`;
      const res = await fetch(url);
      if (res.status === 200) {
        const resJSON = await res.json();
        setUsers([...resJSON]);
      } else {
        throw new Error("Failed to fetch users!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <UsersContext.Provider
      value={{ users, page, sortUsers, fetchUsersByPage, searchUsers }}
    >
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
