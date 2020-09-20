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
      param: 'spinning',
      explain: '默认加载状态',
      type: 'boolean',
      defaultValue: "true"
    },
    {
        key: '2',
        param: 'size',
        explain: '组件大小，small | large',
        type: 'string',
        defaultValue: "-"
      },
      {
        key: '3',
        param: 'tip',
        explain: '自定义文案',
        type: 'string',
        defaultValue: "-"
      },
    {
      key: '4',
      param: 'className',
      explain: '自定义 Spin 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '5',
      param: 'style',
      explain: '自定义 Spin 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api