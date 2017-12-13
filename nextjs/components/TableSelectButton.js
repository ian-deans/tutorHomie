import React from 'react'
import {Button} from 'react-bootstrap'

export default props => {
  return <Button 
    disabled={props.isLoading} 
    bsStyle="info" 
    onClick={() => props.selectTable(props.target)}
  >
    {props.isLoading ? 'Loading...' : props.target}
  </Button>

}
