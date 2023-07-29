export default function Input({ className, ...props }) {
  return (
    <input {...props} className={`text-sm focus:ring-1 focus:outline-none focus:ring-gray-400  block w-full p-2.5 ${className}`} />
  )
}
