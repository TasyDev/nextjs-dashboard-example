import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  headerActions?: React.ReactNode
}

export const Card = ({ children, className = "", title, headerActions }: CardProps) => (
  <div className={`bg-slate-100 dark:bg-slate-700 rounded-lg shadow-md overflow-hidden ${className}`}>
    {(title || headerActions) && (
      <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-600">
        {title && <h3 className="font-jost font-bold text-lg text-slate-800 dark:text-slate-100">{title}</h3>}
        {headerActions && <div className="flex gap-2">{headerActions}</div>}
      </div>
    )}
    <div className="p-4">
      {children}
    </div>
  </div>
)
