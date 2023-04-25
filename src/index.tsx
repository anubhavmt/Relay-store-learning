import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Approot from "./Approot";
import reportWebVitals from "./reportWebVitals";
import environment from "./RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Approotme = () => {

  const [open, setOpen]= useState(false)
  const handle = () => {
      setOpen(!open)
  }
  return <>
      <React.Suspense fallback={<>loadifonsaofnsadofinsd</>}>
      <button onClick={handle}> click to render another </button>
      {open && <Approot />}
      </React.Suspense>
  </>
}
root.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <Approot />
      <Approotme />
      {/* <Approot />
      <Approot />
      <Approot /> */}
    </RelayEnvironmentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
