export default function Section({ style = '', cols = 1, children, ...props }) {
  return (
    <section {...props} className={`grid grid-cols-${String(cols)} mt-4 gap-2 ${style}`}>
      {children}
    </section>
  )
}
