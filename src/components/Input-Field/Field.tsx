import { ComponentProps, forwardRef, ForwardRefRenderFunction } from "react"

type InputProps = {
  type?: string
} & ComponentProps<'input'>

const Field: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ type = 'text', ...inputProps }, ref) => {
  return (
    <input
      name="input-field"
      type={type}
      {...inputProps}
      ref={ref}
      className="bg-white rounded-3xl h-12 w-full shadow-md border 
      border-gray-400 text-black outline-none indent-14 text-sm"
    />
  )
}

export default forwardRef(Field)