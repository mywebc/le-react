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
      param: 'visible',
      explain: '对话框是否可见',
      type: `boolean`,
      defaultValue: "-"
    },
    {
      key: '2',
      param: 'title',
      explain: '标题',
      type: `string`,
      defaultValue: "-"
    },
    {
      key: '3',
      param: 'mask',
      explain: '遮罩是否可见',
      type: `boolean`,
      defaultValue: "true"
    },
    {
      key: '4',
      param: 'closeIcon',
      explain: '自定义icon的name属性,null即为不显示',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '5',
      param: 'maskClosable',
      explain: '遮罩层是否支持点击关闭',
      type: 'boolean',
      defaultValue: "true"
    },
    {
        key: '6',
        param: 'okText',
        explain: '确认按钮文字',
        type: 'string',
        defaultValue: "确认"
      },
      {
        key: '7',
        param: 'cancelText',
        explain: '取消按钮文字',
        type: 'string',
        defaultValue: "取消"
      },
      {
        key: '8',
        param: 'footer',
        explain: '底部内容，当不需要默认底部按钮时，可以设为 footer={null}',
        type: 'ReactNode[] | null',
        defaultValue: "(确定取消按钮)"
      },
      {
        key: '9',
        param: 'onCancel',
        explain: '点击遮罩层或取消按钮的回调',
        type: 'Function',
        defaultValue: "-"
      },
      {
        key: '10',
        param: 'onConfirm',
        explain: '点击确认回调',
        type: 'Function',
        defaultValue: "-"
      },
      {
        key: '11',
        param: 'onCloseIcon',
        explain: '点击右上角叉回调',
        type: 'Function',
        defaultValue: "-"
      },
    {
      key: '12',
      param: 'className',
      explain: '自定义 Modal 类名',
      type: 'string',
      defaultValue: "-"
    },
    {
      key: '13',
      param: 'style',
      explain: '自定义 Modal 样式',
      type: 'React.CSSProperties',
      defaultValue: "-"
    },
  ];
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Api