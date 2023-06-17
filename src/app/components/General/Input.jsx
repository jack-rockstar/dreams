export default function Input({ label, htmlFor, ...props }) {
  return (
    <>
      <label htmlFor={htmlFor} className='block mb-2 text-base font-bold text-gray-900 '>{label}</label>
      <input {...props} className='bg-gray-50  border-2 border-gray-300 text-gray-900 text-sm focus:ring-1 focus:outline-none focus:ring-gray-400 rounded-lg block w-full p-2.5' />
    </>
  )
}
