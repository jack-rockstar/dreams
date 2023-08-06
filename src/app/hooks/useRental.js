'use client'

import { addApiRental } from '@Service/hotelClient'
import { useState } from 'react'
import useGuest from './useGuest'
import useUser from './useUser'

export default function useRental() {
  const [guest] = useState({ data: null, status: false, message: null })
  const [loading, setLoading] = useState(false)
  const { addGuest } = useGuest()
  const { dataUser } = useUser()
  const user = JSON.parse(dataUser)

  const addRental = async ({ request }) => {
    setLoading(true)
    const data = {
      ...request,
      userId: user.id
    }

    const { guestId } = data
    if (!guestId) {
      const { data: responseGuest } = await addGuest(data)
      const requestRental = {
        ...data,
        guestId: responseGuest.data.id
      }

      const { status: statusRental, data: dataRental } = await addApiRental(requestRental)
      if (!statusRental) return { status: false, data: dataRental }

      return { status: true, data: dataRental }
    }

    // const responseRental = await Promise.all([addApiRental(), addGuest()])
    addGuest(data)
    const { status: statusRental, data: dataRental } = await addApiRental(data)
    if (!statusRental) return { status: false, data: dataRental }

    return { status: true, data: dataRental }
  }

  return {
    guest,
    addRental,
    loading
  }
}
