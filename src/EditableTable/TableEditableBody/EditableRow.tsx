import { Form } from "antd";
import React from "react";
import { EditableContext } from "../ctx.ts";
import { EditableRowProps } from "../types";

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  // console.log("000", props);

  const [form] = Form.useForm();
  debugger;
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={{ form }}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
