// import RoomTypeForm from '@/Forms/RoomTypeForm'
import Card from '@/Layout/Card'
import Table from '@/Table/Table'
import { getRoomsType } from '@Service/hotel'
// import { URL } from '@/config'
// import { cookies } from 'next/headers'
// const cookieStore = cookies()
// const accessToken = cookieStore.get('accessToken')

// export const getRoomsType = async () => {
//   try {
//     const response = await fetch(`${URL}/api/hotel/roomtypes`, {
//       headers: {
//         'Content-Type': 'application/json',
//         Cookie: `${accessToken.name}=${accessToken.value}`
//       },
//       next: {
//         revalidate: 60
//       }
//     })

//     const dataRes = await response.json()
//     console.log({ dataRes })
//     if (!response.ok) {
//       throw dataRes
//     }
//     return { status: true, data: dataRes.data }
//   } catch (error) {
//     console.log(error)
//     // throw Error(error)
//     return { status: false, data: error }
//   }
// }

export default async function RoomType() {
  const roomsType = await getRoomsType()
  return (
    <Card className='text-white bg-principal'>
      <div className=''>
        {/* <RoomTypeForm /> */}
        <Table roomsType={roomsType.status ? roomsType.data : []} />
      </div>
    </Card>
  )
}
