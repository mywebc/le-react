import React from "react"
import Table from "../table/Table"

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


export const Api1 = () => {

    const dataSource = [
        {
            key: '1',
            param: 'label',
            explain: 'radio文本说明',
            type: `string`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'value',
            explain: 'radio的值',
            type: `any`,
            defaultValue: "-"
        },
        {
            key: '3',
            param: 'defaultChecked ',
            explain: 'radio默认选中状态',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '4',
            param: 'disabled',
            explain: '是否禁用',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '5',
            param: 'name',
            explain: '用于分组',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '6',
            param: 'onChange',
            explain: 'radio改变的回调',
            type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
            defaultValue: "-"
        },
        {
            key: '7',
            param: 'className',
            explain: '自定义 Notification 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '8',
            param: 'style',
            explain: '自定义 Notification 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}


export const Api2 = () => {

    const dataSource = [
        {
            key: '1',
            param: 'value',
            explain: 'radioGroup的默认值',
            type: `any`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'onChange',
            explain: 'radio改变的回调',
            type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
            defaultValue: "-"
        },
        {
            key: '3',
            param: 'className',
            explain: '自定义 Notification 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '4',
            param: 'style',
            explain: '自定义 Notification 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}
