import React from "react"
import "./Table.scss"

interface ITableProps {
  dataSource: { key: string | number }[];
  columns: { title: string; key: string | number }[];
}

const Table: React.FC<ITableProps> = (props) => {
  const { dataSource, columns } = props
  return (
    <div className="le_table">
      <table>
        <thead>
          <tr>
            {columns.map(_ => <th key={_.key}>{_.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {dataSource.map(_ => (
            <tr key={_.key}>
              {columns.map(__ => <td key={__.key} >{(_ as any)[__.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table