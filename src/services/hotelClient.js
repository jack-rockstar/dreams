import { URL_BASE } from './config'

export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${URL_BASE}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (!response.ok) {
      throw data
    }
    return data
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const getHuespedByDocument = async ({ typeDoc, numberDoc }) => {
  try {
    const response = await fetch(`/api/hotel/guest?typeDoc=${typeDoc}&numberDoc=${numberDoc}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    if (!response.ok) throw data
    return { status: response.ok, data }
  } catch (error) {
    console.log(error)
    return { status: false, data: error }
  }
}

export const getRental = async () => {
  try {
    const response = await fetch('/api/hotel/rental', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const addApiRental = async (request) => {
  try {
    const response = await fetch('/api/hotel/rental', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })

    const data = await response.json()
    if (!response.ok) throw data
    return { status: response.ok, data }
  } catch (error) {
    console.log(error)
    return { status: false, data: error }
  }
}
export const addApiGuest = async (request) => {
  try {
    const response = await fetch('/api/hotel/guest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
    })

    const data = await response.json()
    if (!response.ok) throw data
    return { status: response.ok, data }
  } catch (error) {
    console.log(error)
    return { status: false, data: error }
  }
}
