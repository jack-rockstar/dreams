import Link from "next/link";

export default function LogoPrincipal({ titleLogo }) {
  return (
    <>
      <Link href='/' className='flex ml-2 md:mr-24 '>
        {/* <img src='https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/304848847_515550487238040_9167179364383418216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHig9oNgvlcFfvBObdM0G2PbyKstR83qYtvIqy1Hzepi-yNO5_bBLv-ogSdY8L4WVKM08ccTVlME1GXQVkivzWc&_nc_ohc=iO4oIGeLwfkAX9Eh1Wj&_nc_ht=scontent-lim1-1.xx&oh=00_AfB_BTp0Eadq-yXoHegNDVyKeAtI83a2E4pMX3l25Ev52g&oe=6455F6A0' className='h-12 mr-3 bg-white' alt='Hotel Logo' /> */}
        <span className='self-center ml-2 text-xl font-extrabold cursor-pointer sm:text-2xl whitespace-nowrap dark:text-white'>{titleLogo}</span>
      </Link>
    </>
  )
}
