import React, { useEffect, useState } from "react";
import style from "./Main.module.css";
import Card from "../card/Card";
import style1 from '../edit/Edit.module.css'
import { Link } from "react-router-dom";

const axios = require("axios");

const Main = () => {
  const [data, setdata] = useState(null);
  const [arr, setarr] = useState(null);
  const [mylink, setmylink] = useState({ next: null, previous: null });
  const [search, setsearch] = useState(null);
  const [sort, setsort] = useState(null);
  const [limit, setlimit] = useState("");
  const [total, settotal] = useState(null);
  const [curent, setcurrent] = useState(1);
  useEffect(() => {
    axios
      .get("https://amarchauhan.pythonanywhere.com/api/")
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log("==>", response.data);
        let count = response.data.count / 16;
        settotal(count);
        setmylink({
          next: response.data.next,
          previous: response.data.previous,
        });

        const array = response.data.results.map((value, index) => {
          return <Card key={index} data={value} />;
        });
        console.log("D : ", array);
        setarr(array);
        setmylink({
          next: response.data.next,
          previous: response.data.previous,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const nextPreviousButton = (link) => {
    console.log("fjfgg: ", link);

    axios
      .get(link)
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log("==>", response.data);

        const array = response.data.results.map((value, index) => {
          return <Card key={index} data={value} />;
        });
        console.log("D : ", array);
        setarr(array);

        setmylink({
          next: response.data.next,
          previous: response.data.previous,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const handleFilter = (event) => {
    event.preventDefault();
    console.log("Sort :", sort);
    console.log("Serch : ", search);
    console.log("Limit : ", limit);
    
    let url;
    let mylimit = limit===""?16:limit;
    if (search != null) {
      url = `https://amarchauhan.pythonanywhere.com/api/?search=${search}&ordering=${sort}age&limit=${limit}`;
    } else {
      url = `https://amarchauhan.pythonanywhere.com/api/?ordering=${sort}age&limit=${mylimit}`;
    }

    console.log(url);

    axios
      .get(url)
      .then(function (response) {
        // handle success
        setdata(response.data);
        console.log("==>", response.data);
        let count =  response.data.count / mylimit;
        settotal(count);
        if (limit != null) {

          setcurrent(1);
        }

        setmylink({
          next: response.data.next,
          previous: response.data.previous,
        });

        const array = response.data.results.map((value, index) => {
          return <Card key={index} data={value} />;
        });
        console.log("D : ", array);
        setarr(array);
        setmylink({
          next: response.data.next,
          previous: response.data.previous,
        });
        // setsearch(null)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    // let link;
    // if(sort!==null && search!==null){

    // }
  };
  return (
    <React.Fragment>
      {console.log("Link : ", mylink)}
      <div className="d-flex h-100  overflow-auto">
        <div className=" h-100  d-flex flex-column justify-content-center align-items-center ">
          <form onSubmit={handleFilter} method="get">
            <div className={style.mid + " text-center m-2"}>
              <div>Filter</div>
              <hr />
              <div>
                <label htmlFor="first_name">Search</label>
                <input
                className={style.my_input}
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Enter name"
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                  value={search != null ? search : ""}
                />
              </div>
              <div>
                Ordering By Age
                <div className=" d-flex flex-column justify-content-center align-items-center mt-1 ">
                  <div className="d-flex justify-content-center align-items-center">
                    <label htmlFor="ascending" className="px-1">
                      Ascending
                    </label>
                    <input
                      onChange={(e) => {
                        setsort(e.target.value);
                      }}
                      className={style.my_check}
                      type="radio"
                      name="age"
                      value=""
                      id="ascending"
                    />
                  </div>
                  <div></div>
                  <div className="d-flex justify-content-center align-items-center">
                    <label htmlFor="descending" className="px-1">
                      Descending
                    </label>
                    <input
                      onChange={(e) => {
                        setsort(e.target.value);
                      }}
                      className={style.my_check}
                      type="radio"
                      name="age"
                      value="-"
                      id="descending"
                    />
                  </div>
                  <div>
                    <label htmlFor="limit">Limit</label>
                    <input
                    className={style.my_input}
                      onChange={(e) => {
                        setlimit(e.target.value);
                      }}
                      value={limit != null ? limit : ""}
                      type="number"
                      name="limit"
                      id="limit"
                      placeholder="1,2,3...etc."
                    />
                  </div>
                </div>
              </div>
              <hr />

              <div>
                <input type="submit" value="Apply"  className="btn btn-outline-dark rounded-pill w-75" />
              </div>
            </div>
          </form>
          <div>
            <Link to={"/add"}>Add</Link>
          </div>
        </div>

        <div className=" flex-grow-1 d-flex flex-column  ">
          <div className="d-flex flex-grow-1 flex-wrap overflow-auto ">
            {arr != null ? arr : ""}
          </div>
          <div className={style.pag + " text-center p-2 bg-warning1 "}>
            Page {total===0?0:curent}/{total != null ? Math.ceil(total) : ""}
            <button
              className={style.my_button}
              onClick={() => {
                setcurrent(curent - 1);
                nextPreviousButton(mylink.previous);
              }}
              disabled={mylink.previous != null ? false : true}
            >
              Previous
            </button>
            <button
              className={style.my_button}
              onClick={() => {
                // console.log("Current :",curent)
                setcurrent(curent + 1);
                nextPreviousButton(mylink.next);
              }}
              disabled={mylink.next != null ? false : true}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </React.Fragment>
  );
};

export default Main;
