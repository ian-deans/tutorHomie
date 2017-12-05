import Students from '../../db/models/Students'
import {_api, _respond} from './utils'

export default {
  add: async (request, response) => {
    console.log(request.body)
    _respond(response, await _api(() =>
      Students.add(request.body)))
  },

  findAll: async (request, response) => {
    _respond(response, await _api(Students.findAll))
  },

  findOne: async (request, response) => {
    _respond(response, await _api(() =>
      Students.findOne(request.params.id)))
  },

  update: async (request, response) => {
    const {id, newValues} = request.body
    _respond(response, await _api(() =>
      Students.update(id, newValues)))
  },

  delete: async (request, response) => {
    _respond(response, await _api(() =>
      Students.delete(request.body.id)))
  },
}