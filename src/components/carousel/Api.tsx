import React from "react"
import Table from "../table/Table"

export const Api = () => {
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
			param: 'dots',
			explain: '是否显示面板指示点',
			type: `boolean`,
			defaultValue: "true"
		},
		{
			key: '2',
			param: 'duration',
			explain: '自动播放间隔，设置为 0 时不自动播放',
			type: `number`,
			defaultValue: "0"
		},
		{
			key: '3',
			param: 'afterChange',
			explain: '面板切换完成（动画结束）时的回调',
			type: `(index: number) => void`,
			defaultValue: "-"
		},

		{
			key: '4',
			param: 'className',
			explain: '自定义 Button 类名',
			type: 'string',
			defaultValue: "-"
		},
		{
			key: '5',
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

export const Methods = () => {
	const columns = [
		{
			title: '名称',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: '描述',
			dataIndex: 'describe',
			key: 'describe',
		},
		{
			title: '参数',
			dataIndex: 'param',
			key: 'param',
		},
	];
	const dataSource = [
		{
			key: '1',
			name: 'goTo()',
			describe: '切换到指定面板',
			param: "slideNumber:number"
		},
		{
			key: '2',
			name: 'next()',
			describe: '切换到下一面板',
			param: "--"
		},
		{
			key: '3',
			name: 'prev()',
			describe: '切换到上一面板',
			param: "--"
		},
	];
	return (
		<Table dataSource={dataSource} columns={columns} />
	)
}
