import React from 'react'

export default props => {
  return <tr>{props.data.map((data, i) => <td key={i}>{data}</td>)}</tr>
}