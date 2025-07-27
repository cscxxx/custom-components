import { Popconfirm } from "antd";
import { RuleObject } from "antd/es/form";
import React, { useEffect, useMemo, useState } from "react";
import { ColumnTypes, DataType } from "./types";

export default ({ dataSource, setDataSource }) => {
  const [option, setOption] = useState<
    {
      value: string;
      label: string;
    }[]
  >([
    {
      value: "1",
      label: "1",
    },
  ]);

  useEffect(() => {
    const is = setTimeout(() => {
      setOption([
        {
          value: "2",
          label: "2",
        },
        {
          value: "3",
          label: "3",
        },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
      ]);
    }, 6000);
    return () => {
      clearTimeout(is);
    };
  }, []);

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
        options: option,
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
          {
            validator(rule, value, callback) {
              if (!Number.isFinite(Number(value))) {
                callback("请输入数字");
              } else {
                callback();
              }
            },
          },
        ],
        valueType: "number",
      },
      {
        title: "address1",
        dataIndex: "address1",
        editable: true,
        rules: [
          {
            required: true,
            message: "age",
          },
          {
            validator(rule, value, callback) {
              if (value?.length > 100) {
                callback("地址不能超过100个字符");
              } else if (!value) {
                callback("请输入地址");
              } else {
                callback();
              }
            },
          },
        ],
      },
      {
        title: "address2",
        dataIndex: "address2",
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
  }, [dataSource, option]);
  return { columns };
};
