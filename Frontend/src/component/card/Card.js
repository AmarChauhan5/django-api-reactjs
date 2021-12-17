import React from "react";
import style from "./Card.module.css";
// import {

//   NavLink,

// } from "react-router-dom";
import { Link } from "react-router-dom";

const Card = (props) => {
  console.log("Card :", props.data.id);
  return (
    <React.Fragment>
      <div className={style.card}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Name </td>
                <td>: {props.data.first_name + " " + props.data.last_name}</td>
              </tr>
              <tr>
                <td>city </td>
                <td>: {props.data.city}</td>
              </tr>
              <tr>
                <td>Age </td>
                <td>: {props.data.age}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            <tr>
              <Link to={/show_and_edit/ + props.data.id}>View And Edit</Link>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Card;
