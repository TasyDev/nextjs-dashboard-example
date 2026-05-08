import React from 'react'

export const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-y-auto">
    <table className="w-full border-collapse border border-slate-300 dark:border-slate-600 text-sm">
      {children}
    </table>
  </div>
)

export const THead = ({ children }: { children: React.ReactNode }) => (
  <thead>
    <tr className="bg-slate-200 dark:bg-slate-700">
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
  <th className={`py-2 px-3 border border-slate-300 dark:border-slate-600 font-semibold text-left ${className}`}>
    {children}
  </th>
)

export const TD = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <td className={`py-2 px-3 border border-slate-300 dark:border-slate-600 ${className}`}>
    {children}
  </td>
)

export const TR = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <tr className={`hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors ${className}`}>
    {children}
  </tr>
)
