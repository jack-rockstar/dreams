'use client'

import { addApiGuest, getHuespedByDocument } from '@Service/hotelClient'
import { useState } from 'react'

export default function useGuest() {
  const [guest] = useState({ data: null, status: false, message: null })
  const [loading, setLoading] = useState(false)

  const getGuestByDocument = async ({ typeDoc, numberDoc }) => {
    setLoading(true)
    const { status, data } = await getHuespedByDocument({ typeDoc, numberDoc })
    setLoading(false)
    if (!status) return { status: false, data }

    return { status: true, data }
  }

  const addGuest = async (request) => {
    const { status, data } = await addApiGuest(request)
    if (!status) return { status: false, data }

    return { status: true, data }
  }

  return {
    guest,
    getGuestByDocument,
    addGuest,
    loading
  }
}
