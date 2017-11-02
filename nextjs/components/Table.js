import React from 'react'

export default props => {
  let data, columns, rows
    
  if (props.tableData.data) {

    data = props.tableData.data.map(rowItem =>
      Object.values(rowItem)
    )

    columns = <tr>
      { [...Object.keys(props.tableData.data[0])]
        .map((columnName, i) => <td key={i}>{columnName}</td>)}
    </tr>

    rows = data.map((row, i) =>
      <tr key={i}>
        {row.map((rowData, k) =>
          <td key={k}>
            {rowData}
          </td>
        )}
      </tr>
    )
  }

  return (
    <table>
      <tbody>
        {columns && (columns)}

        {rows && (rows)}
      </tbody>
    </table>
  )
}
