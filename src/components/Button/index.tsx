import { Fragment, ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  style?: "primary" | "secondary" | "tertiary";
  size?: "large";
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  style = "primary",
  icon,
}) => {
  return (
    <button
      className={`py-3 px-6 rounded-full flex flex-row justify-center items-center ${style} ${
        !!className ? className : ""
      }`}
    >
      {icon && <div className="mr-1"> {icon} </div>}
      {children}
    </button>
  );
};

export default Button;
