import DashboardIcon from './Icons/DashboardIcon'
import FavoriteIcon from './Icons/FavoriteIcon'
import SessionIcon from './Icons/SessionIcon'
// import TarjetasIcon from './Icons/TarjetasIcon'
import Link from 'next/link'
import DropDownMenu from './DropDownMenu'
import IdentidadIcon from './Icons/IdentidadIcon'
import Navbar from './Navbar'
const menus = [
  {
    href: null,
    title: 'Habitaciones',
    icon: <FavoriteIcon />,
    subMenus: [{ name: 'Tipo Habitacion', href: '/roomtype' }, { name: 'Habitaciones', href: '/room' }],
    flag: 'Pro'
  },
  {
    href: '/guests',
    title: 'Clientes',
    icon: <DashboardIcon />,
    flag: null,
    subMenus: null

  },

  // {
  //   href: '#',
  //   title: 'Clientes',
  //   icon: <TarjetasIcon />,
  //   flag: '3',
  //   subMenus: null

  // },

  {
    href: null,
    title: 'Alquileres',
    icon: <IdentidadIcon />,
    flag: null,
    subMenus: [{ name: 'En Proceso', href: '/process' }, { name: 'Concluidos', href: '/concluded' }, { name: 'Limpieza', href: '/cleaning' }]

  },
  {
    href: '/billing',
    title: 'Facturaciones',
    icon: <IdentidadIcon />,
    flag: null,
    subMenus: null

  },
  {
    href: null,
    title: 'Seguridad y Permisos',
    icon: <SessionIcon />,
    flag: null,
    subMenus: [{ name: 'Permisos', href: '/security/permises' }, { name: 'Usuarios', href: '/users' }, { name: 'Roles', href: '/role' }]

  }

]
export default function Sidebar() {
  return (
    <>
      <Navbar />
      <aside className='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-gray-700 sm:translate-x-0 bg-principal' aria-label='Sidebar'>
        <div className='h-full px-3 pb-4 overflow-y-auto custom-scrollbar-dark bg-principal'>
          <ul className='space-y-4'>
            {
              menus.map(({ title, flag, href, icon, subMenus }, index) => {
                if (subMenus) return <DropDownMenu key={index} title={title} subMenus={subMenus} />
                return (
                  <li key={index}>
                    <Link href={href} className='flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700'>
                      {icon}
                      {flag != null
                        ? <><span className='flex-1 ml-3 whitespace-nowrap'>{title}</span><span className='inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-300 bg-gray-700 rounded-full'>{flag}</span></>
                        : <span className='ml-3'>{title}</span>}

                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </aside>
    </>
  )
}
