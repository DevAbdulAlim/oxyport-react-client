import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events:none",
  {
    variants: {
      variant: {
        default: "bg-green-900 text-white hover:bg-green-800",
        secondary:
          "bg-green-50 text-green-900 hover:text-green-100 hover:bg-green-500",
        ghost: "bg-transparent hover:text-green-900 hover:bg-green-200",
        success: "bg-green-500 text-white hover:bg-green-700",
        danger: "bg-red-500 text-white hover:bg-red-700",
        warning: "bg-yellow-500 text-white hover:bg-yellow-700",
        info: "bg-blue-500 text-white hover:bg-blue-700",
        dark: "bg-green-800 text-white hover:bg-green-900",
        purple: "bg-purple-500 text-white hover:bg-purple-700",
        edit: "bg-yellow-500 text-white hover:bg-yellow-700",
        delete: "text-red-500 hover:text-red-700 text-xl",
        icon: "text-green-900 hover:text-white hover:bg-green-800 text-xl",
      },
      size: {
        default: "h-10 px-4 ",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
      {children}
    </button>
  );
};

export default Button;
