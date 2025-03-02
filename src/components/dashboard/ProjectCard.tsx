
import React from 'react';
import { MoreHorizontal, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: {
    id: string;
    title: string;
    description: string;
    status: 'todo' | 'in-progress' | 'done' | 'blocked';
    progress: number;
    dueDate?: string;
    team: Array<{
      id: string;
      name: string;
      avatar?: string;
    }>;
  };
  className?: string;
};

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  const statusLabel = {
    'todo': 'To Do',
    'in-progress': 'In Progress',
    'done': 'Completed',
    'blocked': 'Blocked',
  };

  const statusColors = {
    'todo': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    'in-progress': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
    'done': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    'blocked': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div 
      className={cn(
        "rounded-xl border bg-card p-5 shadow-sm card-hover transition-all",
        className
      )}
    >
      <div className="flex justify-between items-start mb-3">
        <span className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
          statusColors[project.status]
        )}>
          {statusLabel[project.status]}
        </span>
        <button className="text-muted-foreground hover:text-foreground rounded-full h-8 w-8 flex items-center justify-center transition-colors">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">More options</span>
        </button>
      </div>
      
      <h3 className="text-lg font-semibold line-clamp-2 mb-1">{project.title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-light">
        {project.description}
      </p>
      
      <div className="mt-auto">
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{project.progress}%</span>
          </div>
          
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500 ease-in-out"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="flex -space-x-2">
            {project.team.slice(0, 3).map((member) => (
              <Avatar 
                key={member.id}
                className="border-2 border-background h-6 w-6"
              >
                {member.avatar ? (
                  <AvatarImage src={member.avatar} alt={member.name} />
                ) : (
                  <AvatarFallback>
                    {member.name.charAt(0)}
                  </AvatarFallback>
                )}
              </Avatar>
            ))}
            {project.team.length > 3 && (
              <div className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                +{project.team.length - 3}
              </div>
            )}
          </div>
          
          {project.dueDate && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-3.5 w-3.5" />
              <span>{formatDate(project.dueDate)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
