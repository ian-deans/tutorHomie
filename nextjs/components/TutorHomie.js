import React from 'react'
import Table from './Table'
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
    }
  }

  // static async getInitialProps({req}) {
  //   let res = await fetch('http://localhost:4040/api/students')
  //   const json = await res.json()

  //   console.log(req)

  //   return { students: json }
  // }

  // setDefaultSortKey() {
  //   const {subject} = this.state.tableData
  //   switch(subject) {
  //     case "students":
  //       return "name"
  //       break;
  //   }
  // }

  async componentDidMount() {
    const res = await fetch('http://localhost:4040/students')
    const classcodes = await res.json()
    const tableData = {subject: 'classcodes', data: classcodes, sortKey: 'code'}
    await this.setState({tableData: tableData})
  }

  render() {
    return (
      <div>
        <div>
          <h1>Tutor Homie</h1>
        
        </div>
        <Table 
          tableData={this.state.tableData}
        />
      </div>
    )
  }
}
