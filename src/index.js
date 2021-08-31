import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Directory from './Directory';

function App() {
  return (
      <Directory />
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
