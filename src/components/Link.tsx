import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { cn } from "../lib/utils";

const linkVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events:none",
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
        success: "bg-green-500 text-white hover:bg-green-700",
        danger: "bg-red-500 text-white hover:bg-red-700",
        warning: "bg-yellow-500 text-white hover:bg-yellow-700",
        info: "bg-blue-500 text-white hover:bg-blue-700",
        dark: "bg-gray-800 text-white hover:bg-gray-900",
        purple: "bg-purple-500 text-white hover:bg-purple-700",
        edit: "bg-yellow-500 text-white hover:bg-yellow-700",
        delete: "bg-red-500 text-white hover:bg-red-700",
      },
      size: {
        default: "h-10 px-6 ",
        sm: "h-8 px-4",
        lg: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface RouterLinkProps
  extends LinkProps,
  VariantProps<typeof linkVariants> {
  isLoading?: boolean;
  to: string;
}

const Link: FC<RouterLinkProps> = ({
  to,
  className,
  children,
  variant,
  size,
  ...props
}) => {
  return (
    <RouterLink
      to={to}
      className={cn(linkVariants({ variant, size, className }))}
  
      {...props}
    >

      {children}
    </RouterLink>
  );
};

export default Link;