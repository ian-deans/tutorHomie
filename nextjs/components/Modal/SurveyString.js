import React from 'react'
import {Alert} from 'react-bootstrap'

export default props => {
  console.log(props)
  const data = props.data
  const name = data[2].split(' ')
  return (
    <Alert>{`${name[1]}, ${name[0]}~${data[4]}~${data[3]}~${data[0]}`}</Alert>
  )
}