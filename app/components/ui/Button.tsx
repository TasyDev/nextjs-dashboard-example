import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'primary'
  children: React.ReactNode
}

export const Button = ({ variant = 'outline', children, className, ...props }: ButtonProps) => {
  const baseStyles = "rounded-sm cursor-pointer px-4 py-1 text-xs transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    outline: "border border-slate-500 hover:bg-slate-300/90 dark:hover:bg-slate-600/90 focus-visible:ring-slate-500",
    primary: "bg-slate-600 dark:bg-slate-300 text-slate-100 dark:text-slate-900 border border-slate-700 dark:border-slate-200 hover:bg-slate-600/90 dark:hover:bg-slate-300/90 focus-visible:ring-slate-600"
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
