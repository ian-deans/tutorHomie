import React from 'react'
import {Modal} from 'react-bootstrap'

export default props => {

  return (
    <Modal 
      show={props.show} 
      onHide={props.closeFn}
      bsSize='large'
    >
      <Modal.Header closeButton>
        <span>Tutor Homie</span>
      </Modal.Header>

      <Modal.Body>
        {props.viewComponent}
      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  )
}
