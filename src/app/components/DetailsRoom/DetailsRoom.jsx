export default function DetailsRoom({ room }) {
  return (
    <article className='grid items-center justify-center w-full h-20 grid-cols-3 py-4 mb-4 bg-gray-700 rounded-lg'>
      <div>
        <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Nro Habitacion: </span>
          <b className='text-gray-950 text-md'>{room?.numberRoom}</b>
        </section>
        <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Precio Total: </span>
          <b className='text-gray-950 text-md'>${room?.priceRoom}</b>
        </section>
      </div>
      <div>
        {
          room?.roomType.roomFeatures.slice(0, 2).map((e) => (
            <section key={e.id} className='flex gap-4 px-3'>
              <span className='text-gray-200 text-md'>{e.featureName}: </span>
              <b className='text-gray-950 text-md'>{e.featuresValue}</b>
            </section>
          ))
        }
        {/* <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Habitacitones: </span>
          <b className='text-gray-950 text-md'>2</b>
        </section>
        <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Precio Total: </span>
          <b className='text-gray-950 text-md'>$1245.00</b>
        </section> */}
      </div>

      <div>
        {
          room.roomType.roomFeatures.slice(2, 4).map((e) => (
            <section key={e.id} className='flex gap-4 px-3'>
              <span className='text-gray-200 text-md'>{e.featureName}: </span>
              <b className='text-gray-950 text-md'>{e.featuresValue}</b>
            </section>
          ))
        }
        {/* <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Habitacitones: </span>
          <b className='text-gray-950 text-md'>2</b>
        </section>
        <section className='flex gap-4 px-3'>
          <span className='text-gray-200 text-md'>Precio Total: </span>
          <b className='text-gray-950 text-md'>$1245.00</b>
        </section> */}
      </div>
    </article>
  )
}
