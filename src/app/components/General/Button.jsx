import React from 'react'

export const Button = ({ handleClick, ...props }) => {
  return (
    <button onClick={handleClick} className='inline-flex items-center text-white font-medium rounded-lg text-sm px-3 py-2  focus:scale-105 hover:scale-105  transition-all border-2 ' {...props} type='button'>
      Filtrar por tipo
      <svg className='w-3 h-3 ml-2' aria-hidden='true' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' /></svg>
    </button>
  )
}
