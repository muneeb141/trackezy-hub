
import React from 'react';
import { Plus } from 'lucide-react';
import { TaskCard } from '@/components/dashboard/TaskCard';
import { cn } from '@/lib/utils';

type Task = {
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

type TaskColumnProps = {
  title: string;
  tasks: Task[];
  status: 'todo' | 'in-progress' | 'done' | 'blocked';
  className?: string;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent, status: string) => void;
  onDragStart?: (e: React.DragEvent, taskId: string) => void;
};

export const TaskColumn = ({ 
  title, 
  tasks, 
  status,
  className,
  onDragOver,
  onDrop,
  onDragStart
}: TaskColumnProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col rounded-lg border bg-card min-w-[280px] max-w-[280px]",
        className
      )}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop && onDrop(e, status)}
    >
      <div className="flex items-center justify-between p-3 border-b">
        <h3 className="font-medium text-sm">{title} ({tasks.length})</h3>
        <button className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add Task</span>
        </button>
      </div>
      
      <div className="flex-1 overflow-auto p-2">
        {tasks.map((task) => (
          <TaskCard 
            key={task.id}
            task={task}
            onDragStart={onDragStart}
          />
        ))}
        
        {tasks.length === 0 && (
          <div className="flex items-center justify-center h-20 border border-dashed rounded-lg text-muted-foreground text-sm">
            No tasks yet
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;
