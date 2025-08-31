import React from "react";
import { createRoot } from "react-dom/client";
import EditableTable from "./EditableTable/index.tsx";
import UseReducerTaskApp from "./Reducer/index";
import CTXAndReducer from "./CTXAndReducer/index";
// import UseReducerTaskApp from "./UseReducerTaskApp/index";
import Temp from "./temp/index.tsx";
import FormPage from "./FormPage/index.tsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

const container = document.getElementById("container");
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
