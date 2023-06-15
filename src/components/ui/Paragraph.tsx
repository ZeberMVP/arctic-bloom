import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const paragraphVariants = cva("text-black font-medium text-center ", {
  variants: {
    size: {
      default: "text-base sm:text-lg",
      xs: "text-xs sm:text-sm font-normal",
      sm: "text-sm sm:text-base",
      lg: "text-xl sm:text-2xl font-semibold",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
