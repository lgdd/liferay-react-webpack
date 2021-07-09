import React from "react";
import ReactDOM from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import App from './App';

const render = () => {
  const root = window.document.querySelector("#simple-blog-list-app");
  ReactDOM.render(<App/>, root);
}

if (process.env.NODE_ENV === "development") {
  require("@clayui/css/lib/css/atlas.css");
  require("dotenv/config");
  render();
}

if (process.env.NODE_ENV === "production") {
    render();
}
