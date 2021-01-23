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
            explain: 'popover内容',
            type: `string`,
            defaultValue: "-"
        },
        {
            key: '2',
            param: 'position',
            explain: 'popover 触发方向',
            type: `支持四种方向，'top','bottom','left','right'`,
            defaultValue: "top"
        },
        {
            key: '3',
            param: 'trigger',
            explain: 'popover 触发方式',
            type: `支持两种触发方式，'click' | 'hover'`,
            defaultValue: "click"
        },
        {
            key: '4',
            param: 'className',
            explain: '自定义 popover 类名',
            type: 'string',
            defaultValue: "-"
        },
        {
            key: '5',
            param: 'style',
            explain: '自定义 popover 样式',
            type: 'React.CSSProperties',
            defaultValue: "-"
        },
    ];
    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}

export default Api