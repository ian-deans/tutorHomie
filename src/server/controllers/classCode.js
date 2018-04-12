import ClassCode from '../../db/models/ClassCode'

let _currentResponse

export default {
  add: (request, response) => {
    _currentResponse = response
    const {code, value} = request.body

    if (code && value) {
      const newClassCode = new ClassCode({
        code: code,
        value: value
      })
      newClassCode.save((error, doc) => {
        if (error) {
          _dbError(error)
        }
        _successfulResponse(doc)
      })
    } else {
      _badRequestError()
    }
  },

  getAll: async (request, response) => {
    _currentResponse = response
    ClassCode.find().sort({code: 'ascending'})
      .then(_successfulResponse)
      .catch(_dbError)
  },

  getByCode: (request, response) => {
    _currentResponse = response
    ClassCode.findOne({code: request.params.code})
      .then(_successfulResponse)
      .catch(_dbError)
  },

  update: (request, response) => {
    _currentResponse = response
    ClassCode.findOne({code: request.params.code})
      .then( classCode => {
        ClassCode.findByIdAndUpdate(
          classCode._id,
          request.body,
          {new: true}
        )
          .then(_successfulResponse)
          .catch(_dbError)
      })
  },

  delete: (request, response) => {
    _currentResponse = response
    ClassCode
      .findOne({
        code: request.params.code
      })
      .remove()
      .then(
        _successfulResponse({
          message: 'Code successfully deleted from database.'
        })
      )
      .catch(_dbError)

  }

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