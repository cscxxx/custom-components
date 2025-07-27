import { useState } from "react";
import Test2 from "./Form.tsx";
import "antd/dist/antd.css";
export default () => {
  const [test2, setTest2] = useState();

  return (
    <div>
      123
      <Test2 test2={test2} setTest2={setTest2} />
    </div>
  );
};
