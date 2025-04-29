import { Icon } from "@iconify/react/dist/iconify.js"
import { cn } from "../libs/utils"
import { ButtonHTMLAttributes, ReactNode } from "react"

type Variant = "ghost" | "solid" | "outline"
type Color = "primary" | "secondary"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: Variant
  color?: Color
  className?: string
  icon?: ReactNode
  isIconOnly?: boolean
  loading?: boolean
}

export function Button({
  children,
  variant = "solid",
  color = "primary",
  className,
  icon,
  isIconOnly = false,
  loading = false,
  disabled=false,
  ...props
}: ButtonProps) {
  const baseStyles =
    "cursor-pointer flex flex-row-reverse items-center justify-center gap-2 text-[15px] font-semibold transition disabled:opacity-50 disabled:pointer-events-none"

  const sizeStyles = isIconOnly
    ? "h-9 w-9 rounded-full"
    : "p-2.5 px-5 rounded-full"

  const variantColorStyles: Record<Variant, Record<Color, string>> = {
    solid: {
      primary: "bg-colored text-white hover:brightness-95",
      secondary: "bg-tertiary text-foreground hover:bg-accent",
    },
    outline: {
      primary: "border border-colored text-black hover:bg-neutral-100",
      secondary: "border border-neutral-300 text-neutral-600 hover:bg-neutral-100",
    },
    ghost: {
      primary: "text-muted hover:bg-secondary hover:text-foreground",
      secondary: "text-neutral-600 hover:bg-neutral-100",
    },
  }

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles,
        variantColorStyles[variant][color],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {icon && <span className={cn("")}> <Icon icon={icon as string} /> </span>}
      {loading ? (<>{Array.isArray(children) ? children[1] : children}<div className="h-4 w-4 rounded-full border border-r-0 rounded-r-0 animate-spin border-white" /></>) : Array.isArray(children) ? children[0] : children}
    </button>
  )
}
