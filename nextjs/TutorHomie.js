import React from 'react'
import moment from 'moment'
import {Button, ButtonGroup, Alert} from 'react-bootstrap'

import {buildTableData, types} from './utils'
import actions from './utils/actions'
import  * as components from './components'
import API from './API'
export default class TutorHomie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        students: [],
        classcodes: [],
        sessions: [], 
        isLoading: true,
      },

      table: {
        subject: null,
        fields: [],
        values: [],
      },

      focused: {
        subject: null,
        item: null,
      },

      modal: {
        show: false,
        addForm: false,
        detailView: false,
      }
    }
    this.handleOpenModal = actions.handleOpenModal.bind(this)
    this.handleCloseModal = actions.handleCloseModal.bind(this)
    this.toggleAddForm = actions.toggleAddForm.bind(this)
    // this.toggleAddForm = actions.toggleAddForm.bind(this)
    // this.hideAddForm = actions.hideAddForm.bind(this)
    this.selectTable = this.selectTable.bind(this)
    this._refreshAppData = this._refreshAppData.bind(this)
  }

  componentDidMount() {
    this.getInitialState()
    // setInterval(this._refreshAppData, 30000)
  }

  async getInitialState() {
    let newState = Object.assign({}, this.state)
    const students = await API.getAll(types.STUDENTS)
    const classcodes = await API.getAll(types.CLASSCODES)
    const sessions = await API.getAll(types.SESSIONS)
    newState.data = {
      students, classcodes, sessions, isLoading: false
    }
    await this.setState(newState)
  }

  async _refreshAppData() {
    await this.setState({loading: true})
    const students = await apiFetch(types.STUDENTS)
    const classcodes = await apiFetch(types.CLASSCODES)
    const sessions = await this._sessions()
    const data = {
      students, classcodes, sessions, isLoading: false
    }
    await this.setState({data})

    if (this.state.table.subject) {
      console.log('Updating current table view...')
      let subject = this.state.table.subject
      let table = buildTableData(subject, this.state[subject], null)
      this.setState({table})
    }
  }

  async _sessions() {
    let sessions = await apiFetch(types.SESSIONS)
    let newSessions = sessions.map(session =>
      ({
        id: session.id,
        date: moment(session.datetime).format('ddd MMM Do'),
        time: moment(session.datetime).format('h:mm a'),
        student: session.student,
        topic: session.topic,
        status: session.status,
        in_central: session.in_central.toString(),
      })
    )
    return newSessions
  }

  selectTable(subject) {
    this.changeTableData(subject)
  }

  changeTableData(subject) {
    let table
    let state = Object.assign(this.state)
    switch(subject) {
      case types.STUDENTS:
        table = buildTableData(state.data.students)
        break
      case types.CLASSCODES:
        table = buildTableData(state.data.classcodes)
        break
      case types.SESSIONS:
        table = buildTableData(state.data.sessions)
        break
    }
    this.setState({table, focused: {subject, item:null}})
  }

  _modalBody() {
    const {modal, focused} = this.state
    if (modal.addForm && !focused.item && !modal.detailView) {
      return <components.AddForm />
    }
    else if (!modal.addForm && focused.item && modal.detailView) {
      return <components.DetailView subject={focused.subject} item={focused.item}/>
    }
    /*
  ADDFORM
    if addForm is true
      &&
    if there is not current target / focus
      loadAddForm()

    DETAILVIEW
      if addForm != true
       &&
      if focused.item 
        loadDetalView()

    */
  }

  render() {
    const currentState = this.state
    const isLoading = currentState.data.isLoading
    const {focused, table, modal} = currentState

    const modalBody = this._modalBody()

    return (
      <div style={{margin: "10px"}}>
        <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
          <components.NavBar 
            selectSubjectFn={this.selectTable}
            toggleAddFormFn={this.toggleAddForm}
            isLoading={isLoading}
          />
        </div>

        

        <components.DetailsModal 
          show={modal.show} 
          closeFn={this.handleCloseModal} 
          updateStateFn={this._refreshAppData}
          viewComponent={modalBody}
        />

        <components.Table 
            fields={table.fields}
            values={table.values}
            subject={focused.subject}
            popUpFn={this.handleOpenModal}
        />
      </div>
    )
  }
}
