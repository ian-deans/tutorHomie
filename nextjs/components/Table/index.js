import React from 'react'
import {Table, Panel} from 'react-bootstrap'
import Row from './Row'
import TableWrapper from './TableWrapper'

export default props => {
  let _columns, _rows
  let title = 'Tutor Homie'

  if (props.subject) {
    _columns = props.fields.map((field, i) => 
      <th key={i}>{field}</th>)
    
    _rows = props.values.map((value, i) => {
      
      return <Row key={i} data={value} popUpFn={props.popUpFn} />
    }
    )

    title = props.subject
  }

  return (
    <TableWrapper title={title}>
      <Table striped bordered responsive condensed fill>
        <thead>
          <tr>
            {props.subject && (_columns)}
          </tr>
        </thead>
        <tbody>
          {props.subject && (_rows)}
        </tbody>
      </Table>
    </TableWrapper>
  )
}
