import { cookies } from 'next/headers'
import { URL } from './config'

export const getRooms = async ({ id = '' } = '') => {
  const accessToken = cookies().get('accessToken')

  try {
    // await new Promise(resolve => setTimeout(resolve, 10000))
    const response = await fetch(`${URL}/api/hotel/room?id=${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${accessToken.name}=${accessToken.value}`
        // Cookie: 'accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJiOWY4NTNmMy0wYTRiLTRhOTctYmNjMS1mMjNjNWFmZWQxYzciLCJpYXQiOjE2ODcxOTIyNDQsImV4cCI6MTY4NzE5NTg0NH0.jmQ_Z18NxsAtqHbppPIy13sQ32vAzNsWIsplUveD5g8'

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
  const accessToken = cookies().get('accessToken')
  try {
    const response = await fetch(`${URL}/api/hotel/roomtypes`, {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `${accessToken.name}=${accessToken.value}`
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
    // throw Error(error)
    return { status: false, data: error }
  }
}
