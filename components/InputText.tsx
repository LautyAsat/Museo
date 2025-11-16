export default function InputText({
  name,
  id,
  text,
  type = "text",
  isRequired = false,
  defaultValue,
  autoComplete,
  ...props
}: {
  name: string;
  id: string;
  text: string;
  type?: string;
  isRequired?: boolean;
  defaultValue?: string;
  autoComplete?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>
        {text}
        <span className="text-red-500">{isRequired && " *"}</span>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={isRequired}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="border border-gray-300 mt-2"
        {...props}
      />
    </div>
  );
}
