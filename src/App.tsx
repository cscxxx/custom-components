import { createRoot } from "react-dom/client";
import EditableTable from "./EditableTable/index.tsx";
import UseReducerTaskApp from "./Reducer/index";
import CTXAndReducer from "./CTXAndReducer/index";
// import UseReducerTaskApp from "./UseReducerTaskApp/index";
import Temp from "./temp/index.tsx";
import FormPage from "./FormPage/index.tsx";
import Layout from "./Layout/index.tsx";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}></Route>
      <Route path="/editable-table" element={<EditableTable />} />
      <Route path="/useReducer-task-app" element={<UseReducerTaskApp />} />
      <Route path="/ctx-and-reducer" element={<CTXAndReducer />} />
      <Route path="/temp" element={<Temp />} />
      <Route path="/form-page" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
