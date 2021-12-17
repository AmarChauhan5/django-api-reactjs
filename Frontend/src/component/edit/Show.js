import React, { useEffect, useState } from "react";
import EditDelete from "./EditDelete";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import style from './Edit.module.css'

const axios = require("axios");

const Show = (props) => {
  let history = useHistory();
  const [userdata, setuserdata] = useState(null);
  const [first_name, setfirst_name] = useState(null);
  const [last_name, setlast_name] = useState(null);
  const [company_name, setcompany_name] = useState(null);
  const [city, setcity] = useState(null);
  const [state, setstate] = useState(null);
  const [zip, setzip] = useState(null);
  const [email, setemail] = useState(null);
  const [web, setweb] = useState(null);
  const [age, setage] = useState(null);
  const [edit, setedit] = useState(false);

  useEffect(() => {
    axios
      .get("https://amarchauhan.pythonanywhere.com/api/" + props.id)
      .then(function (response) {
        // handle success
        console.log("==>", response.data);
        setuserdata(response.data);
        setfirst_name(response.data.first_name);
        setlast_name(response.data.last_name);
        setcompany_name(response.data.company_name);
        setcity(response.data.city);
        setstate(response.data.state);
        setzip(response.data.zip);
        setemail(response.data.email);
        setweb(response.data.web);
        setage(response.data.age);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [edit]);

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
      .patch("https://amarchauhan.pythonanywhere.com/api/" + props.id, data, {
        "Content-Type": "application/json",
      })
      .then(function (response) {
        // handle success
        console.log("==>", response.data);
        const url = "/show_and_edit/" + props.id;
        console.log(url);
        setedit(false);
        history.push(url);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    console.log("Form Submite", props.id);
  };

  const handleDelete = () => {
    axios
      .delete("https://amarchauhan.pythonanywhere.com/api/" + props.id)
      .then(function (response) {
        // handle success
        console.log("==>", response.data);

        history.push("/");
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      {console.log("Age :", age)}
      <div className={edit == false ? "d-block" : "d-none" + " "}>
        <div className="row">
              <Link to="/">Home</Link>
          <div className="col-12"></div>
          <h3 className="text-center">Details</h3>
          <hr />
          {userdata != null ? (
            <div className="col-6">
              Name : {userdata.first_name + " " + userdata.last_name}
            </div>
          ) : (
            ""
          )}

          {userdata != null ? (
            <div className="col-6">Company : {userdata.company_name}</div>
          ) : (
            ""
          )}
          <hr />

          {userdata != null ? (
            <div className="col-6">City : {userdata.city}</div>
          ) : (
            ""
          )}
          {userdata != null ? (
            <div className="col-6">State : {userdata.state}</div>
          ) : (
            ""
          )}
          <hr />

          {userdata != null ? (
            <div className="col-6">Zip : {userdata.zip}</div>
          ) : (
            ""
          )}

          {userdata != null ? (
            <div className="col-6">E-mail : {userdata.email}</div>
          ) : (
            ""
          )}
          <hr />
          {userdata != null ? (
            <div className="col-6">Web Site : {userdata.web}</div>
          ) : (
            ""
          )}
          {userdata != null ? (
            <div className="col-6">Age : {userdata.age}</div>
          ) : (
            ""
          )}
          <hr />

          <div className="col-12 text-center my-4">
            <div>
              <button
                type="button"
                onClick={() => {
                  handleDelete();
                }}
                className="btn btn-outline-danger mx-4"
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => {
                  setedit(true);
                }}
                className="btn btn-outline-primary mx-4"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* form div */}
      <div className={edit == true ? "d-block" : "d-none"}>
      <Link to="/">Home</Link>
        {/* <div></div> */}
        <h3 className="text-center">Edit Page</h3>
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
            {/* <hr /> */}
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
            {/* <hr /> */}
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
            {/* <hr /> */}
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
            {/* <hr /> */}
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
            <div className="col-12 text-center">
              <input type="submit" value="Update" className="btn btn-outline-success" />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Show;
