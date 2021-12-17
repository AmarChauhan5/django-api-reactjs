import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Base from "./Base";
import Edit from './component/edit/Edit'
import Add from './component/add/Add'

function App() {
  return (
    <>
      {/* <Base /> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Base} />
          <Route exact path="/show_and_edit/:id" component={Edit} />
          <Route exact path="/add" component={Add} />


          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
