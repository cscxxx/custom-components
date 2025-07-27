import { FormInstance, RuleObject } from "antd/lib/form";
import Table from "antd/lib/table/Table";

export interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

export interface EditableCellProps {
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  rules: RuleObject[];
  valueType: string;
  options?: { label: string; value: string }[];
}

export interface DataType {
  key: React.Key;
  name: string;
  age: undefined | number;
  address1: string;
  address2?: string;
  form?: FormInstance;
}

type EditableTableProps = Parameters<typeof Table>[0];

export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
