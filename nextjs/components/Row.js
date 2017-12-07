import React from 'react'

export default props => {
  return <tr onClick={()=>props.popUpFn(props.data)}>
    {props.data.map((data, i) =>
      <td key={i}>{data}</td>)
    }
  </tr>
}