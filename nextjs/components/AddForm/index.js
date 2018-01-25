import React from 'react'
import {
  FormGroup, 
  ControlLabel, 
  FormControl, 
  Button,
  // Dropdown,
  SplitButton,
  MenuItem,
} from 'react-bootstrap'

import {types} from '../../utils'
import Dropdown from './Dropdown'

export default class AddForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: null,
    }
    this.valuesAreNotBlank = this.valuesAreNotBlank.bind(this)
    this.selectType = this.selectType.bind(this)
  }

  componentDidMount() {
  }

  selectType(selectedType) {
    let newState = Object.assign({}, this.state)
    newState.type = selectedType
    this.setState(newState)
  }

  _setFields() {
    let {subject} = 'students'
    let data = {}
    switch(subject) {
    case 'students':
      data = this._studentFields()
      break
    case 'classcodes':
      data = this._classCodeFields()
      break
    case 'sessions':
      data = this._sessionFields()
      break
    }
    this.setState({data})
  }

  _studentFields() {
    const name = ''
    const email = ''
    const class_code = ''
    const handle = ''
    return {name, email, class_code, handle}
  }
  _classCodeFields() {
    const code = ''
    const value = ''
    return {code, value}
  }
  _sessionFields() {
    const datetime = ''
    const student = ''
    return {datetime, student}
  }



  handleOnChange(event, fieldName) {
    let state = this.state
    state.data[fieldName] = event.target.value
    this.setState(state)
  }
  // handlePressEnter(event) {
  //   if (event.key === 'Enter') {
  //     this.handleSubmit(event)
  //   }
  // }
  valuesAreNotBlank(values) {
    for (let i=0; i<values.length; i++) {
      if (values[i] === '') {
        return false
      }
      return true
    }
  }

  // async handleSubmit(e) {
  //   e.preventDefault()
  //   let dataValues = Object.values(this.state.data)
  //   if (this.valuesAreNotBlank(dataValues)) {
  //     const data = [...this.state.data]
  //     const request = new Request(`http://localhost:4040/${this.state.subject}`, {
  //       method: 'POST',
  //       headers: new Headers({
  //         'Content-Type': 'application/json'
  //       }),
  //       body: JSON.stringify(data)
  //     })
      
  //     await fetch(request)
  //     this._setFields()
  //     this.props.updateStateFn()
  //     this.props.hideFn()
  //   }
  // }

  _renderDropdown() {

  }
    
  render() {
    return (
      <div>
        <Dropdown />

        <form style={{
          display: 'flex', 
          margin: '5px', 
          boxShadow: '2px 2px 15px 6px grey',
          padding: '10px',
          borderRadius: '5px'
        }}>

   

          <FormGroup style={{
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
          
            { 
              this.state.data && (Object.keys(this.state.data).map((fieldName, i) => {
                return <div key={i} style={{ margin: '5px'}}>
                  <label>{fieldName}</label>
                  <FormControl 
                    type="text" 
                    value={this.state[fieldName]} 
                    autoFocus={i === 0 ? true : false}
                    onChange={event =>
                      this.handleOnChange(event, fieldName)}
                  />
                </div>
              })) 
            }
          </FormGroup>
        </form>
      </div>
    )
  }
}