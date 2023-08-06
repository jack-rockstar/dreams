'use client'
import { LoginContext } from '@/ContextUser'
import { deleteCookie, setCookie } from '@/cookie'
import { loginUser } from '@Service/hotelClient'
import { useRouter } from 'next/navigation'
import { useCallback, useContext, useState } from 'react'

export default function useUser() {
  const router = useRouter()
  const { dataUser, setDataUser } = useContext(LoginContext)

  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setState({ loading: true, error: false })
    loginUser({ username, password })
      .then((data) => {
        setCookie({ cname: 'accessToken', cvalue: data.accessToken, cTimeMinutes: 60 })
        setCookie({ cname: 'user', cvalue: JSON.stringify({ ...data.user, accessToken: data.accessToken }) })
        setDataUser(JSON.stringify(data.user))
        setState({ loading: false, error: false })
        router.push('/')
      })
      .catch(err => {
        deleteCookie('accessToken')
        deleteCookie('user')
        setState({ loading: false, error: true })
        router.push('/login')
        console.log(err)
      })
  }, [])

  const logout = useCallback(() => {
    deleteCookie('accessToken')
    deleteCookie('user')
    setDataUser(null)
    router.push('/login')
  }, [])

  return {
    login,
    isLoading: state.loading,
    isError: state.error,
    dataUser,
    logout
  }
}
