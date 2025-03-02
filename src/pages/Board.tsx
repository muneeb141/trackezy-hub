
import React, { useState } from 'react';
import { Filter, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TaskColumn } from '@/components/dashboard/TaskColumn';
import { PageTransition } from '@/components/ui/PageTransition';

// Sample data
const initialTasks = [
  {
    id: '1',
    title: 'Design system updates',
    description: 'Update our design system with new components',
    status: 'todo' as const,
    priority: 'high' as const,
    assignee: { id: '1', name: 'John Doe' },
  },
  {
    id: '2',
    title: 'Implement authentication flow',
    description: 'Create login and signup screens',
    status: 'in-progress' as const,
    priority: 'high' as const,
    assignee: { id: '2', name: 'Jane Smith' },
  },
  {
    id: '3',
    title: 'Fix responsive layout issues',
    status: 'in-progress' as const,
    priority: 'medium' as const,
    assignee: { id: '1', name: 'John Doe' },
  },
  {
    id: '4',
    title: 'Write documentation',
    description: 'Create user guide for new features',
    status: 'todo' as const,
    priority: 'low' as const,
    assignee: { id: '3', name: 'Mike Johnson' },
  },
  {
    id: '5',
    title: 'Create onboarding flow',
    status: 'todo' as const,
    priority: 'medium' as const,
    assignee: { id: '2', name: 'Jane Smith' },
  },
  {
    id: '6',
    title: 'Implement dark mode',
    status: 'done' as const,
    priority: 'low' as const,
    assignee: { id: '1', name: 'John Doe' },
  },
  {
    id: '7',
    title: 'User testing',
    description: 'Conduct usability tests with 5 users',
    status: 'done' as const,
    priority: 'high' as const,
    assignee: { id: '4', name: 'Sarah Williams' },
  },
  {
    id: '8',
    title: 'API integration',
    description: 'Connect to backend services',
    status: 'blocked' as const,
    priority: 'high' as const,
    assignee: { id: '3', name: 'Mike Johnson' },
  },
];

const columns = [
  { title: 'To Do', status: 'todo' as const },
  { title: 'In Progress', status: 'in-progress' as const },
  { title: 'Done', status: 'done' as const },
  { title: 'Blocked', status: 'blocked' as const },
];

const Board = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);

  const onDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent, status: string) => {
    e.preventDefault();
    
    if (draggedTaskId) {
      const updatedTasks = tasks.map(task => {
        if (task.id === draggedTaskId) {
          return { ...task, status: status as any };
        }
        return task;
      });
      
      setTasks(updatedTasks);
      setDraggedTaskId(null);
    }
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageTransition>
      <div className="p-6 animate-fade-in">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Board</h1>
            <div className="flex items-center gap-2">
              <div className="relative max-w-xs w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search tasks..."
                  className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="h-9">
                <Plus className="h-4 w-4 mr-2" />
                Add Task
              </Button>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-6 pt-2" style={{ minHeight: 'calc(100vh - 160px)' }}>
            {columns.map(column => (
              <TaskColumn
                key={column.status}
                title={column.title}
                status={column.status}
                tasks={getTasksByStatus(column.status)}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragStart={onDragStart}
                className="animate-scale-in"
              />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Board;
