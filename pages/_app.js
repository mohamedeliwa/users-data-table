import UsersContextProvider from "../context/UsersContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <UsersContextProvider>
      <Component {...pageProps} />
    </UsersContextProvider>
  );
}

export default MyApp;
