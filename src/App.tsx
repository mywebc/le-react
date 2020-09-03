import React from 'react';
import Button from "./components/button/Button";
import ButtonGroup from "./components/button/ButtonGroup"
import "./styles/index.scss"
import "./App.scss"
import Table from "./components/table/Table"

const App = () => {

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  return (
    <div className="App">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default App;
