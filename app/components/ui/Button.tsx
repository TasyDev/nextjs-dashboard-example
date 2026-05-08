import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary'
  children: React.ReactNode
}

export const Button = ({ variant = 'outline', children, className, ...props }: ButtonProps) => {
  const baseStyles = "rounded-brand-sm cursor-pointer px-brand-md py-brand-xs text-brand-xs transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    outline: "border border-brand-secondary hover:bg-brand-secondary/10 dark:hover:bg-brand-secondary/20 focus-visible:ring-brand-primary",
    primary: "bg-brand-primary text-white border border-brand-primary hover:bg-brand-primary/90 focus-visible:ring-brand-primary"
  }

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
