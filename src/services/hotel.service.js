import { URL } from './config'

// export const getSafeBox = async () => {
//   try {
//     const headers = {
//       'Content-Type': 'application/json'
//     }

//     const response = await fetch(`${URL}/safebox`, {
//       headers
//     })
//     if (!response.ok) {
//       throw Error(`Error de ${response.type}, status: ${response.status}`)
//     }

//     const data = await response.json()

//     return data
//   } catch (error) {
//     console.log(error)
//     throw Error(error)
//   }
// }

export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${URL}/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJiOWY4NTNmMy0wYTRiLTRhOTctYmNjMS1mMjNjNWFmZWQxYzciLCJpYXQiOjE2ODY5NTMyOTEsImV4cCI6MTY4Njk1Njg5MX0.i2eMQW63DAmJxxAjEre8PuEaG_EaOPB6p6ggHmgTKTc'
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

export const getRooms = async ({ id = '' } = '') => {
  try {
    await new Promise(resolve => setTimeout(resolve, 10000))
    const response = await fetch(`${URL}/api/hotel/room?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJiOWY4NTNmMy0wYTRiLTRhOTctYmNjMS1mMjNjNWFmZWQxYzciLCJpYXQiOjE2ODY5NTMyOTEsImV4cCI6MTY4Njk1Njg5MX0.i2eMQW63DAmJxxAjEre8PuEaG_EaOPB6p6ggHmgTKTc'
      },
      next: {
        revalidate: 60
      }
    })

    const dataRes = await response.json()

    if (!response.ok) {
      throw dataRes
    }
    return { status: true, data: dataRes.data }
  } catch (error) {
    console.log(error)
    return { status: false, data: error }
  }
}

export const getRoomsType = async () => {
  try {
    const response = await fetch(`${URL}/api/hotel/roomtypes`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    const data = await response.json()

    if (!response.ok) {
      throw data
    }
    return data
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}
