import React from 'react'
import {Table, Panel} from 'react-bootstrap'
import Row from './Row'

export default props => {
  let data, columns, rows

  const _capFirstLetter = columnName => {
    let _columnName = columnName.split('')
    _columnName[0] = _columnName[0].toUpperCase()
    return _columnName.join('')
  }

  if (props.data[0]) {

    data = props.data.map(rowItem =>
      Object.values(rowItem)
    )

    columns = (<tr>
      { [...Object.keys(props.data[0])]
        .map((columnName, i) => <th key={i}>{_capFirstLetter(columnName)}</th>)}
    </tr>)

    rows = data.map((row, i) =>
      <Row key={i} data={row} popUpFn={props.popUpFn}/>
    )
  }



  const title = (<h3>{props.subject}</h3>)

  return (
    <Panel header={title} bsStyle="primary" style={{marginLeft: "10px", marginRight: "10px", marginTop: "15px"}}>
      <Table striped bordered responsive condensed fill>
        <thead>
          {columns && (columns)}
        </thead>
        <tbody>

          {rows && (rows)}
        </tbody>
      </Table>
    </Panel>
  )
}
