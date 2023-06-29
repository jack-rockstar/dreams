'use client'
import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
export default function Portal({ children }) {
  const portalRef = useRef(null)

  useEffect(() => {
    const portalElement = document.createElement('div')
    portalRef.current = portalElement
    document.body.appendChild(portalElement)
  }, [])

  return portalRef.current ? ReactDOM.createPortal(children, portalRef.current) : null
}
