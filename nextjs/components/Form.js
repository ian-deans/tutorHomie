import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: this.props.subject,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this._setFields()
  }

  _setFields() {
    let {subject} = this.state
    let data = {}
    switch(subject) {
    case 'students':
      data = this._studentFields()
      break
    case 'class_codes':
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

  async handleSubmit(e) {
    e.preventDefault()
    const request = new Request( 'http://localhost:4040/'+this.state.subject, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state.data)
    })

    await fetch(request)
    this._setFields()
  }

  render() {
    return (
      <form style={{display: 'flex', margin: '10px'}}>
        <FormGroup style={{display: 'flex'}}>
          { this.state.data && (Object.keys(this.state.data).map((fieldName, i) => 
            <div key={i}>
              <ControlLabel>{fieldName}</ControlLabel>
              <FormControl 
                type="text" 
                value={this.state[fieldName]} 
                onChange={event =>
                  this.handleOnChange(event, fieldName)}
              />
            </div>
          )) }
          <Button
            bsStyle='success'
            onClick={this.handleSubmit}
          >Add</Button>
        </FormGroup>
      </form>
    )
  }
}