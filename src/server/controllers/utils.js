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

export const _respond = (response, result) => 
  response
    .status(result.status)
    .json(result)