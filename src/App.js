import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Add from "./components/add/Add";
import ListItem from "./components/add/ListItem";

function App() {
  return (
    <div className="App">
      <Add />
      <ListItem />
    </div>
  );
}

export default App;
