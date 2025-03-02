
import React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = {
  status: 'todo' | 'in-progress' | 'done' | 'blocked' | 'high' | 'medium' | 'low';
  children: React.ReactNode;
  className?: string;
};

const statusClassMap = {
  'todo': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  'done': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  'blocked': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  'high': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  'medium': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
  'low': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
};

export const Badge = ({ status, children, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium transition-colors',
        statusClassMap[status],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
