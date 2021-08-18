import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Popup from "../components/Popup";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
