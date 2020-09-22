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
      param: 'offsetTop',
      explain: '距离窗口顶部达到指定偏移量后触发',
      type: `number`,
      defaultValue: "0"
    }, 
    {
      key: '5',
      param: 'className',
      explain: '自定义 Button 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '6',
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