
import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
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
        <Badge status={task.priority}>{priorityLabel[task.priority]}</Badge>
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
          <Avatar 
            name={task.assignee.name}
            src={task.assignee.avatar}
            size="sm"
            className="mr-2"
          />
          <span className="text-xs text-muted-foreground truncate">
            {task.assignee.name}
          </span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
