import React from "react";
import { Form } from "antd";
import { useStore } from "../ctx.ts";
import { EditableRowProps } from "../types";

export const EditableRow: React.FC<EditableRowProps> = ({
  index,
  ...props
}) => {
  const { form } = useStore();
  return (
    <Form form={form} component={false}>
      <tr {...props} />
    </Form>
  );
};
