import { Input } from "antd";
import { useStore } from "./ctx.ts";

export default () => {
  const { form } = useStore();
  return (
    <Input
      onChange={(e) => {
        console.log("111", form);
        form.setFields([
          {
            name: "name",
            errors: [e.target.value],
          },
        ]);
      }}
    />
  );
};
