import Student from '../../db/models/Student'
import {_api, _respond} from './utils'

export default {
  add: async (request, response) => {
    _respond(response, await _api(() => {
      const student = new Student(request.body)
      student.save((error, doc) => {
        if (error) throw error;
        return doc
      })
    }))
  },

  getAll: async (request, response) => {
    _respond(response, await _api(() => 
      Student.find().sort({name: 'ascending'})
    ))
  },

  findById: async (request, response) => {
    _respond(response, await _api(()=>
      Student.findById(request.params.id)
    ))
  },

  findByName: async (request, response) => {
    _respond(respond, await _api(() => 
      Student.find({name: request.params.name})
    ))
  },

  findByEmail: async (request, response) => {
    _respond(response, await _api(() => 
      Student.find({email: request.params.email})
    ))
  },

  update: async (request, response) => {
    _respond(response, await _api(() => 
      Student.findByIdAndUpdate(
        request.params.id,
        request.body,
        {new: true}
      )
    ))
  },

  delete: async (request, response) => {
    _respond(response, await _api(() => 
      Student.findOneAndRemove({id: request.params.id})
    ))
  },
}
