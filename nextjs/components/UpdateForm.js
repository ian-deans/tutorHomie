import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

export default class UpdateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: this.props.subject,
      key: Object.keys(this.props.data)[0],
      identifier: Object.values(this.props.data)[0],
      data: this.props.data,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    let currentState = this.state
    let data = Object.assign(currentState.data)
    delete data[currentState.key]
    this.setState({data})
  }

  handleOnChange(event, fieldName) {
    let state = this.state
    state.data[fieldName] = event.target.value
    this.setState(state)
  }

  async handleSubmit(e) {
    e.preventDefault()
    const currentState = this.state

    const url = `http://localhost:4040/${this.state.subject}/${this.state.identifier}`
    const request = new Request(url, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state.data)
    })

    await fetch(request)
  }

  render() {
    let state = this.state
    let keys = Object.keys(state.data)
    let values = Object.values(state.data)

    return (
      <form>
        <FormGroup>
          {
            keys.map((fieldName, i) => {
              return (
                <div key={i}>
                  <label>{fieldName}</label>
                  <FormControl
                    type='text'
                    value={this.state[fieldName]}
                    placeHolder={values[i]}
                    onChange={event => this.handleOnChange(event, fieldName)}
                  />
                </div>
              )
            })
          }
        </FormGroup>
        <Button
          bsStyle='success'
          onClick={this.handleSubmit}
        >Update</Button>
      </form>
    )
  }
}