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
      param: 'defaultValue',
      explain: '设置默认值',
      type: `number`,
      defaultValue: "0"
    },
    {
      key: '2',
      param: 'disabled',
      explain: '是否禁止交互',
      type: `boolean`,
      defaultValue: "false"
    },
    {
      key: '3',
      param: 'allowClear',
      explain: '是否支持再次清除',
      type: `boolean`,
      defaultValue: "false"
    },
    {
      key: '4',
      param: 'allowHalf',
      explain: '是否允许半选',
      type: 'boolean',
      defaultValue: "false"
    },
    {
      key: '5',
      param: 'character',
      explain: '自定义字符',
      type: 'JSX.Element[]',
      defaultValue: "-"
    },
    {
      key: '6',
      param: 'onChange',
      explain: '选择时的回调',
      type: ' function(value: number)',
      defaultValue: "-"
    },
    {
      key: '7',
      param: 'onHoverChange',
      explain: '鼠标经过时数值变化的回调',
      type: 'function(value: number)',
      defaultValue: "-"
    },
    {
      key: '8',
      param: 'className',
      explain: '自定义 Rate 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '9',
      param: 'style',
      explain: '自定义 Rate 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api