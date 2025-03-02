
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

type TaskCardProps = {
  task: {
    id: string;
    title: string;
    description?: string;
    status: 'todo' | 'in-progress' | 'done' | 'blocked';
    priority: 'high' | 'medium' | 'low';
    assignee?: {
      id: string;
      name: string;
      avatar?: string;
    };
  };
  className?: string;
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
};

export const TaskCard = ({ task, className, onDragStart }: TaskCardProps) => {
  const priorityLabel = {
    'high': 'High',
    'medium': 'Medium',
    'low': 'Low',
  };

  const priorityColors = {
    'high': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
    'medium': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100',
    'low': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  };

  return (
    <div 
      className={cn(
        "rounded-lg border bg-card p-3 shadow-sm hover:shadow transition-all cursor-pointer mb-2",
        className
      )}
      draggable
      onDragStart={(e) => onDragStart && onDragStart(e, task.id)}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
          priorityColors[task.priority]
        )}>
          {priorityLabel[task.priority]}
        </span>
        <button className="text-muted-foreground hover:text-foreground rounded-full h-6 w-6 flex items-center justify-center transition-colors">
          <MoreHorizontal className="h-3.5 w-3.5" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      
      <h4 className="text-sm font-medium line-clamp-2 mb-1">{task.title}</h4>
      
      {task.description && (
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {task.description}
        </p>
      )}
      
      {task.assignee && (
        <div className="flex items-center mt-2">
          <div className="h-6 w-6 mr-2 rounded-full bg-muted flex items-center justify-center overflow-hidden">
            {task.assignee.avatar ? (
              <img src={task.assignee.avatar} alt={task.assignee.name} className="h-full w-full object-cover" />
            ) : (
              <span className="text-xs font-medium">
                {task.assignee.name.charAt(0)}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground truncate">
            {task.assignee.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
