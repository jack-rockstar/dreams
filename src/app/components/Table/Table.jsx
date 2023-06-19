'use client'
import { DateTime } from 'luxon'
import { useState } from 'react'
import DropDownIcon from '../Icons/DropDownIcon'

const SearchInput = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <svg className='w-5 h-5 text-gray-500 dark:text-gray-400' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z' clipRule='evenodd' /></svg>
      </div>
      <input type='text' className='block p-2 pl-10 text-sm text-gray-900 transition-all border-2 border-blue-400 rounded-lg w-80 focus:ring-blue-500 dark:bg-principal dark:text-white focus:outline-none focus:scale-95 focus:pl-4' placeholder='Buscar Categoria' />
    </div>
  )
}

const ButtonFilter = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className='inline-flex items-center px-3 py-2 text-sm font-medium text-white transition-all border-2 border-blue-400 rounded-lg bg-principal focus:scale-105 hover:scale-105' type='button'>
      Filtrar por tipo
      {/* <svg className='w-3 h-3 ml-2' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' /></svg> */}
      <DropDownIcon className='w-5 h-5 ml-2' />
    </button>
  )
}

const FilterTable = ({ types }) => {
  const [isVisible, setIsVisible] = useState(false)
  const toggleFilter = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className='relative flex items-center justify-between pb-4 mx-3'>
      <div>
        <ButtonFilter handleClick={toggleFilter} />
        {
          isVisible && (
            <div className='absolute z-10 w-48 divide-y divide-gray-100 rounded-lg shadow shadow-purple-500 bg-principal dark:divide-gray-600 ' style={{ transform: 'translate(20px, 10px)' }}>
              <ul className='space-y-1 text-sm text-gray-700 dark:text-gray-200'>
                {
              types.map(({ roomTypeName, id }) => {
                return (
                  <li key={id} className='hover:bg-[linear-gradient(110.1deg,rgba(46,29,99,.4),#3d0f34)] transition-all cursor-pointer'>
                    <div className='flex items-center p-3 rounded cursor-pointer '>
                      <input type='radio' id={id} className='w-4 h-4 ml-2 text-blue-600 cursor-pointer focus:ring-blue-500' />
                      <label htmlFor={id} className='w-full text-sm font-medium text-gray-900 rounded cursor-pointer dark:text-gray-300'>{roomTypeName}</label>
                    </div>
                  </li>
                )
              })
            }
              </ul>
            </div>)
        }
      </div>
      <SearchInput />
    </div>
  )
}
export default function Table({ roomsType }) {
  return (

    <>
      <FilterTable types={roomsType} />
      <div className='flex content-center justify-center '>
        <div className='relative w-[98%] -ml-1 overflow-x-auto shadow  shadow-blue-400  sm:rounded-lg'>
          <table className='text-sm text-left text-white rounded-lg'>
            <thead className='text-xs text-white uppercase bg-gradient-to-r from-blue-500 to-blue-600 '>
              <tr>
                <th scope='col' className='px-6 py-3 '>
                  ID
                </th>
                <th scope='col' className='px-6 py-3'>
                  NOMBRE
                </th>
                <th scope='col' className='px-6 py-3'>
                  FECHA CREACION
                </th>
                <th scope='col' className='px-6 py-3'>
                  DESCRIPCION
                </th>
                <th scope='col' className='px-6 py-3'>
                  CARACTERISTICAS
                </th>
                <th scope='col' className='px-6 py-3'>
                  HABITACIONES
                </th>
                <th scope='col' className='px-6 py-3'>
                  ESTADO
                </th>
                <th scope='col' className='px-6 py-3'>
                  ACCIONES
                </th>
              </tr>
            </thead>
            <tbody>
              {
           roomsType.map(({ createdAt, description, features, id, roomTypeName, bedRooms }) => {
             return (
               <tr key={id} className='bg-gray-800 bg-opacity-5 dark:hover:bg-gray-800'>
                 <th scope='row' className='px-6 py-4 font-medium text-white' style={{ whiteSpace: 'break-spaces' }}>
                   {id}
                 </th>
                 <td className='px-6 py-4'>
                   {roomTypeName}
                 </td>
                 <td className='px-6 py-4'>
                   {DateTime.fromISO(createdAt).toISODate()}
                 </td>
                 <td className='px-6 py-4'>
                   {description}
                 </td>
                 <td className='px-6 py-4'>
                   {features[0]}
                 </td>
                 <td className='px-6 py-4'>
                   {bedRooms[0].numberRoom}
                 </td>
                 <td className='px-6 py-4'>
                   1
                 </td>
                 <td className='px-6 py-4'>
                   <a href='#' className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>Edit</a>
                 </td>
               </tr>
             )
           })
          }
            </tbody>
          </table>
        </div>
      </div>

    </>

  )
}
