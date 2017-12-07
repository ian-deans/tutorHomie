import React from 'react'
import Table from './Table'
import Form from './Form'
import {Button, ButtonGroup, Alert} from 'react-bootstrap'
import {buildTableData, apiFetch} from '../utils'

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
      fields: {
        students: ['name', 'email', 'class_code', 'handle'],
        class_codes: ['code', 'value']
      },
      isLoading: true
    }
    this.handlePopUp = this.handlePopUp.bind(this)
  }

  async componentDidMount() {
    await this.setState({loading: true})
    const students = await this.getStudents()
    const class_codes = await this.getClassCodes()
    this.setState({students, class_codes, isLoading: false})
  }
  async getStudents() {
    return await apiFetch('students')
  }
  async getClassCodes() {
     return await apiFetch('classcodes')
  }

  selectTable(table) {
    let tableData
    switch(table) {
      case 'students':
        tableData = buildTableData(table, this.state.students, 'name')
        break
      case 'class_codes':
        tableData = buildTableData(table, this.state.class_codes, 'code')
        break
    }
    this.setState({tableData, showAlert: false})
  }

  handlePopUp(data) {
    this.setState({showAlert: true, alertData: data})
  }

  _Alert() {
    if (this.state.tableData.subject === 'students') {
      const data = this.state.alertData
      const name = data[2].split(' ')
      return (<Alert>{`${name[1]}, ${name[0]}~${data[3]}~${data[1]}~${data[4]}`}</Alert>)
    } 
  }

  _Form() {
    const {subject} = this.state.tableData
    switch(subject) {
      case 'students':
        return <Form email='' name='' class_code='' handle='' grad_date='' />
    }
  }

  _Button(target) {
    const {isLoading} = this.state
    return <Button 
        disabled={isLoading} 
        bsStyle="info" 
        onClick={() => this.selectTable(target)}
      >
        {isLoading ? 'Loading...' : target}
      </Button>
  }

  render() {
    const {tableData} = this.state
    const buttons = (<ButtonGroup>
      {this._Button('students')}
      {this._Button('class_codes')}
    </ButtonGroup>)

    return (
      <div style={{margin: "10px"}}>
        <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
          <div>
            <h1>Tutor Homie</h1>
           {buttons}
          </div>
        </div>
        {this.state.showAlert && (this._Alert())}
        {this.state.tableData.data && ( 
          <Table 
            data={tableData.data}
            subject={tableData.subject}
            sortKey={tableData.sortKey}
            popUpFn={this.handlePopUp}
          />)
        }
        {this.state.tableData.subject && (this._Form())}
      </div>
    )
  }
}
