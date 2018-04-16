export {default as actions} from './actions'

export const buildTableData = (data) => {
  let fields = Object.keys(data[0])
    .filter(field => field != '_id' && field != 'tutor')
    
  let values = data.map(item => 
    fields.map(field => item[field]
    )
  )
  return ({fields, values})
}

export const types = {
  STUDENTS: 'students',
  CLASSCODES: 'classcodes',
  SESSIONS: 'sessions',
}
