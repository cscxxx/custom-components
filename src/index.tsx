import { createRoot } from "react-dom/client";
import Demo from "./EditableTable/demo.tsx";
import React from "react";

createRoot(document.getElementById("container") as HTMLElement).render(<Demo />);
