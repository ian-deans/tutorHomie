import React from 'react'
import {SurveyString} from './index'
import {types} from '../../utils'

export default props => {
  const surveyUrl = 'http://bit.ly/tutors-eval'
  const stringData = Object.values(props.data)
  console.log(stringData)

  return (
    <div>
      <SurveyString data={stringData} />
      <a href={surveyUrl} target="_blank">
        <button>
          Survey
        </button>
      </a>
    </div>
  )
}
