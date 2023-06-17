'use client'
import { getCookie } from '@/cookie'
import { createContext, useState } from 'react'

export const LoginContext = createContext({})

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(
    () => getCookie('accessToken')
    // window.localStorage.getItem('jwt-token')
  )

  return (
    <LoginContext.Provider value={{
      token, setToken
    }}
    >
      {children}
    </LoginContext.Provider>
  )
}
