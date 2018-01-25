import ClassCodes from '../../db/models/ClassCodes'
import {_api, _respond} from './utils'

export default {
  add: async (request, response) => {
    _respond(response, await _api(() => 
      ClassCodes.add(request.body)))
  },

  getAll: async (request, response) => {
    _respond(response, await _api(ClassCodes.findAll))
  },

  getByCode: async (request, response) => {
    _respond(response, await _api(() => 
      ClassCodes.findByCode(request.params.id)))
  },

  update: async (request, response) => {
    const code = request.params.code
    const {newValues} = request.body
    _respond(response, await _api(() =>
      ClassCodes.update(code, newValues)))
  },

  delete: async (request, response) => {
    _respond(response, await _api(() => 
      ClassCodes.delete(request.params.code)))
  },

  clearNulls: async (request, response) =>
    _respond(response, await _api(ClassCodes.clearNulls))
}