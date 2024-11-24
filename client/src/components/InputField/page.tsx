import ErrorMessage from "../ErrorMessage/page"

interface InputFieldsProps{
    name: string
    label: string
    type?: string
    value: string
    placeholder: string
    onChange: any
    error: string
}

const InputField = ({ name, label, type = "text", value, onChange, error, placeholder }: InputFieldsProps) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-gray-300 text-sm font-medium">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-transparent border border-gray-600 rounded-lg w-full p-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#fff]"
    />
    {error && <ErrorMessage message={error} />}
  </div>
);

export default InputField;
