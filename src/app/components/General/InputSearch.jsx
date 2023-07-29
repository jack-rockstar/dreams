import { RiSearchLine } from 'react-icons/ri'
import Input from './Input'
import Select from './Select'
import { ImSpinner8 } from 'react-icons/im'

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

export default function InputSearch({ setValue, placeholder, searchButton, loading }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    setValue(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className='flex'>
      <Select
        className='rounded-l-lg focus:ring-0'
        required
        name='typeDoc'
        options={TIPO_DOCS}
        onChange={e => handleChange(e)}
      />
      <div className='relative w-full'>
        <Input placeholder={placeholder} required onChange={e => handleChange(e)} className='text-white bg-gray-600 rounded-r-lg grow focus:outline-none focus:ring-0' name='numberDoc' />
        <button type='button' onClick={searchButton} className='absolute top-0 right-0 p-3 text-sm font-medium text-white bg-blue-600 border border-blue-700 rounded-r-lg hover:bg-blue-700'>
          {
            loading
              ? <ImSpinner8 className='text-white animate-spin' />
              : <RiSearchLine />
          }
        </button>
      </div>
    </div>

  )
}
