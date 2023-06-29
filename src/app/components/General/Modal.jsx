'use client'
import ButtonIcon from './ButtonIcon'
import Portal from './Portal'
import { RiCloseLine } from 'react-icons/ri'

export default function Modal({ children, width = 750, isOpen, closeModal }) {
  return (
    <Portal>
      <div className={`${!isOpen ? 'hidden' : 'fixed grid justify-center items-center bottom-0 top-0 py-4 left-0 bg-black/80 right-0 z-50 w-full p-4 overflow-auto md:inset-0 min-h-screen '}`}>
        <div className='relative w-full'>
          <div className={`relative bg-gray-800 rounded-lg shadow w-[${String(width)}px] my-8`}>
            <ButtonIcon type='button' onClick={() => closeModal()}>
              <RiCloseLine className='w-5 h-5' />
            </ButtonIcon>
            <div className='px-6 py-6 overflow-auto lg:px-8'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}
