import { URL } from './config'

export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${URL}/login`, {
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
