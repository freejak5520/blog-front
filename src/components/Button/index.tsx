import { ButtonHTMLAttributes } from "react";

const Button = ({
  type,
  children,
}: {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  children?: React.ReactNode;
}) => {
  return (
    <button
      type={type}
      className={`border-r bg-blue-800 text-white px-4 py-4 rounded-md w-full`}
    >
      {children}
    </button>
  );
};

export default Button;
