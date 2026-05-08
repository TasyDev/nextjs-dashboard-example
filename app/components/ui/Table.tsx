import React from 'react'

export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-y-auto">
    <table className="w-full border-collapse border border-brand-secondary/20 text-brand-sm">
      {children}
    </table>
  </div>
)

export const THead = ({ children }: { children: React.ReactNode }) => (
  <thead>
    <tr className="bg-brand-secondary/10 dark:bg-brand-surface-dark">
      {children}
    </tr>
  </thead>
)

export const TBody = ({ children }: { children: React.ReactNode }) => (
  <tbody>
    {children}
  </tbody>
)

export const TH = ({ children, className = "" }: { children?: React.ReactNode, className?: string }) => (
  <th className={`py-brand-sm px-brand-md border border-brand-secondary/20 font-brand-semibold text-left ${className}`}>
    {children}
  </th>
)

export const TD = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <td className={`py-brand-sm px-brand-md border border-brand-secondary/20 ${className}`}>
    {children}
  </td>
)

export const TR = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <tr className={`hover:bg-brand-secondary/5 dark:hover:bg-brand-secondary/10 transition-colors ${className}`}>
    {children}
  </tr>
)
