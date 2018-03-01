// import Students from '../../db/models/Students'
// import {_api, _respond} from './utils'

// export default {
//   add: async (request, response) => {
//     _respond(response, await _api(() =>
//       Students.add(request.body)))
//   },

//   findAll: async (request, response) => {
//     _respond(response, await _api(Students.findAll))
//   },

//   findOne: async (request, response) => {
//     _respond(response, await _api(() =>
//       Students.findOne(request.params.id)))
//   },

//   update: async (request, response) => {
//     const newValues = request.body
//     _respond(response, await _api(() =>
//       Students.update(request.params.id, request.body)))
//   },

//   delete: async (request, response) => {
//     _respond(response, await _api(() =>
//       Students.delete(request.body.id)))
//   },
// }