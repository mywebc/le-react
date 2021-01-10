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
            param: 'totalPage',
            explain: '总页码数',
            type: `number`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'currentPage',
            explain: '默认页码',
            type: `number`,
            defaultValue: "1"
        },
        {
            key: '3',
            param: 'simple',
            explain: '是否开启简洁模式',
            type: `boolean`,
            defaultValue: "false"
        },
        {
            key: '4',
            param: 'size',
            explain: 'Pager尺寸，small | default',
            type: `string`,
            defaultValue: "default"
        },
        {
            key: '5',
            param: 'hidePager',
            explain: '页码数为1时是否隐藏Pager',
            type: 'boolean',
            defaultValue: "true"
        },
        {
            key: '6',
            param: 'onChange',
            explain: '页码改变时的回调',
            type: '(value: number) => void',
            defaultValue: "-"
        },
        {
            key: '7',
            param: 'nextClick',
            explain: '点击下一页触发的回调',
            type: '(value: number) => void',
            defaultValue: "-"
        },
        {
            key: '8',
            param: 'prevClick',
            explain: '点击上一页触发的回调',
            type: '(value: number) => void',
            defaultValue: "-"
        },
        {
            key: '9',
            param: 'className',
            explain: '自定义 Pager 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '10',
            param: 'style',
            explain: '自定义 Pager 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

export default Api