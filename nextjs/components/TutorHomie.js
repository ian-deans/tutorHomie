import React from 'react'
import Table from './Table'
import Form from './Form'
import NavBar from './NavBar'
import TableSelectButton from './TableSelectButton'
import {Button, ButtonGroup, Alert} from 'react-bootstrap'
import {buildTableData, apiFetch} from '../utils'
import moment from 'moment'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subject: null,
      tableData: {
        subject: null,
        data: null,
        sortKey: null,
      },
      showAlert: false,
      alertData: null,
      isLoading: true,
      addForm: false,
    }
    this.handlePopUp = this.handlePopUp.bind(this)
    this.toggleAddForm = this.toggleAddForm.bind(this)
    this.selectTable = this.selectTable.bind(this)
    this._updateState = this._updateState.bind(this)
  }

  async componentDidMount() {
    this._updateState()
    setInterval(this._updateState, 60000)
  }

  async _updateState() {
    await this.setState({loading: true})
    console.log('Updating table data...')
    const students = await this._students()
    const class_codes = await this._classCodes()
    const sessions = await this._sessions()
    await this.setState({students, class_codes, sessions, isLoading: false})
    if (this.state.tableData.subject) {
      console.log('Updating current table view...')
      let subject = this.state.tableData.subject
      let tableData = buildTableData(subject, this.state[subject], null)
      this.setState({tableData})
    }
  }
  async _students() {
    return await apiFetch('students')
  }
  async _classCodes() {
     return await apiFetch('classcodes')
  }
  async _sessions() {
    let sessions = await apiFetch('sessions')
    let newSessions = sessions.map(session => {
      return {
        id: session.id,
        date: moment(session.datetime).format('ddd MMM Do'),
        time: moment(session.datetime).format('h:mm a'),
        student: session.student,
        topic: session.topic,
        status: session.status,
        in_central: session.in_central.toString(),
      }
    })
    return newSessions
  }
  
  _Alert() {
    if (this.state.tableData.subject === 'students') {
      const data = this.state.alertData
      const name = data[2].split(' ')
      return (<Alert>{`${name[1]}, ${name[0]}~${data[3]}~${data[1]}~${data[4]}`}</Alert>)
    } 
  }

  selectTable(subject) {
    this.changeTableData(subject)
  }

  changeTableData(subject) {
    let tableData
    switch(subject) {
      case 'students':
        tableData = buildTableData(subject, this.state.students, 'name')
        break
      case 'class_codes':
        tableData = buildTableData(subject, this.state.class_codes, 'code')
        break
      case 'sessions':
        tableData = buildTableData(subject, this.state.sessions, 'datetime')
        break
    }
    this.setState({tableData, showAlert: false, addForm: false})
  }

  handlePopUp(data) {
    this.setState({showAlert: true, alertData: data})
  }

  toggleAddForm() {
    let addForm = !this.state.addForm
    console.log(addForm)
    this.setState({addForm})
  }

  render() {
    const {tableData, isLoading} = this.state
    const addButton = (<Button
    onClick={this.toggleAddForm}
  >+</Button>)

    return (
      <div style={{margin: "10px"}}>
        <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
        <NavBar selectTable={this.selectTable} isLoading={isLoading}/>
        </div>

        {this.state.showAlert && (this._Alert())}

        {addButton}

        {this.state.addForm && (
          <Form 
            subject={this.state.tableData.subject} //FIXME: Null values should not be used
          />
        )}

        {this.state.tableData.data && ( 
          <Table 
            data={tableData.data}
            subject={tableData.subject}
            sortKey={tableData.sortKey}
            popUpFn={this.handlePopUp}
          />)
        }
      </div>
    )
  }
}
