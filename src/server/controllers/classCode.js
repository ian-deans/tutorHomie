import ClassCode from '../../db/models/ClassCode'
import {_api, _badRequestError, _respond} from './utils'

export default {
  add: async (request, response) => {
    const {code, value} = request.body
    if (!code || !value) _badRequestError(response);

    _respond(response, await _api(() => {
      const classCode = new ClassCode({code, value})
      classCode.save((error, doc) => {
        if (error) throw error;
        return doc
      })
    }))
  },

  getAll: async (request, response) => {
    _respond(response, await _api(() => 
      ClassCode.find().sort({code: 'ascending'})
    ))
  },

  getByCode: async (request, response) => {
    _respond(response, await _api(() => 
      ClassCode.findOne({code: request.params.code})
    ))
  },

  update: async (request, response) => {
    const classCode = await ClassCode.findOne({code: request.params.code})
    _respond(response, await _api(() => 
      ClassCode.findByIdAndUpdate(
        classCode._id,
        request.body,
        {new: true}
      )
    ))
  },

  delete: async (request, response) => {
    _respond(response, await _api(() => {
      ClassCode.findOne({
        code: request.params.code
      })
      .remove()
    }))
  }
}
