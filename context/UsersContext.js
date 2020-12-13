import { useState, createContext, useEffect } from "react";

export const UsersContext = createContext();

const UsersContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const url = "http://localhost:5000/users";
        const res = await fetch(url, {
          method: "GET",
        });
        if (res.status === 200) {
          const reJSON = await res.json();
          setUsers([...reJSON]);
        } else {
          throw new Error("Failed to fetch Users!");
        }
      } catch (err) {
        console.log(err.message);
      }
    })();
  }, []);
  return (
    <UsersContext.Provider value={{ users }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
