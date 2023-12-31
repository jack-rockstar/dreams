'use client'
import { useCallback, useState } from 'react'

export default function useToggle(initializeToggleValue = false) {
  const [value, setToggleValue] = useState(initializeToggleValue)
  const toggle = useCallback(() => {
    console.log({ value })
    setToggleValue(value => !value)
  }, [])

  return [value, toggle]
}
