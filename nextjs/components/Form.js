import React from 'react'
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {...props}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOnChange(event, fieldName) {
    this.setState({[fieldName]: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const request = new Request( 'http://localhost:4040/students', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })

    fetch(request)
  }

  render() {
    return (
      <form style={{display: 'flex'}}>
        <FormGroup>
          { this.state && (Object.keys(this.state).map((fieldName, i) => 
            <div key={i}>
              <ControlLabel>{fieldName}</ControlLabel>
              <FormControl type="text" value={this.state[fieldName]} onChange={event => this.handleOnChange(event, fieldName)}  />
            </div>
          )) }
          <button onClick={this.handleSubmit}>Add</button>
        </FormGroup>
      </form>
    )
  }
}