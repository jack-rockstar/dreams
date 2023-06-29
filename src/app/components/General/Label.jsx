export default function Label({ label, className, ...props }) {
  return (
    <label {...props} className={`block mb-2  ${className}`}>{label}</label>
  )
}
