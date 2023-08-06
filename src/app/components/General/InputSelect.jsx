import Input from './Input'
import Select from './Select'

export default function InputSelect({ handleChange, placeholder, name, options }) {
  return (
    <div className='flex'>
      <Select
        className='rounded-l-lg focus:ring-0'
        required
        name='typeDoc'
        options={options}
        onChange={e => handleChange(e)}
      />
      <div className='relative w-full'>
        <Input placeholder={placeholder} required onChange={e => handleChange(e)} className='text-white bg-gray-600 rounded-r-lg grow focus:outline-none focus:ring-0' name={name} />

      </div>
    </div>
  )
}
