import React from 'react'
import {Button} from 'react-bootstrap'

export default props => {
  return <Button 
    disabled={props.isLoading} 
    bsStyle="info" 
    onClick={() => props.selectSubject(props.subject)}
  >
    {props.isLoading ? 'Loading...' : props.subject}
  </Button>

}
