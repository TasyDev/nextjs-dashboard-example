interface BadgeProps {
  children: React.ReactNode
  variant?: 'paid' | 'unpaid' | 'default'
}

export const Badge = ({ children, variant = 'default' }: BadgeProps) => {
  const variants = {
    paid: 'bg-brand-success text-white',
    unpaid: 'bg-brand-warning text-white',
    default: 'bg-brand-secondary/20 dark:bg-brand-secondary/40 text-brand-text-light dark:text-brand-text-dark'
  }

  return (
    <span className={`block w-full text-center text-brand-xs px-brand-sm py-brand-xs rounded-brand-md font-brand-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
