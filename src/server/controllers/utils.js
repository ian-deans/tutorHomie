export const _api = async apiFn => {
  let result = {}
  try {
    result.data = await apiFn()
    result.status = 200
  }
  catch(error) {
    result.message = error.message
    result.status = 500
  }
  return result
}

export const _respond = (response, result) => {
  if (result.message) {
    throw new Error(result.message || 'Internal Error')
  }
  response
    .status(result.status)
    .json(result)
}

export const _badRequestError = response =>
  response
    .status(400)
    .json({
      message: 'Invalid request options received from client.'      
    })