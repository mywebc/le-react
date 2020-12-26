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
            explain: 'checkBox文本说明',
            type: `string`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'defaultChecked ',
            explain: 'checkBox默认选中状态',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '3',
            param: 'disabled',
            explain: '是否禁用',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '4',
            param: 'indeterminate',
            explain: '是否为中间状态',
            type: 'boolean',
            defaultValue: "false"
        },
        {
            key: '5',
            param: 'onChange',
            explain: 'checkBox改变的回调',
            type: '(label: string, checked: boolean) => void',
            defaultValue: "-"
        },
        {
            key: '6',
            param: 'className',
            explain: '自定义 checkBox 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '7',
            param: 'style',
            explain: '自定义 checkBox 样式',
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
            param: 'defaultValue',
            explain: 'checkBox的默认值',
            type: `string[]`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'onChange',
            explain: 'checkBoxGroup改变的回调',
            type: '(value: string[] => void',
            defaultValue: "-"
        },
        {
            key: '3',
            param: 'className',
            explain: '自定义 checkBoxGroup 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '4',
            param: 'style',
            explain: '自定义 checkBoxGroup 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}
