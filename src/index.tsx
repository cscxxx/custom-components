import React from "react";
import { createRoot } from "react-dom/client";
import EditableTable from "./EditableTable/index.tsx";
import UseReducerTaskApp from "./Reducer/index";
import CTXAndReducer from "./CTXAndReducer/index";
// import UseReducerTaskApp from "./UseReducerTaskApp/index";
import Temp from "./temp/index.tsx";

import FormPage from "./FormPage/index.tsx";

createRoot(document.getElementById("container") as HTMLElement).render(
  <Temp />
);
