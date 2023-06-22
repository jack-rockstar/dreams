import RoomTypeForm from '@/Forms/RoomTypeForm'
import Card from '@/Layout/Card'
import Table from '@/Table/Table'
import { getRoomsType } from '@Service/hotel'

export default async function RoomType() {
  const roomsType = await getRoomsType()
  return (
    <Card className='text-white bg-principal'>
      <div className=''>
        <RoomTypeForm />
        <Table roomsType={roomsType.status ? roomsType.data : []} />
      </div>
    </Card>
  )
}
