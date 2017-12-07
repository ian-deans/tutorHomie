import React from 'react'
import {Table, Panel} from 'react-bootstrap'
import Row from './Row'

export default props => {
  let data, columns, rows
  if (props.data) {

    data = props.data.map(rowItem =>
      Object.values(rowItem)
    )

    columns = (<tr>
      { [...Object.keys(props.data[0])]
        .map((columnName, i) => <th key={i}>{columnName}</th>)}
    </tr>)

    rows = data.map((row, i) =>
      <Row key={i} data={row} popUpFn={props.popUpFn}/>
    )
  }

  const title = (<h3>{props.subject}</h3>)

  return (
    <Panel header={title} bsStyle="primary" style={{marginLeft: "10px", marginRight: "10px", marginTop: "15px"}}>
      <Table striped bordered condensed fill>
        <tbody>
          {columns && (columns)}

          {rows && (rows)}
        </tbody>
      </Table>
    </Panel>
  )
}
