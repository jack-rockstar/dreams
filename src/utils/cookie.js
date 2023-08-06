'use client'
export const deleteCookie = (name) => {
  window.document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

export const getCookie = (cname) => {
  const name = cname + '='
  const ca = window.document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') { c = c.substring(1) }
    if (c.indexOf(name) === 0) { return c.substring(name.length, c.length) }
  }
  return ''
}
export const setCookie = ({ cname, cvalue, cTimeMinutes = null }) => {
  const ahora = new Date()
  ahora.setMinutes(ahora.getMinutes() + cTimeMinutes)

  if (!cTimeMinutes) {
    window.document.cookie = `${cname}=${cvalue};path=/`
    return
  }
  window.document.cookie = `${cname}=${cvalue};expires=${ahora.toUTCString()};path=/`
}
