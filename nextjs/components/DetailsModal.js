import React from 'react'

export default props => {

  return (
    <div>
      <div closeButton>
        <span>Tutor Homie</span>
      </div>

      <div>
        {props.viewComponent}
      </div>

    </div>
  )
}
