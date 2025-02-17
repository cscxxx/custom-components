import { Form } from "antd";
import React from "react";
import { EditableContext } from "../ctx.ts";
import { EditableRowProps } from "../types";

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
