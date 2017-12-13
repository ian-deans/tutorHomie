import Sessions from '../../db/models/Sessions'
import {_api, _respond} from './utils'

export default {
  add: async (request, response) => {
    _respond(response, await _api(() =>
    Sessions.add(request.body)))
  },

  findAll: async (request, response) => {
    _respond(response, await _api(Sessions.findAll))
  },

  findOne: async (request, response) => 
    _respond(response, await _api(() =>
      Sessions.findOne(request.params.id))),

  update: async (request, response) => {
    const {id} = request.params
    return _respond(response, await _api(() =>
      Sessions.update(id, request.body)))
    },

    delete: async (request, response) =>
      _respond(response, await _api(() =>
      Sessions.delete(request.body.id)))
}