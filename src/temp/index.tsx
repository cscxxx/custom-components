import { Progress } from "antd";
import "antd/dist/antd.css";
import { useEffect, useRef } from "react";
export default () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {}, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: 14,
          //   backgroundColor: "pink",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "6px solid #fff",
            borderRadius: "50%",
            position: "absolute",
            left: `calc(${100}% - 13px)`,
          }}
        ></div>
        <div
          className="progress"
          style={{
            width: "100%",
            height: 14,
            // 设置渐变色
            background: "linear-gradient(90deg, #3355ff 0%, #90d5ff 100%)",
            borderRadius: 10,
          }}
        ></div>
      </div>
      <div>100%</div>
    </div>
  );
};
