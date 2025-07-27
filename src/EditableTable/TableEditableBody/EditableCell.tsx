import { Form, Input, InputNumber, Select } from "antd";
import React from "react";
import type { EditableCellProps } from "../types.d.ts";

export const EditableCell: React.FC<EditableCellProps> = ({
  editable,
  children,
  dataIndex,
  rules,
  valueType,
  options,
  ...restProps
}) => {
  let childNode = children;
  if (editable) {
    switch (valueType) {
      case "select":
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
            <Select options={options ?? []} allowClear></Select>
          </Form.Item>
        );
        break;
      case "number":
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
            <InputNumber style={{ width: "100%" }} type="number"></InputNumber>
          </Form.Item>
        );
      default:
        childNode = (
          <Form.Item style={{ margin: 0 }} name={dataIndex} rules={rules ?? []}>
            <Input></Input>
          </Form.Item>
        );
        break;
    }
  }
  return <td {...restProps}>{childNode}</td>;
};
