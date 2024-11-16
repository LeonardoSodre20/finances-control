
type LabelProps = {
  label: string
}

export const Label = ({ label }: LabelProps) => {
  return (
    <label
      className="ml-3 font-semibold text-sm"
      htmlFor="input-field"
    >
      {label}
    </label>
  )
}