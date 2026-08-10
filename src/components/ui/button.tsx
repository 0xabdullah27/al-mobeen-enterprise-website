import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer text-decoration-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-inverse-ink shadow-md hover:bg-primary-light hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.99]",
        primary:
          "btn-primary",
        outline:
          "border-2 border-primary-light/60 dark:border-accent bg-transparent text-ink hover:bg-ink hover:text-inverse-ink hover:border-ink dark:hover:bg-ink dark:hover:text-inverse-ink dark:hover:border-ink hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shadow-xs",
        secondary:
          "bg-surface text-ink border border-border shadow-xs hover:bg-surface-hover hover:-translate-y-0.5",
        ghost:
          "text-ink hover:bg-ink/5 hover:text-ink",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-semibold",
        destructive:
          "bg-danger text-inverse-ink shadow-sm hover:bg-danger/90 hover:-translate-y-0.5",
        success:
          "bg-success text-inverse-ink shadow-sm hover:bg-success/90 hover:-translate-y-0.5",
        whatsapp:
          "bg-whatsapp text-white shadow-md hover:bg-whatsapp/90 hover:-translate-y-0.5 hover:shadow-whatsapp",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 px-4 text-xs rounded-xl",
        lg: "h-12 px-8 text-base rounded-full",
        xl: "h-14 px-9 text-base rounded-full font-extrabold",
        icon: "h-10 w-10 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
