'use client'
import Sidebar from '@/Sidebar/Sidebar'
import Container from '@/Layout/Container'
import BreadCrumb from '@/BreadCrumb/BreadCrumb'
import useUser from '@/useUser'

export default function AuthProvider({ children }) {
  const { dataUser } = useUser()
  const user = dataUser ? JSON.parse(dataUser) : null

  return (
    <>
      {
        user
          ? (
            <>
              <Sidebar />
              <Container>
                <BreadCrumb />
                {children}
              </Container>
            </>)
          : children
      }
    </>
  )
}
