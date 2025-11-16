export default function Checkbox({
  name,
  id,
  text,
  ...props
}: {
  name: string;
  id: string;
  text: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}) {
  return (
    <div
      className="flex flex-row-reverse gap-x-2 items-center"
      style={{ justifyContent: "start" }}
    >
      <label htmlFor={id} className="lg:text-lg">
        {text}
      </label>
      <input
        type="checkbox"
        name={name}
        id={id}
        className="size-7 lg:size-8 border border-gray-300 appearance-none checked:bg-primary checked:border-own-black"
        {...props}
      />
    </div>
  );
}
