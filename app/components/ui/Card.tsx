import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  title?: string
  headerActions?: React.ReactNode
}

export const Card = ({ children, className = "", title, headerActions }: CardProps) => (
  <div className={`bg-brand-surface-light dark:bg-brand-surface-dark rounded-brand-lg shadow-md overflow-hidden ${className}`}>
    {(title || headerActions) && (
      <div className="flex justify-between items-center p-brand-md border-b border-brand-secondary/20">
        {title && <h3 className="font-jost font-brand-bold text-brand-lg text-brand-text-light dark:text-brand-text-dark">{title}</h3>}
        {headerActions && <div className="flex gap-brand-sm">{headerActions}</div>}
      </div>
    )}
    <div className="p-brand-md">
      {children}
    </div>
  </div>
)
