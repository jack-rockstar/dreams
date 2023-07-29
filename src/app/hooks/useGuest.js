'use client'

import { getHuespedByDocument } from '@Service/hotelClient'
import { useState } from 'react'

export default function useGuest() {
  const [guest, setGuest] = useState({ data: null, status: false, message: null })
  const [loading, setLoading] = useState(false)

  const getGuestByDocument = async ({ typeDoc, numberDoc }) => {
    setLoading(true)
    const responseClient = await getHuespedByDocument({ typeDoc, numberDoc })
    setLoading(false)
    if (!responseClient) return setGuest({ status: false, data: null, message: 'No se encontro usuario con ese documento' })

    return setGuest({ status: true, data: responseClient.data, message: 'Cliente encontrado correctamente' })
  }

  return {
    guest,
    getGuestByDocument,
    loading
  }
}
