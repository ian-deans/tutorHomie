import React from 'react'
import {Table, Panel} from 'react-bootstrap'
import Row from './Row'

export default props => {
  let _columns, _rows
  let _title = 'Tutor Homie'

  if (props.subject) {
    _columns = props.fields.map((field, i) => 
      <th key={i}>{field}</th>)
    
    _rows = props.values.map((value, i) => 
      <Row key={i} data={value} popUpFn={props.popUpFn} />
    )

    _title = props.subject
  }

  return (
    <Panel header={_title} 
      bsStyle="primary" 
      style={{
        marginLeft: "10px", 
        marginRight: "10px", 
        marginTop: "15px",
      }}
    >
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
    </Panel>
  )
}
