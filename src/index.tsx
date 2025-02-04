import React from "react";
import { createRoot } from "react-dom/client";
import EditableTable from "./EditableTable/index.tsx";
// import UseReducerTaskApp from "./Reducer/index";
// import CTXAndReducer from "./CTXAndReducer/index";

createRoot(document.getElementById("container") as HTMLElement).render(
  <EditableTable />
);
