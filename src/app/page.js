import FiltersButton from '@/General/FiltersButton'
import Card from '@/Layout/Card'
import ListRooms from '@/ListRooms/ListRooms'
import RoomSkeleton from '@/Room/RoomSkeleton'
import { Suspense } from 'react'

export const metadata = {
  title: 'Habitaciones | Dreams Room',
  description: 'Dreams Room'
}

export default async function Home() {
  return (
    <Card className='text-white bg-principal'>
      <section>
        <FiltersButton />
      </section>
      <Suspense fallback={<RoomSkeleton skeletonLength={4} />}>
        <ListRooms />
      </Suspense>
    </Card>
  )
}
