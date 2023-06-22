'use client'
import CloseIcon from '@/Icons/CloseIcon'
import useToggle from '@/useToggle'

export default function RoomTypeForm() {
  const [isToggleOn, handleToggle] = useToggle()

  return (
    <div className='relative flex m-3'>
      <button onClick={handleToggle} className='inline-flex items-center px-6 py-2 mb-3 text-sm font-medium text-white transition-all rounded-lg focus:scale-105 hover:scale-105 bg-gradient-to-r from-blue-500 to-blue-600' type='button'>
        Nuevo Registro
      </button>
      {
        isToggleOn && (
          <div aria-hidden='true' className='absolute z-10 w-full p-4 md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center content-center'>

            <div className='relative w-auto min-h-screen'>
              <div className='relative flex w-[600px] rounded-lg shadow -top-24 bg-gray-700'>
                <button onClick={handleToggle} type='button' className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white' data-modal-hide='authentication-modal'>
                  <CloseIcon />
                </button>
                <div className='w-full px-6 py-6 lg:px-8'>
                  <h3 className='mb-6 text-xl font-medium text-gray-900 dark:text-white'>CREAR TIPO HABITACION</h3>
                  <form className='space-y-6' action='#'>
                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <label htmlFor='email-address-icon' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Tipo Habitacion</label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' /><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' /></svg>
                          </div>
                          <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@flowbite.com' />
                        </div>
                      </div>
                      <div>
                        <label htmlFor='email-address-icon' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Descripcion</label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                            <svg aria-hidden='true' className='w-5 h-5 text-gray-500 dark:text-gray-400' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' /><path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' /></svg>
                          </div>
                          <input type='text' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='name@flowbite.com' />
                        </div>
                      </div>

                    </div>
                    <div className='flex'>
                      <div className='z-10 flex bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600'>
                        <ul className='p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200'>
                          <li>
                            <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                              <div className='flex items-center h-5'>
                                <input id='helper-radio-4' name='helper-radio' type='radio' value='' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
                              </div>
                              <div className='ml-2 text-sm'>
                                <label for='helper-radio-4' className='font-medium text-gray-900 dark:text-gray-300'>
                                  <div>Individual</div>
                                  <p id='helper-radio-text-4' className='text-xs font-normal text-gray-500 dark:text-gray-300'>Some helpful instruction goes over here.</p>
                                </label>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                              <div className='flex items-center h-5'>
                                <input id='helper-radio-5' name='helper-radio' type='radio' value='' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
                              </div>
                              <div className='ml-2 text-sm'>
                                <label for='helper-radio-5' className='font-medium text-gray-900 dark:text-gray-300'>
                                  <div>Company</div>
                                  <p id='helper-radio-text-5' className='text-xs font-normal text-gray-500 dark:text-gray-300'>Some helpful instruction goes over here.</p>
                                </label>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600'>
                              <div className='flex items-center h-5'>
                                <input id='helper-radio-6' name='helper-radio' type='radio' value='' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
                              </div>
                              <div className='ml-2 text-sm'>
                                <label for='helper-radio-6' className='font-medium text-gray-900 dark:text-gray-300'>
                                  <div>Non profit</div>
                                  <p id='helper-radio-text-6' class='text-xs font-normal text-gray-500 dark:text-gray-300'>Some helpful instruction goes over here.</p>
                                </label>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                    </div>
                    <div className='flex'>
                      <button type='submit' className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>REGISTRAR</button>

                    </div>
                  </form>

                </div>

              </div>
            </div>
          </div>
        )

      }

    </div>
  )
}
