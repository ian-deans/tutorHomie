import Student from '../../db/models/Student'

let _currentResponse

export default {
  add: async (request, response) => {
    _currentResponse = response
    const newStudent = new Student(request.body)
    newStudent.save((error, doc) => {
      if (error) {
        _dbError(error)
      }
      _successfulResponse(doc)
    })
  },

  getAll: async (request, response) => {
    _currentResponse = response
    try {
      const students = await Student.find().sort({name: 'ascending'})
      _successfulResponse(students)  
    } catch (error) {
      _dbError(error)
    }
    //.then(_successfulResponse)
      //.catch(_dbError)
  },

  findById: async (request, response) => {
    _currentResponse = response
    try {
      const students = await Student.findById(request.params.id)
      _successfulResponse(students)
    } catch (error) {
      _dbError(error)
    }
  },

  findByName: async (request, response) => {
    _currentResponse = response
    try {
      const student =  await Student.find({name: request.params.name})
      _successfulResponse(student)
    } catch(error) {
      _dbError(error)
    }
  },

  findByEmail: async (request, response) => {
    _currentResponse = response
    try {
      const student =  await Student.find({email: request.params.email})
      _successfulResponse(student)
    } catch(error) {
      _dbError(error)
    }
  },

  update: async (request, response) => {
    _currentResponse = response
    try {
      const updatedStudent = await Student.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}
      )
      _successfulResponse(updatedStudent)
    } catch(error) {
      _dbError(error)
    }

    response.status(200).json(updatedStudent)
  },

  delete: async (request, response) => {
    try {
      await Student
        .findOne({
          id: request.params.id
        })
      _successfulResponse({message: 'Student deleted.'})
    } catch(error) {
      _dbError(error)
    }
  },
}


const _successfulResponse = result =>
  _currentResponse
    .status(200)
    .json(result) 

const _dbError = error => 
  _currentResponse
    .status(500)
    .json({
      message: 'Database error.',
      error: error,
    })

const _badRequestError = () =>
  _currentResponse
    .status(400)
    .json({
      message: 'Invalid request options received from client.'      
    })