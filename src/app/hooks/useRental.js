'use client'

import { addApiRental } from '@Service/hotelClient'
import { useState } from 'react'
import useUser from './useUser'

export default function useRental() {
  const [guest, setGuest] = useState({ data: null, status: false, message: null })
  const [loading, setLoading] = useState(false)
  const { dataUser } = useUser()
  const user = JSON.parse(dataUser)

  const addRental = async ({ request }) => {
    setLoading(true)
    const data = {
      ...request,
      userId: user.id
    }
    console.log({ data })
    const responseClient = await addApiRental(data)
    setLoading(false)
    if (!responseClient) return setGuest({ status: false, data: null, message: 'Error al guardar el cliente' })

    return setGuest({ status: true, data: '', message: 'Se guardo el cliente exitosamente' })
  }

  return {
    guest,
    addRental,
    loading
  }
}
