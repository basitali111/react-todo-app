import React from "react";
import ReactDOM from "react-dom";
import TodoContainer from "./components/TodoContainer";
//stylesheet
import "./App.css"
import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(

  <Router>
      <TodoContainer />
    </Router>
,
  document.getElementById("root")
);
