import React from 'react'

export default props => {
  return (
    <tr tabIndex={1} onClick={() => props.popUpFn(props.data[0])}>
      {Object.values(props.data).map((data, i) =>
        <td key={i}>{data}</td>
        // <input key={i} placeholder={data} />
      )
      }
    </tr>
  )
}