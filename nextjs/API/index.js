
export default {
  post: async (type, data) => {
    const url = _fetchURL(type, null)
    const options = {
      method: 'POST',
      headers: _fetchHeaders(),
      body: JSON.stringify(data)
    }
    const response = await fetch(new Request(url, options))
    return _dataOrError(response)
  },

  getAll: async type => {
    const response = await fetch(_fetchURL(type, null))
    return await _dataOrError(response)
  },

  getOne: async target => {
    const response = await fetch(_fetchURL(target.type, target.id))
    return _dataOrError(response)
  },

  update: async (target, data) => {
    const url = _fetchURL(target.type, target.id)
    const options = {
      method: 'PUT',
      headers: _fetchHeaders(),
      body: JSON.stringify(data)
    }
    const response = await fetch(new Request(url, options))
    return _dataOrError(response)
  },

  delete: async target => {
    const url = _fetchURL(target.type, target.id)
    const options = {
      method: 'DELETE',
    }
    const response = await fetch(new Request(url, options))
    return _dataOrError(response)
  },
}


const _fetchHeaders = () => 
  new Headers({'Content-Type': 'application/json'})

const _fetchURL = (type, id) => {
  let url = `http://${document.domain}:4000/${type}`
  if (id) {
    url += `/${id}`
  }
  return url
}

const _dataOrError = async response => {
  const result = await response.json()
  if (result.message) {
    throw new Error(result.message)
  }
  return result.data
}
