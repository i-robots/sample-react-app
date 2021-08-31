import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Directory from './Directory';
import AddItem from './AddItem';

function App() {
  return (
    <div>
      <Directory />
      <AddItem />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
