import React from 'react'
// import {Button, ButtonGroup} from 'react-bootstrap'

import {Modal, NavBar, Table} from './components'
import {buildTableData, types, actions} from './utils'
import API from './API'


/**
 * Simplify down to a simple roster of students. Remove detail modal and replace
 * with survey string component. Remove excess.
 */
export default class TutorHomie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
      },
      isLoading: true,
      modal: {
        show: false,
        data: null,
      },
    }
    this.handleOpenModal = actions.handleOpenModal.bind(this)
  }

  componentDidMount() {
    this.getInitialState()
  }

  async getInitialState() {
    let newState = Object.assign({}, this.state)
    newState.data.students = await API.getAll(types.STUDENTS)
    console.log(newState.data.students)
    newState.data.students.forEach(student =>{
      if (student.classCode) {
        student.classCode = Object.values(student.classCode)[0]
      }
      if (!student.handle) {
        student.handle = 'none'
      }
    })

    newState.isLoading = false
    newState.table = buildTableData(newState.data.students)
    this.setState(newState)
  }


  changeTableData(subject) {
    let newState = Object.assign(this.state)
    switch(subject) {
      case types.STUDENTS:
        newState.table = buildTableData(state.data.students)
        break
    }
    this.setState(newState)
  }

  render() {
    const {table, modal, isLoading} = this.state
    console.log(table)
    console.log(this.state.data)

    return (
      <div style={{margin: "10px"}}>
        <div style={{display: "flex", justifyContent: "center", margin: "10px"}}>
          <NavBar 
            selectSubjectFn={this.selectTable}
            isLoading={isLoading}
          />
        </div>

        <Modal
          show={modal.show} 
          data={modal.data}
        />

        {table && (
          <Table 
              fields={table.fields}
              values={table.values}
              subject={'students'}
              popUpFn={this.handleOpenModal}
          />
        )}

      </div>
    )
  }
}
