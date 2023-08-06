export default function Container({ children }) {
  return (

    <main className='h-[871px] min-h-screen bg-principal sm:ml-64 custom-scrollbar-dark '>
      <section className='h-full min-h-screen pt-20'>
        {children}
      </section>
    </main>
  )
}
