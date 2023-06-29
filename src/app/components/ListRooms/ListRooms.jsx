import Room from '@/Room/Room'
import { getRooms } from '@Service/hotel'

export default async function ListRooms () {
  const rooms = await getRooms()
  return (
    <div className='grid grid-cols-1 gap-4 px-4 mb-10 lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 '>
      <Room characters={rooms.data} />
    </div>

  )
}
