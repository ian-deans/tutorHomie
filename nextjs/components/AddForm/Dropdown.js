import React from 'react'
import {types} from '../../utils'

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      types: Object.keys(types),
    }
    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  renderMenu() {
    //NOTE: use some sort of css and css loader rather than
    //      inline styling.
    return (
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'solid black 1px',
          width: '25%',
        }}
      >
        <span>Students</span>
        <span>Class Codes</span>
        <span>Sessions</span>
      </div>
    ) 
  }
  _menuItem() {
    
  }

  renderButton() {
    return (
      <button onClick={this.openMenu}>
        {this.props.type}
      </button>
    )
  }

  handleSelect() {
    console.log('---> SELECT <---')
    this.props.selectTypeFn()
    this.closeMenu()
  }

  openMenu() {
    let newState = Object.assign({}, this.state)
    newState.show = true
    this.setState(newState)
  }
  closeMenu() {
    let newState = Object.assign({}, this.state)
    newState.show = false
    this.setState(newState)
  }



  render() {
    console.log(this.state.types)
    console.log(types)
    return (
      <div>
        {this.state.show ? this.renderMenu() : this.renderButton()}
      </div>
    )

    // return (
    //   <select onChange={() => this.onSelect(this)}>
    //     <option value={types.STUDENTS}>Student</option>
    //     <option value={types.CLASSCODES}>Class Code</option>
    //     <option value={types.SESSIONS}>Session</option>
    //   </select>
    // )
  }
}