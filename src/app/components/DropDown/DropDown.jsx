import { useState } from 'react'
import DropDownIcon from '../Icons/DropDownIcon'

export default function DropDown({ options, setDrop }) {
  const [toggle, setToggle] = useState(false)

  const toggleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <button onClick={toggleClick} className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600' type='button'>
        <DropDownIcon style='w-4 h-4' />
      </button>

      {toggle && (
        <div className='z-10 absolute right-6 mt-3   bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
          <ul className='py-2 text-sm text-gray-700 text-center   dark:text-gray-200'>
            {
            options.map((opt, index) => (
              <li key={index}>
                <a href='#' onClick={opt.handleClick} className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>{opt.name}</a>
              </li>
            ))
          }

          </ul>
          {/* <div className='py-2'>
          <a href='#' className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>Separated link</a>
        </div> */}
        </div>
      )}
    </>
  )
}
