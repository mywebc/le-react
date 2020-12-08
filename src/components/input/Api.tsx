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
            param: 'disabled',
            explain: '是否禁止交互',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '2',
            param: 'clearable',
            explain: '是否支持清除',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '3',
            param: 'type',
            explain: 'input类型',
            type: "password | textarea | text",
            defaultValue: "text"
        },
        {
            key: '4',
            param: 'addonBefore',
            explain: '前置标签',
            type: 'ReactNode | string',
            defaultValue: "-"
        },
        {
            key: '5',
            param: 'addonAfter',
            explain: '后置标签',
            type: 'ReactNode | string',
            defaultValue: "-"
        },

        {
            key: '6',
            param: 'onChange',
            explain: '值改变时的回调',
            type: '(val: string | number) => void',
            defaultValue: "-"
        },
        {
            key: '7',
            param: 'onPressEnter',
            explain: '按下回车键时的回调',
            type: '(e: React.KeyboardEvent) => void',
            defaultValue: "-"
        },
        {
            key: '8',
            param: 'className',
            explain: '自定义 Rate 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '9',
            param: 'style',
            explain: '自定义 Rate 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

export default Api