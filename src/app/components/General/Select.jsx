export default function Select({ options, className, ...props }) {
  return (
    <select
      {...props}
      className={`py-2 px-2 text-sm text-white placeholder-gray-400 bg-gray-600 border-r border-r-gray-700  focus:outline-none  focus:ring-gray-400 ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}
