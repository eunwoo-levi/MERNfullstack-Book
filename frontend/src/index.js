import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* <Router 쓰는법>
npm i react-router-dom  설치
<BrowserRouter> 로 <App/> 감싸고
App.js가서  Routes, Route  들을 import하고 등등 사용

*/
