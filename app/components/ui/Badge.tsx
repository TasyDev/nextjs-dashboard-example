interface BadgeProps {
  children: React.ReactNode
  variant?: 'paid' | 'unpaid' | 'default'
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    paid: 'bg-emerald-600 text-white',
    unpaid: 'bg-orange-600 text-white',
    default: 'bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200'
  }

  return (
    <span className={`block w-full text-center text-xs px-2 py-1 rounded-lg font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
