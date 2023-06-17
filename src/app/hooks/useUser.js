'use client'
import { LoginContext } from '@/contextUser'
import { deleteCookie, setCookie } from '@/cookie'
import { loginUser } from '../../services/hotel.service'
import { useRouter } from 'next/navigation'
import { useCallback, useContext, useState } from 'react'

export default function useUser() {
  const router = useRouter()
  const { token, setToken } = useContext(LoginContext)

  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginUser({ username, password })
      .then((data) => {
        setCookie('accessToken', data.accessToken)
        setToken(data.accessToken)
        setState({ loading: false, error: false })
        router.push('/')
      })
      .catch(err => {
        deleteCookie('accessToken')
        setState({ loading: false, error: true })
        router.push('/login')
        console.log(err)
      })
  }, [setToken])

  const logout = useCallback(() => {
    deleteCookie('accessToken')
    setToken(null)
  }, [setToken])

  return {
    login,
    isLoading: state.loading,
    isError: state.error,
    token,
    logout
  }
}
