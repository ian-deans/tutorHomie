import SessionStatus from '../../db/models/SessionStatus'
import {_api, _respond} from './utils'

export default {
  findAll: async (request, response) => {
    _respond(response, await _api(SessionStatus.findAll))
  }
}