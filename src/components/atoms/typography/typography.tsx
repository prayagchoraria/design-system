import { createElement } from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "text",
  {
    variants: {
      /**
       * Element for the typography
       * @default "label"
       */
      elementType: {
        h1: "text-2xl font-bold",
        h2: "text-xl font-bold",
        h3: "text-lg font-bold",
        p: "text-base",
        label: "text-sm font-semibold",
      },
    },
    defaultVariants: {
      elementType: "label",
    },
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
  VariantProps<typeof typographyVariants> {

    //elementType?: 'h1' | 'h2' | 'h3' | 'p' | 'label';
  }

const Typography = ({ elementType, children, ...props } : TypographyProps) => {
  return createElement(elementType || "label", { className: cn(typographyVariants({ elementType })), ...props }, children);
};

export default Typography;