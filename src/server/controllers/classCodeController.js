import ClassCodes from '../../db/models/ClassCodes'

export default {
  
  add: async (request, response) => {
    const _classcode = await ClassCodes.add(request.body)
    response
      .status(200)
      .json({
        status: 'success', 
        data: _classcode, 
        message: 'Added new class code.'
      })
  },

  getAll: async (request, response) => {
    const _classcodes = await ClassCodes.findAll()
    response
      .status(200)
      .json({
        status: 'success',
        data: _classcodes,
        message: 'Retrieved all class codes.'
      })
  },

  getByCode: async (request, response) => {
    const _classcode = await ClassCodes.findByCode(request.params.code)
    response
      .status(200)
      .json({
        status: 'succes',
        data: _classcode,
        message: `Retrieved class code ${request.params.code}.`
      })
  },

  update: async (request, response) => {
    
  }



}