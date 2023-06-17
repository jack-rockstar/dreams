export default function Card({ children, className = '' }) {
  return (
    <div className={`grid min-h-screen w-full ${className}`}>
      {children}
    </div>
  )
}
