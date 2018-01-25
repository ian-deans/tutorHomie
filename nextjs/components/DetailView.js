import React from 'react'
import {SurveyString} from './index'
import {types} from '../utils'

export default props => {
  // subject, item from props

  const surveyUrl = 'http://bit.ly/tutors-eval'

  const fields = Object.keys(props.item)
    .map((fieldName, i) => 
      <span key={i}>{fieldName} </span>
    )

  const values = Object.values(props.item)
    .map((value, i) => 
      <span key={i}>{value} </span>
    )

  const _renderSurveyString = () => {
    let stringData = Object.values(props.item)
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

  return (
    <div>
      <div>{fields}</div>
      <div>{values}</div>
      {props.subject === types.STUDENTS ? _renderSurveyString() : null}
    </div>
  )
}


/*
  <ActionBar 
      delete={this._confirmDelete} 
      update={this._toggleUpdating} 
    />
  
  {state.data && (this._SurveyString())}

  {state.data && (this._ModalBody())}

  {showWarning && (this._DeleteAlert())}

    _DeleteAlert () {
    return (
      <Alert bsStyle='danger' onDismiss={this._hideWarning}>
        <span>Are you sure you want to delete this entry?</span>
        <p>
          <Button bsStyle='danger' onClick={this._deleteEntry}>DELETE</Button>
          <Button onClick={this._hideWarning}>Cancel</Button>
        </p>
      </Alert>
    )
  } 

    



*/