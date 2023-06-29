import { RiSearchLine } from 'react-icons/ri'
import Input from './Input'
import Select from './Select'

const TIPO_DOCS = [
  {
    label: 'DNI',
    value: 'DNI'
  },
  {
    label: 'CE',
    value: 'CE'
  },
  {
    label: 'RUC',
    value: 'RUC'
  }
]

export default function InputSearch({ placeholder }) {
  return (

    <div className='flex'>
      <Select
        className='rounded-l-lg focus:ring-0'
        required
        name='tipoDocumento'
        options={TIPO_DOCS}
      />
      <div className='relative w-full'>
        <Input placeholder={placeholder} className='text-white bg-gray-600 rounded-r-lg grow focus:outline-none focus:ring-0' name='nroDoc' />
        <button type='submit' className='absolute top-0 right-0 p-3 text-sm font-medium text-white bg-blue-600 border border-blue-700 rounded-r-lg focus:ring-4 focus:outline-none hover:bg-blue-700 focus:ring-blue-800'>
          <RiSearchLine />
        </button>
      </div>
    </div>

  )
}
