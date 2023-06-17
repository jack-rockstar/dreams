'use client'
import DropDown from '@/Icons/DropDown'
import DropDownIcon from '@/Icons/DropDownIcon'
import LogoPrincipal from '@/Logos/LogoPrincipal'
import useUser from '@/useUser'
import { useState } from 'react'

const menus = [
  {
    href: '#',
    title: 'Dashboard'

  },
  {
    href: '#',
    title: 'Configuracion'
  },
  {
    href: '#',
    title: 'Exportar'

  }
]

export default function Navbar() {
  const [isOpenDrop, setIsOpenDrop] = useState(false)
  const { logout } = useUser()

  const toggleDropDown = () => {
    setIsOpenDrop(!isOpenDrop)
  }
  return (
    <nav className='fixed top-0 z-50 w-full bg-principal'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button aria-controls='logo-sidebar' type='button' className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 dark:text-gray-400 hover:bg-gray-700 focus:ring-gray-600'>
              <span className='sr-only'>Open sidebar</span>
              <DropDown style='w-6 h-6' />
            </button>
            <LogoPrincipal titleLogo='La Perla' />
          </div>
          <div className='flex items-center'>
            <div className='flex items-center ml-3'>
              <div className='mx-3 '>
                <button className='flex items-center mt-2 text-sm font-medium text-white transition-all rounded-full hover:opacity-80 md:mr-0 focus:ring-4' onClick={toggleDropDown} type='button'>
                  <img className='w-8 h-8 mr-2 rounded-full' src='https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-1/163977261_2853554138250799_1658449074359390087_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHSFuM784qqCeoWNQdv73I0WuYCkHsxALda5gKQezEAt95mhcatn_VcllgSRwogC7CM9XGT81yj1md3_HNbDAMe&_nc_ohc=iyDiR3C-zhUAX9ojgbo&_nc_ht=scontent-lim1-1.xx&oh=00_AfCmLMcwgDrSfp52SckDS_IzeGCjNR0TnqayV9ltT5TQYw&oe=64B480DC' alt='user photo' />
                  <span className='mr-2 font-extrabold'>Jack Najarro</span>
                  <DropDownIcon />
                </button>
              </div>
              {isOpenDrop && (
                <div className='z-10 absolute top-[60px]  divide-y  rounded-lg shadow w-44 bg-gray-700 divide-gray-600'>
                  <div className='px-4 py-3 text-sm text-white'>
                    <div className='font-medium '>Perfil</div>
                    <div className=''>jacknajarro1@gmail.com</div>
                  </div>
                  <ul className='py-2 text-sm text-gray-200'>
                    {
                      menus.map(({ href, title }, index) => {
                        return (
                          <li key={index}>
                            <a href={href} className='block px-4 py-2 hover:bg-gray-600 hover:text-white'>{title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                  <div className='py-2'>
                    <button onClick={logout} className='block px-4 py-2 text-sm text-gray-200 hover:text-white'>Salir</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}
