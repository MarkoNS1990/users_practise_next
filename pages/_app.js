import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Popup from "../components/Popup";
import { useState } from "react";
import { Provider as AuthProvider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
