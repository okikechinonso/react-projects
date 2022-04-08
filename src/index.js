import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TipApp from "./tipapp/TipApp";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WalletHome from "./wallet/home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tipapp" element={<TipApp />}></Route>
        <Route path="/wallet" element={<WalletHome/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
