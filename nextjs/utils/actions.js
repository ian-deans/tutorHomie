export default {
  //TODO: rename function to imply detailed view selection
  handleOpenModal: function(id) {
    let state = Object.assign({}, this.state)
    state.modal.show = true
    state.data.students.map(student => {
      if (student.name === id) {
        state.modal.data = student
      }
    })
    this.setState(state)
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
}