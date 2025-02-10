import { Form, InputRef } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useStore } from "../ctx.ts";
import type { EditableCellProps } from "../types.d.ts";

export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  rules,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);

  const inputRef = useRef<InputRef>(null);

  const { form } = useStore();

  const toggleEdit = () => {
    setEditing(!editing);
    form?.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form?.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  useEffect(() => {
    // 初始化时验证下表单
    form.validateFields(["age"]);
    form.setFields([
      {
        name: "name",
        errors: ["Username is required!"],
      },
    ]);
  }, []);

  let childNode = children;

  if (editable) {
    childNode = (
      <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
        {children}
      </Form.Item>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};
