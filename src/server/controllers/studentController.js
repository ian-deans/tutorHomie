import Students from '../../db/models/Students'

export default {
  add: async (request, response) => {
    let student 
    try {
      student = await Students.add(request.body)
      response
      .status(200)    
      .json({
        status: 'success',
        data: student,
        message: 'Added new student.'
      })
    }
    catch(error) {
      response
        .status(500)
        .json({
          status: 'failure',
          message: error
        })
    }

  },

  findOne: async (request, response) => {
    let student 
    try {
      student= await Students.findOne(request.body)
    }
    catch(error) {
      throw error
    }
    response
      .status(200)
      .json({
        status: 'success',
        data: student,
        message: 'Retrieved student.'
      })

  },
  
  findAll: async (request, response) => {
    let result, status
    try {
      console.log('TRY')
      let students = await Students.findAll()
      console.log('still TRY')
      result = {
        status: 'success', 
        data: students,
        message: 'Retrieved all students.'
      }
      status = 200
    } catch (error) {
      result = {
        status: 'failure',
        message: error
      }
      status = 500
    }
    response
      .status(status)
      .json(result)
  }
}