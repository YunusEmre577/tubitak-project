"use client";
import { cn } from "../libs/utils";
import { useId, forwardRef, useState, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

type TextFieldProps = {
  label?: string;
  description?: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
  rightOnClick?: () => void;
  error?: string | null;
  placeholder?: string;
  size?: "xs" | "sm" | "md" | "lg";
  height?: string;
  labelClass?: string;
  placeholderClass?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      placeholder,
      size = "md",
      id: _id,
      label,
      description,
      left,
      right,
      rightOnClick,
      error,
      height,
      labelClass,
      placeholderClass,
      ...props
    },
    ref
  ) => {
    const use_id = useId();
    const id = _id ?? use_id;
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(!!props.value);
    const [touched, setTouched] = useState(false);
    const inputRef = useRef<HTMLLabelElement>(null);

    return (
      <div className={cn("relative space-y-1", className)} aria-describedby={id}>
        {label && <span className="bg-red-500 p-2"/>}

        <motion.label
          ref={inputRef}
          htmlFor={id}
          className={cn("bg-transparent relative flex items-center transition-all border", {
            "border-accent rounded-xl focus-within:border-foreground+2": !error || !touched,
            "border-red-500 rounded-t-xl": touched && error,
          }, labelClass)}
          animate={touched && error ? { x: [-3, 3, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <span
            className={cn(
              "absolute font-medium left-5 text-[14px] transition-all text-muted pointer-events-none",
              {
                "top-1/2 -translate-y-1/2 text-[15px]": !focused && !filled,
                "top-1.5 text-[11px]": focused || filled,
                "ml-8": left
              }, placeholderClass
            )}
          >
            {placeholder}
          </span>

          {left && (
            <span
              onClick={() => {
                rightOnClick?.();
                inputRef.current?.focus();
              }}
              className="ml-4 cursor-pointer"
            >
              <Icon className=" text-foreground+1 text-[18px]" icon={left as string} />
            </span>
          )}
          <input
            id={id}
            ref={ref}
            className={cn(
              "bg-transparent text-foreground+2 font-medium w-full h-full !outline-none placeholder-transparent",
              {
                "p-3 text-base/6": size === "lg",
                "p-3 px-5 pt-6 text-[15px]": size === "md",
                "p-2 text-sm/4": size === "sm",
                "p-1.5 text-xs/6": size === "xs",
              }, height
            )}
            aria-invalid={!!error}
            onFocus={(e) => {
              setFocused(true);
              if(!e.target.value) {
                setTouched(false);
              }
            }}
            onBlur={(e) => {
              setFocused(false);
              setFilled(!!e.target.value);
              setTouched(true);
            }}
            {...props}
          />
          {touched && error && !right && (
            <span className="absolute right-2 top-1.5 text-[13px] text-red-500">
              <Icon icon={"solar:danger-triangle-outline"} />
            </span>
          )}
          {right && (
            <span
              onClick={() => {
                rightOnClick?.();
                inputRef.current?.focus();
              }}
              className="mr-3 cursor-pointer"
            >
              <Icon className=" text-foreground+1 text-[18px]" icon={right as string} />
            </span>
          )}
        </motion.label>

        <AnimatePresence mode="wait">
  {touched && error && (
    <motion.p
      className="font-medium rounded-b-lg p-2.5 bg-red-500 text-foreground+2 text-[13px]"
      initial={{ y: -15 }} 
      animate={{ y: -6 }}   
      exit={{ y: -6 }}    
      transition={{ duration: 0.1, ease: "linear" }}
    >
      {error}
    </motion.p>
  )}
</AnimatePresence>
{description && (
  <span className="text-sm px-2 text-muted mt-1">{description}</span>
)}
      </div>
    );
  }
);

TextField.displayName = "TextField";