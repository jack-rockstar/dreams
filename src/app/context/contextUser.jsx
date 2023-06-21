'use client'
import { getCookie } from '@/cookie'
import { createContext, useState } from 'react'

export const LoginContext = createContext({})

export function UserContextProvider({ children }) {
  const [dataUser, setDataUser] = useState(() => getCookie('user'))

  return (
    <LoginContext.Provider value={{
      dataUser, setDataUser
    }}
    >
      {children}
    </LoginContext.Provider>
  )
}
