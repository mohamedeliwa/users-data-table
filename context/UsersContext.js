import { useState, createContext, useEffect } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  // url state for each request
  const [url, setUrl] = useState({
    base: "http://localhost:5000/users?limit=10",
    limit: 10,
    skip: 0,
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    createdAt: "",
  });
  // storing fetched users
  const [users, setUsers] = useState([]);
  // stroing current page
  const [page, setPage] = useState(0);
  // storing sorting params
  const [sorting, setSorting] = useState({
    param: "createdAt",
    direction: "desc",
  });

  // getting the 1st 10 users on page load
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

  // function to generate a url from url state upon each request
  // and update url state when it's needed
  const generateURL = (urlObj) => {
    const newUrl = {
      ...url,
      ...urlObj,
    };
    setUrl({ ...newUrl });

    return `http://localhost:5000/users?limit=${newUrl.limit || ""}&skip=${
      newUrl.skip || ""
    }&first_name=${newUrl.first_name || ""}&last_name=${
      newUrl.last_name || ""
    }&email=${newUrl.email || ""}&gender=${newUrl.gender || ""}&createdAt=${
      newUrl.createdAt || ""
    }`;
  };

  // function to sort users data upon certain params
  const sortUsers = (
    param = sorting.param,
    direction = sorting.direction,
    sortedUsers = [...users]
  ) => {
    if (direction === "asc") {
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
    setSorting({
      ...sorting,
      param,
      direction,
    });
  };

  // function to fetch pages of users data within certain limits
  const fetchUsersByPage = async (userPerPage, direction) => {
    let pageRequested = page;
    // the next or the previous page
    if (direction === "+") {
      pageRequested = page + 1;
    } else if (direction === "-" && page > 0) {
      pageRequested = page - 1;
    }
    try {
      // generating the url based on the user's input
      const url = generateURL({
        limit: userPerPage,
        skip: pageRequested * userPerPage,
      });
      const res = await fetch(url);
      if (res.status === 200) {
        const resJSON = await res.json();
        if (resJSON.length > 0) {
          sortUsers(sorting.param, sorting.direction, [...resJSON]);
          if (userPerPage !== "all") setPage(pageRequested);
        }
      } else {
        throw new Error("Failed to fetch users!");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  // function to seach for users with certain criteria
  const searchUsers = async (searchKey, searchValue) => {
    try {
      // an object to store search criteria
      const match = {
        limit: 10,
        skip: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        createdAt: "",
      };
      setPage(0);
      match[searchKey] = searchValue;
      // generating the url based on the search crtiteria
      const url = generateURL(match);
      const res = await fetch(url);
      if (res.status === 200) {
        const resJSON = await res.json();
        sortUsers(sorting.param, sorting.direction, [...resJSON]);
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
