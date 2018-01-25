import React from 'react'
import {Alert} from 'react-bootstrap'

export default props => {
  const data = props.data
  const name = data[2].split(' ')
  return (
    <Alert>{`${name[1]}, ${name[0]}~${data[3]}~${data[1]}~${data[4]}`}</Alert>
  )
}