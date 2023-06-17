import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/']
}
export function middleware(request) {
  const accessToken = request.cookies.has('accessToken')
  const { pathname } = request.nextUrl

  if (!accessToken && !['/login'].includes(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  } else if (accessToken && (pathname === '/login')) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  return NextResponse.next()
}
