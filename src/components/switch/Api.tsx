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
      param: 'defaultChecked',
      explain: '默认选中状态',
      type: `boolean`,
      defaultValue: "false"
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
      explain: '设置尺寸大小',
      type: `small`,
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
      param: 'onChange',
      explain: 'change回调',
      type: '(checked: boolean, e: React.MouseEvent) => void;',
      defaultValue: "-"
    },
    {
      key: '6',
      param: 'className',
      explain: '自定义 Switch 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '7',
      param: 'style',
      explain: '自定义 Switch 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api