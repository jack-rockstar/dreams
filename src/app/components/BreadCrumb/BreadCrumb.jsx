import Link from 'next/link'

const ArrowRightIcon = () => {
  return <svg aria-hidden='true' className='w-6 h-6 mr-2 text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z' clipRule='evenodd' /></svg>
}

const HomeIcon = () => {
  return <svg aria-hidden='true' className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' /></svg>
}

export default function BreadCrumb() {
  // const { 0: path } = useLocation()
  // const pathsName = path.split('/').filter(path => path !== '')
  return (
    <nav className='flex justify-end pb-4 mb-10 mr-4 border-b-2 border-gray-700'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        <li className='inline-flex items-center'>
          <Link href='/' className='inline-flex items-center text-sm font-medium text-gray-400 hover:text-white'>
            <HomeIcon />
            Inicio
          </Link>
        </li>
        {/* {
          pathsName.map((e, index) => {
            const capitalizePath = `${e.charAt(0).toUpperCase()}${e.slice(1)}`
            return (
              <li key={index} className='inline-flex items-center ml-2'>
                <Link href={`/${e}`} className='inline-flex items-center mr-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'>
                  <ArrowRightIcon />
                  {capitalizePath}
                </Link>
              </li>
            )
          })
        } */}
      </ol>
    </nav>
  )
}
