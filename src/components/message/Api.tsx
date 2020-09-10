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
      param: 'content',
      explain: '提示内容',
      type: `string`,
      defaultValue: "-"
    },
    {
      key: '2',
      param: 'options > duration ',
      explain: '提示持续时间',
      type: `number`,
      defaultValue: "2s"
    },
    {
      key: '3',
      param: 'options > showIcon',
      explain: '是否显示icon',
      type: `boolean`,
      defaultValue: "true"
    },
    {
      key: '4',
      param: 'options > icon',
      explain: '自定义icon的name属性',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '5',
      param: 'options > onClose',
      explain: '提示关闭的回调函数',
      type: 'Function',
      defaultValue: "-"
    },
    {
      key: '6',
      param: 'className',
      explain: '自定义 Button 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '7',
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