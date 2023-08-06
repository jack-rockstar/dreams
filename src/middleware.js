import { URL_BASE } from '@Service/config'
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/roomtype', '/api/:path*']
}
export async function middleware(request) {
  const existsToken = request.cookies.has('accessToken')
  const existsUser = request.cookies.has('user')
  const { pathname } = request.nextUrl ?? ''

  console.log({ existsUser, existsToken })
  if (pathname.startsWith('/api/') && !existsToken && existsUser) {
    console.log('Nuevo token')
    const user = JSON.parse(request.cookies.get('user').value)
    const responseRefresh = await fetch(`${URL_BASE}/refresh`, {
      headers: {
        'Content-Type': 'application/json',
        Cookie: `accessToken=${user.accessToken}`
      }
    })
    const refreshData = await responseRefresh.json()
    const oneHour = 60 * 1000
    const expiration = Date.now() + oneHour
    const response = NextResponse.redirect(request.url)
    response.cookies.set({
      name: 'accessToken',
      value: refreshData.data.accessToken,
      path: '/',
      expires: expiration
    })
    return response
  }

  if (!existsToken && !existsUser && !['/login'].includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  } else if (existsToken && (pathname === '/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
