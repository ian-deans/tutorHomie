import React from 'react'
import Table from './Table'
import Form from './Form'
import {Button, ButtonGroup, Alert} from 'react-bootstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: {
        subject: "",
        data: null,
        sortKey: null,
      },
      students: null,
      class_codes: null,
      sessions: null,

      showAlert: false,
      alertData: null,
    }
    this.handlePopUp = this.handlePopUp.bind(this)
  }

  async componentDidMount() {
    const students = await this.getStudents()
    const class_codes = await this.getClassCodes()
    this.setState({students, class_codes})
  }

  async getStudents() {
     const res = await fetch(`http://${document.domain}:4040/students`)
     const result = await res.json()
     if (result.message) {
       throw new Error(result.message)
     }
     return result.data
  }

  async getClassCodes() {
     const res = await fetch(`http://${document.domain}:4040/classcodes`)
     const result = await res.json()
    //  if (result.message) {
    //    throw new Error(result.message)
    //  }
     return result.data
  }

  selectTable(table) {
    let tableData = {}
    switch(table) {
      case 'students':
        tableData.subject = 'students'
        tableData.data = this.state.students
        tableData.sorkKey = 'name'
        break

      case 'class_codes':
        tableData.subject = 'class_codes'
        tableData.data = this.state.class_codes
        tableData.sortKey = 'code'
        break
    }
    this.setState({tableData})
  }

  handlePopUp(data) {
    this.setState({showAlert: true, alertData: data})
  }

  _Alert() {
    const data = this.state.alertData
    const name = data[2].split(' ')
    return (<Alert>{`${name[1]}, ${name[0]}~${data[3]}~${data[1]}~${data[4]}`}</Alert>)
  }

  render() {

    const {tableData} = this.state

    return (
      <div style={{margin: "10px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div>
            <h1>Tutor Homie</h1>
            <ButtonGroup>
              <Button bsStyle="info" onClick={() => this.selectTable('students')}>Students</Button>
              <Button bsStyle="info" onClick={() => this.selectTable('class_codes')}>Class Codes</Button>
            </ButtonGroup>
          </div>
        
        </div>
        {this.state.showAlert && (this._Alert())}
        <Table 
          data={tableData.data}
          subject={tableData.subject}
          sortKey={tableData.sortKey}
          popUpFn={this.handlePopUp}
        />

        <Form 
          email=''
          name=''
          class_code=''
        />
        
      </div>
    )
  }
}
