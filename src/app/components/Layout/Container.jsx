export default function Container({ children }) {
  return (

    <main className='h-screen bg-principal sm:ml-64'>
      <section className='h-full min-h-screen pt-20'>
        {children}
      </section>
    </main>
  )
}
