'use client'
import Spinner from '@/Icons/Spinner'
import Card from '@/Layout/Card'
import LockBoxIcon from '@/Logos/LockBoxIcon'
import useUser from '../hooks/useUser'
import Input from '@/General/Input'
import Label from '@/General/Label'
import Section from '@/General/Section'

export const metadata = {
  title: 'Iniciar Sesion | Dreams Room',
  description: 'Generated by create next app'
}

export default function Login() {
  const { login, isLoading } = useUser()

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    login({ username: data.username, password: data.password })
  }

  return (
    <Card className='max-h-screen min-h-screen bg-principal place-content-center'>
      <div className='relative h-full max-w-md w-96 md:h-auto'>

        <div className='mt-12 bg-white rounded-lg shadow-xl'>
          <section className='px-6 py-6 lg:px-8 '>
            <div className='absolute  -top-2 z-50   ml-[115px]'>
              <LockBoxIcon />
              <h3 className='-ml-6 text-3xl font-extrabold text-center '>LA PERLA</h3>
            </div>
            <form onSubmit={handleLogin} className='mt-20 space-y-4'>

              <Section>
                <Label label='Usuario' className='text-base font-bold text-gray-900 rounded-lg' htmlFor='username' />
                <Input className='text-gray-900 border-2 border-gray-300 bg-gray-50' required type='text' name='username' />
              </Section>
              <Section>
                <Label label='Contraseña' className='text-base font-bold text-gray-900 rounded-lg' htmlFor='password' />
                <Input className='text-gray-900 border-2 border-gray-300 bg-gray-50' required type='password' name='password' />
              </Section>
              <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300  rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  font-medium'>
                {
                  isLoading
                    ? <Spinner />
                    : 'Iniciar Sesion'
                }
              </button>
            </form>
          </section>
        </div>
      </div>
    </Card>
  )
}
