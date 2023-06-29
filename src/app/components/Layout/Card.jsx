export default function Card({ children, className = '' }) {
  return (
    <main className={`grid min-h-screen w-full ${className}`}>
      {children}
    </main>
  )
}
