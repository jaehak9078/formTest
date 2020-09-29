import React, { createRef, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import List from "./components/List";
import { Link } from "react-router-dom";

// form 연습
// 요청주소 : http://10.100.102.2:8000/api/movie
// 메서드 : post
// content-type : application/json
// 응답 : plain/text 성공시 : "ok"
function App() {
  return (
    <div>
      <Header />

      <Route path="/" exact={true} component={Main}></Route>
      <Route path="/list" exact={true} component={List}></Route>
    </div>
  );
}

export default App;
