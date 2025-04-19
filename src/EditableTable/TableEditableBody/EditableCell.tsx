import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
import type { EditableCellProps } from "../types.d.ts";

export const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  rules,
  valueType,
  options,
  ...restProps
}) => {
  let childNode = children;
  if (editable) {
    if (valueType === "select") {
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
          <Select options={options ?? []} allowClear></Select>
        </Form.Item>
      );
    } else if (valueType === "number") {
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
          <InputNumber style={{ width: "100%" }} type="number"></InputNumber>
        </Form.Item>
      );
    } else {
      childNode = (
        <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
          <Input></Input>
          {/* {children} */}
        </Form.Item>
      );
    }
  }
  return <td {...restProps}>{childNode}</td>;
};
