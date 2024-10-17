export type DividerProps = {
  label?: string
}

export default function Divider({ label }: DividerProps) {
  return (
    <div className="relative flex py-5 items-center w-full">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-600 font-bold">{label}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  )
}
