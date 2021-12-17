import React, { useEffect, useState } from "react";
import style from "./Edit.module.css";
import Show from "./Show";


const Edit = (props) => {
  console.log("id", props.match.params.id);
 
  return (
    <React.Fragment>
      <div
        className={
          style.bg +
          " h-100 d-flex flex-column justify-content-center align-items-center"
        }
      >
        <div className={style.my_bg}>
          
          <Show id={props.match.params.id}/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Edit;
