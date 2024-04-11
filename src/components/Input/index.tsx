const Input = ({
  type,
  placeholder,
  value,
  name,
  id,
  className,
  required,
  autoComplete,
}: {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  id?: string;
  className?: string;
  required?: boolean;
  autoComplete?: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      id={id}
      required={required}
      autoComplete={autoComplete}
      className={"w-full px-4 py-4 " + className}
    />
  );
};

export default Input;
