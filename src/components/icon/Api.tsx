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
      param: 'name',
      explain: 'icon名称',
      type: 'string',
      defaultValue: "-"
    },
    {
        key: '2',
        param: 'iconLibrary',
        explain: '阿里图标库地址',
        type: 'string',
        defaultValue: "-"
      },
    {
      key: '3',
      param: 'className',
      explain: '自定义 Icon 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '4',
      param: 'style',
      explain: '自定义 Icon 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api