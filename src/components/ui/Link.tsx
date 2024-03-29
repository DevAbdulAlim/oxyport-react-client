import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { cn } from "../../lib/utils";

const linkVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events:none",
  {
    variants: {
      variant: {
        default: "bg-green-900 text-white hover:bg-green-800",
        secondary:
          "bg-green-50 text-green-900 hover:text-green-100 hover:bg-green-500",
        ghost: "bg-transparent hover:text-green-900 hover:bg-green-100",
        success: "bg-green-500 text-white hover:bg-green-700",
        danger: "bg-red-500 text-white hover:bg-red-700",
        warning: "bg-yellow-500 text-white hover:bg-yellow-700",
        info: "bg-blue-500 text-white hover:bg-blue-700",
        dark: "bg-green-800 text-white hover:bg-green-900",
        purple: "bg-purple-500 text-white hover:bg-purple-700",
        edit: "bg-yellow-500 text-white hover:bg-yellow-700",
        delete: "bg-red-500 text-white hover:bg-red-700",
        icon: "text-green-900 hover:text-white hover:bg-green-800 text-xl",
        link: "hover:underline",
      },
      size: {
        default: "h-10 px-2",
        sm: "h-8 px-3",
        lg: "h-12 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface RouterLinkProps extends LinkProps, VariantProps<typeof linkVariants> {
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
