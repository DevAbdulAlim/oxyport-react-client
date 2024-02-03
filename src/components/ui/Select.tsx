import { VariantProps, cva } from "class-variance-authority";
import { FC, SelectHTMLAttributes } from "react";
import { cn } from "../../lib/utils";

const selectVariants = cva(
  "border-gray-300 focus:border-slate-400 focus:ring-slate-400 rounded-md border",
  {
    variants: {
      variant: {
        default: "focus:ring-indigo-500",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      },
      selectSize: {
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      selectSize: "default",
    },
  }
);

interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  selectSize?: "default" | "sm" | "lg";
}

const Select: FC<SelectProps> = ({
  className,
  variant,
  selectSize,
  children,
  ...props
}) => {
  return (
    <select
      className={cn(selectVariants({ variant, selectSize, className }))}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
