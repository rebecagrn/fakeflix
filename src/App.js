import React from "react";
import Routes from "./routes";
import { GlobalProvider } from "./context/GlobalState";
import "../src/styles/global.css";

export default function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}
