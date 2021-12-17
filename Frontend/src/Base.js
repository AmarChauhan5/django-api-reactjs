import React from "react";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Footer from "./component/footer/footer";
import style from "./App.module.css";

const Base = () => {
  return (
    <>
      <div className={style.app + " d-flex flex-column h-100"}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
};

export default Base;
