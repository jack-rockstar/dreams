export default function Container({ children }) {
  return (

    <div className='h-screen py-4 bg-principal sm:ml-64'>
      <div className='h-full min-h-screen mt-20'>
        {children}
      </div>
    </div>
  )
}
