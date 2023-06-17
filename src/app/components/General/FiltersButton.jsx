const filters = [
  {
    name: 'Todos',
    id: 'allRooms',
    status: true
  },
  {
    name: 'Matrimoniales',
    id: 'matri',
    status: false
  },
  {
    name: 'Suites',
    id: 'suites',
    status: false
  },
  {
    name: 'Dobles',
    id: 'dobuel',
    status: false
  },
  {
    name: 'Simples',
    id: 'ad',
    status: false
  }
]

const ButtonFilter = ({ name, status }) => {
  const styleButton = status ? 'text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800' : 'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800'
  return (
    <button type='button' className={styleButton}>{name}</button>
  )
}

export default function FiltersButton() {
  return (
    <div className='flex flex-wrap items-center justify-center py-4 md:py-8'>
      {
        filters.map(({ name, status, id }) => (<ButtonFilter name={name} status={status} key={id} />))
      }

    </div>
  )
}
