import React from 'react'
import {ButtonToolbar, ButtonGroup, Button, Tooltip} from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default props => {

  return (
    <div>
      <ButtonToolbar>
        <ButtonGroup>
          <Button
            bsStyle="success"
            onClick={props.update}
          >
            Update
          </Button>
          <Button 
            onClick={props.delete}
            bsStyle="danger"
          ><FontAwesome name="trash" /></Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )
}