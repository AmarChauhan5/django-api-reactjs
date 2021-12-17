import React, { useEffect, useState } from "react";
import style from '../edit/Edit.module.css'
const axios = require("axios");

const Add = () => {
  const [first_name, setfirst_name] = useState(null);
  const [last_name, setlast_name] = useState(null);
  const [company_name, setcompany_name] = useState(null);
  const [city, setcity] = useState(null);
  const [state, setstate] = useState(null);
  const [zip, setzip] = useState(null);
  const [email, setemail] = useState(null);
  const [web, setweb] = useState(null);
  const [age, setage] = useState(null);
  const formSubmit = (event) => {
    event.preventDefault();
    const data = {
      first_name,
      last_name,
      company_name,
      city,
      state,
      zip,
      email,
      web,
      age,
    };
    console.log(data);
    axios
      .post("https://amarchauhan.pythonanywhere.com/api/", data, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        // handle success
        console.log("==>", response.data);
        setfirst_name(null);
        setlast_name(null);
        setcompany_name(null);
        setcity(null);
        setstate(null);
        setzip(null);
        setemail(null);
        setweb(null);
        setage(null);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    console.log("Form Submite");
  };

  return (
    <React.Fragment>
      <div className={style.bg + " h-100 d-flex flex-column justify-content-center align-items-center"}>
        <div className={style.my_bg}>
          <h3 className="text-center">Add User</h3>
          <form onSubmit={formSubmit} method="post">
            <div className="row ">
              <div className="col-6 mb-2">
                <label htmlFor="first_name">First name</label>
                <br />
                <input
                className={style.my_input}
                  type="text"
                  onChange={(e) => {
                    setfirst_name(e.target.value);
                  }}
                  value={first_name != null ? first_name : ""}
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="col-6 mb-2">
                <label htmlFor="last_name">Last name</label>
                <br />
                <input
                className={style.my_input}
                  type="text"
                  onChange={(e) => {
                    setlast_name(e.target.value);
                  }}
                  value={last_name != null ? last_name : ""}
                  name="last_name"
                  id="last_name"
                />
              </div>
              {/* --- */}
              <hr />
              <div className="col-6 mb-2">
                <label htmlFor="company_name">Company name</label>
                <br />
                <input
                className={style.my_input}
                  type="text"
                  onChange={(e) => {
                    setcompany_name(e.target.value);
                  }}
                  value={company_name != null ? company_name : ""}
                  name="company_name"
                  id="company_name"
                />
              </div>
              <div className="col-6 mb-2">
                <label htmlFor="city">City</label>
                <br />
                <input
                className={style.my_input}
                  type="text"
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                  value={city != null ? city : ""}
                  name="city"
                  id="city"
                />
              </div>
              {/* --- */}
              <hr />
              <div className="col-6 mb-2">
                <label htmlFor="state">State</label>
                <br />
                <input
                className={style.my_input}
                  type="text"
                  onChange={(e) => {
                    setstate(e.target.value);
                  }}
                  value={state != null ? state : ""}
                  name="state"
                  id="state"
                />
              </div>
              <div className="col-6 mb-2">
                <label htmlFor="zip">Zip</label>
                <br />
                <input
                className={style.my_input}
                  type="number"
                  onChange={(e) => {
                    setzip(e.target.value);
                  }}
                  value={zip != null ? zip : ""}
                  name="zip"
                  id="zip"
                />
              </div>
              {/* --- */}
              <hr />
              <div className="col-6 mb-2">
                <label htmlFor="email">E-mail</label>
                <br />
                <input
                className={style.my_input}
                  type="email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  value={email != null ? email : ""}
                  name="email"
                  id="email"
                />
              </div>
              <div className="col-6 mb-2">
                <label htmlFor="web">Web</label>
                <br />
                <input
                className={style.my_input}
                  type="url"
                  onChange={(e) => {
                    setweb(e.target.value);
                  }}
                  value={web != null ? web : ""}
                  name="web"
                  id="web"
                />
              </div>
              {/* --- */}
              <hr />
              <div className="col-6 mb-2">
                <label htmlFor="age">Age</label>
                <br />
                <input
                className={style.my_input}
                  type="number"
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  value={age != null ? age : ""}
                  name="age"
                  id="age"
                />
              </div>
              <div className="col-6 mb-2 m-auto text-center">
              <input className="btn btn-outline-dark fw-bold rounded-pill" type="submit" value="CREATE" />
              </div>
              {/* <div className="col-12 text-center">
                  
                
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;
