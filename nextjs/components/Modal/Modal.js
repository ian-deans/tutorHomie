import React from 'react'
import {SurveyStringWrapper} from './index'

export default props => {

  const _modal = (<div>
    <SurveyStringWrapper data={props.data} />
  </div>)

  return props.show ? _modal : null
}
