import { createRoot } from "react-dom/client";
// import Demo from "./EditableTable/demo.tsx";
import UseReducerTaskApp from "./Reducer/index";
import React from "react";

createRoot(document.getElementById("container") as HTMLElement).render(
  <UseReducerTaskApp />
);
