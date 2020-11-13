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
      param: 'title',
      explain: 'drawer标题',
      type: `string`,
      defaultValue: "-"
    },
    {
      key: '2',
      param: 'visible',
      explain: 'Drawer是否可见',
      type: `boolean`,
      defaultValue: "false"
    },
    {
      key: '3',
      param: 'closable',
      explain: '是否显示关闭图标',
      type: `boolean`,
      defaultValue: "true"
    },
    {
      key: '4',
      param: 'mask',
      explain: '是否显示遮罩层',
      type: 'boolean',
      defaultValue: "true"
    },
    {
      key: '5',
      param: 'maskClosable',
      explain: '遮罩层是否支持关闭',
      type: 'boolean',
      defaultValue: "true"
    },
    {
      key: '6',
      param: 'placement',
      explain: 'Drawer的方位,可选 top right bottom left',
      type: 'string',
      defaultValue: "right"
    },
    {
      key: '7',
      param: 'onClose',
      explain: 'Drawer关闭回调',
      type: '() => void',
      defaultValue: "-"
    },
    {
      key: '8',
      param: 'className',
      explain: '自定义 Drawer 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '9',
      param: 'style',
      explain: '自定义 Drawer 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api