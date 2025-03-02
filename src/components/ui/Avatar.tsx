
import React from 'react';
import { cn } from '@/lib/utils';

type AvatarProps = {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeClassMap = {
  sm: 'h-6 w-6 text-xs',
  md: 'h-8 w-8 text-sm',
  lg: 'h-10 w-10 text-base',
};

const getInitials = (name: string) => {
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0][0]?.toUpperCase() || '';
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};

const getRandomColor = (name: string) => {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-purple-100 text-purple-800',
    'bg-green-100 text-green-800',
    'bg-yellow-100 text-yellow-800',
    'bg-pink-100 text-pink-800',
    'bg-indigo-100 text-indigo-800',
  ];
  
  // Generate a simple hash based on the name
  const hash = name.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);
  
  return colors[hash % colors.length];
};

export const Avatar = ({ src, name, size = 'md', className }: AvatarProps) => {
  return (
    <div
      className={cn(
        'rounded-full flex items-center justify-center overflow-hidden',
        sizeClassMap[size],
        !src && getRandomColor(name),
        className
      )}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="font-medium">{getInitials(name)}</span>
      )}
    </div>
  );
};

export default Avatar;
