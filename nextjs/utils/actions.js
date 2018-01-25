export default {
  //TODO: rename function to imply detailed view selection
  handleOpenModal: function(id) {
    let newState = Object.assign({}, this.state)
    newState.modal.show = true
    newState.modal.detailView = true
    newState.modal.addForm = false
    newState.focused.item = newState.data[newState.focused.subject]
      .filter(item => item.id === id)[0]

    this.setState(newState)
  },
  handleCloseModal: function() {
    let newState = Object.assign({}, this.state)
    newState.modal.show = false
    newState.modal.addForm = false
    newState.modal.detailView = false
    newState.focused.item = null
    this.setState(newState)
  },

  toggleAddForm: function() {
    let newState = Object.assign({}, this.state)
    if (newState.modal.addForm) {
      newState.modal.addForm = false
      newState.modal.detailView = false
      newState.modal.show = false
    } else {
      newState.modal.addForm = true
      newState.modal.detailView = false
      newState.modal.show = true
    }
    this.setState(newState)
  }

  /*
    if addform is true
      modal.addForm = false
      modal.detailView = false
      modal.show = false
      turn addform off

    if addform is false
      addForm = true
      detailView = false
      show = true
      turn addform on
  */

  // TODO: refactor for new state structure and to
  //       not mutate state
  
  // toggleAddForm() {
  //   let newState = Object.assign({}, this.state)
    
  //   if (newState.table.subject) {
  //     let addForm = !this.state.addForm
  //     this.setState({addForm})
  //   }
  // },
  // hideAddForm() {
  //   this.setState({addForm: false})
  // },


}