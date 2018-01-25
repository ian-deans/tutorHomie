export const buildTableData = (data) => {
  let fields = Object.keys(data[0])
  let values = data.map(item => Object.values(item))
  return ({fields, values})
}

export const types = {
  STUDENTS: 'students',
  CLASSCODES: 'classcodes',
  SESSIONS: 'sessions',
}