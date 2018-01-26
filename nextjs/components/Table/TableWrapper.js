import React from 'react'
import {Panel} from 'react-bootstrap'

export default props => {
  return (
    <Panel header={props.title} 
      bsStyle="primary" 
      style={{
        marginLeft: "10px", 
        marginRight: "10px", 
        marginTop: "15px",
      }}
    >
      {props.children}
    </Panel>
  )
}