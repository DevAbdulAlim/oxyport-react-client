import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import { ImgHTMLAttributes } from "react";

const avatarVariants = cva("rounded-full overflow-hidden", {
  variants: {
    size: {
      default: "h-10 w-10",
      sm: "h-8 w-8",
      lg: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface AvatarProps
  extends ImgHTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarVariants> {
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ alt, className, size, ...props }) => {
  return (
    <img
      alt={alt}
      className={cn(avatarVariants({ size }), className)}
      {...props}
    />
  );
};

export default Avatar;
