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
            param: 'defaultSpread',
            explain: '默认展开选项',
            type: `number[],number`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'accordion',
            explain: '是否为手风琴模式',
            type: 'boolean',
            defaultValue: "false"
        },
        {
            key: '3',
            param: 'onChange',
            explain: '激活面板时的回调',
            type: '(value: number[]) => void',
            defaultValue: "-"
        },
        {
            key: '4',
            param: 'className',
            explain: '自定义 collapse 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '5',
            param: 'style',
            explain: '自定义 collapse 样式',
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
            param: 'title',
            explain: '面板标题',
            type: `string`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'disabled',
            explain: '是否禁用',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '3',
            param: 'onChange',
            explain: '激活面板时的回调',
            type: '(key: number, state: boolean） => void',
            defaultValue: "-"
        },
        {
            key: '3',
            param: 'className',
            explain: '自定义 collapseItem 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '4',
            param: 'style',
            explain: '自定义 collapseItem 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}
