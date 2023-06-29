export default function ButtonIcon({ children, className, ...props }) {
  return (
    <button {...props} className={`absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-800 hover:text-white ${className}`}>
      {children}
    </button>
  )
}
