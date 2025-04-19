import { Popconfirm } from "antd";
import { RuleObject } from "antd/es/form";
import React, { useMemo } from "react";
import { ColumnTypes, DataType } from "./types";

export default ({ dataSource, setDataSource }) => {
  const columns = useMemo(() => {
    const handleDelete = (key: React.Key) => {
      const newData = dataSource?.filter((item) => item.key !== key);
      setDataSource(newData);
    };
    const defaultColumns: (ColumnTypes[number] & {
      editable?: boolean;
      dataIndex: string;
      rules?: RuleObject[];
      valueType?: "input" | "select" | "number";
      options?: {
        value: string;
        label: string;
      }[];
    })[] = [
      {
        title: "name",
        dataIndex: "name",
        width: "30%",
        editable: true,
        valueType: "select",
        options: [
          {
            value: "1",
            label: "1",
          },
          {
            value: "2",
            label: "2",
          },
          {
            value: "3",
            label: "3",
          },
        ],
        rules: [
          {
            required: true,
            message: "必填项！",
          },
        ],
      },
      {
        title: "age",
        dataIndex: "age",
        editable: true,
        rules: [
          {
            required: true,
            message: "age",
          },
        ],
        valueType: "number",
      },
      {
        title: "address",
        dataIndex: "address",
        editable: true,
        rules: [
          {
            required: true,
            message: "age",
          },
        ],
      },
      {
        title: "operation",
        dataIndex: "operation",
        render: (_, record: { key: React.Key }) =>
          dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => {
                handleDelete(record.key);
              }}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
    ];

    return defaultColumns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: DataType) => {
          return {
            record,
            ...col,
          };
        },
      };
    });
  }, [dataSource]);
  return { columns };
};
