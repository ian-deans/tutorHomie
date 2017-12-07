export const buildTableData = (subject, data, sortKey) =>
  ({subject, data, sortKey})

export const apiFetch = async target => {
    const res = await fetch(`http://${document.domain}:4040/${target}`)
    const result = await res.json()
    if (result.message) {
      throw new Error(result.message)
    }
    return result.data
  }