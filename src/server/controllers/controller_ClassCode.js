import ClassCode from '../../db/models/ClassCode'

export default {
  add: (request, response) => {
    const {code, value} = request.body
    const newClassCode = new ClassCode({
      code: code,
      value: value
    })

    newClassCode.save((error, doc) => {
      response.json(doc)
    })


  },

  getAll: (request, response) => {
    ClassCode.find()
      .then(results => {
        response.status(200).json(results)
      })
      .catch(error => console.log)
  }

}