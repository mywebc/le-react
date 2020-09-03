import React from "react"
import Table from "../table/Table"

const Api = () => {
  const columns = [
    {
      title: '参数',
      dataIndex: 'name',
      key: 'param',
    },
    {
      title: '说明',
      dataIndex: 'address',
      key: 'explain',
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'type',
    },
    {
      title: '默认值',
      dataIndex: 'address',
      key: 'defaultValue',
    },
  ];
  const dataSource = [
    {
      key: '1',
      param: 'type',
      explain: '按钮类型',
      type: `"primary" | "dashed" | "text" | "info" | "success" | "warning" | "error" | "text" | "info"`,
      defaultValue: "-"
    },
    {
      key: '2',
      param: 'disabled',
      explain: '禁用状态',
      type: `boolean`,
      defaultValue: "false"
    },
    {
      key: '3',
      param: 'size',
      explain: '按钮尺寸大小',
      type: `large | small`,
      defaultValue: "-"
    },
    {
      key: '4',
      param: 'loading',
      explain: '加载状态',
      type: 'boolean',
      defaultValue: "false"
    },
    {
      key: '5',
      param: 'className',
      explain: '自定义 Button 类名',
      type: 'string',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api