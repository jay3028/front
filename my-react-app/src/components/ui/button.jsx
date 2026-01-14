import React from 'react'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Button({ className, variant = 'default', ...props }) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    default:
      'bg-slate-900 text-white hover:bg-slate-900/90 focus-visible:ring-slate-900',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-900',
  }

  return (
    <button
      className={cn(base, variants[variant], className)}
      type="button"
      {...props}
    />
  )
}


