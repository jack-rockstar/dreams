import CheckIcon from '../Icons/CheckIcon'

export default function Room({ characters }) {
  return (
    <>
      {
          characters.map(({ roomType, numberRoom, id, priceRoom }) => {
            const { roomTypeName, features } = roomType
            return (
              <div key={id} className='flex flex-col justify-between w-full max-w-sm p-4 rounded-lg shadow-lg h-96 sm:p-8 dark:bg-gray-800 gap-y-2'>
                <div className='flex flex-col items-start'>
                  <h5 className='mb-2 text-lg font-medium text-gray-500 dark:text-gray-400'>Habitacion {numberRoom} - {roomTypeName}</h5>
                  <div className='flex items-baseline text-gray-900 dark:text-white'>
                    <span className='text-2xl font-semibold'>$</span>
                    <span className='text-4xl font-extrabold tracking-tight'>{priceRoom}</span>
                    <span className='ml-1 text-lg font-normal text-gray-500 dark:text-gray-400'>/dia</span>
                  </div>
                </div>
                <div className=''>
                  <ul role='list' className='my-4 space-y-2'>
                    {
                  features.map((e, index) => (
                    <li key={index} className='flex space-x-3'>
                      <CheckIcon color='text-blue-600' />
                      <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>{e}</span>
                    </li>
                  ))
                }
                  </ul>
                </div>
                <div className=''>
                  <button type='button' className='text-white  bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center'>Reservar</button>
                </div>

              </div>
            )
          })
        }
    </>

  )
}
