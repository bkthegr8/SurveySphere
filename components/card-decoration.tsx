export function CardDecoration() {
  return (
    <div className="absolute -z-10 inset-0 overflow-hidden rounded-lg opacity-50">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-purple-900/5 to-transparent rounded-lg"></div>
    </div>
  )
}
