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
      param: 'message',
      explain: '提示内容标题',
      type: `string`,
      defaultValue: "-"
    },
    {
      key: '2',
      param: 'description',
      explain: '提示内容描述',
      type: `string`,
      defaultValue: "-"
    },
    {
      key: '3',
      param: 'duration ',
      explain: '提示持续时间',
      type: `number`,
      defaultValue: "4s"
    },
    {
      key: '4',
      param: 'placement',
      explain: '提示框的方位,可选 topLeft topRight bottomLeft bottomRight',
      type: `string`,
      defaultValue: "topRight"
    },
    {
      key: '5',
      param: 'icon',
      explain: '自定义icon的name属性',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '6',
      param: 'onClose',
      explain: '提示关闭的回调函数',
      type: 'Function',
      defaultValue: "-"
    },
    {
      key: '7',
      param: 'className',
      explain: '自定义 Button 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '8',
      param: 'style',
      explain: '自定义 Button 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api