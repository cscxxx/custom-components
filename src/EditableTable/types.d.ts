import Table from "antd/lib/table/Table";

export interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
}

export interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

export interface EditableRowProps {
  index: number;
}

export interface DataType {
  key: React.Key;
  name: string;
  age: string;
  address: string;
}

type EditableTableProps = Parameters<typeof Table>[0];

export type ColumnTypes = Exclude<EditableTableProps["columns"], undefined>;
