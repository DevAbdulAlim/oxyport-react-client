import { VariantProps, cva } from "class-variance-authority";
import { FC, InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

const inputVariants = cva(
  "border-gray-300 focus:border-slate-400 focus:ring-slate-400 rounded-md border",
  {
    variants: {
      variant: {
        default: "focus:ring-indigo-500",
        error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      },
      inputSize: {
        // Renamed from 'size' to 'inputSize'
        default: "h-10 px-4",
        sm: "h-8 px-2",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: "default" | "sm" | "lg";
}

const Input: FC<InputProps> = ({ className, variant, size, ...props }) => {
  return (
    <input
      className={cn(inputVariants({ variant, inputSize: size, className }))}
      {...props}
    />
  );
};

export default Input;
