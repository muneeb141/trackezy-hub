
import React from 'react';
import { 
  ArrowUpRight, 
  Clock, 
  Filter, 
  PieChart, 
  Plus, 
  Presentation, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/dashboard/ProjectCard';
import { PageTransition } from '@/components/ui/PageTransition';

// Sample data
const projects = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Complete overhaul of our marketing website with new design system',
    status: 'in-progress' as const,
    progress: 68,
    dueDate: '2023-07-15',
    team: [
      { id: '1', name: 'John Doe' },
      { id: '2', name: 'Jane Smith' },
      { id: '3', name: 'Mike Johnson' },
      { id: '4', name: 'Sarah Williams' },
    ],
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Build a cross-platform mobile application with React Native',
    status: 'todo' as const,
    progress: 25,
    dueDate: '2023-08-30',
    team: [
      { id: '1', name: 'John Doe' },
      { id: '5', name: 'Emily Davis' },
    ],
  },
  {
    id: '3',
    title: 'User Research Study',
    description: 'Conduct interviews and usability tests with customers',
    status: 'done' as const,
    progress: 100,
    dueDate: '2023-06-20',
    team: [
      { id: '2', name: 'Jane Smith' },
      { id: '6', name: 'Alex Wilson' },
      { id: '7', name: 'Lisa Brown' },
    ],
  },
  {
    id: '4',
    title: 'Q3 Marketing Campaign',
    description: 'Plan and execute our Q3 digital marketing campaign',
    status: 'blocked' as const,
    progress: 45,
    dueDate: '2023-09-15',
    team: [
      { id: '8', name: 'Robert Taylor' },
      { id: '9', name: 'Jessica Adams' },
    ],
  },
];

const stats = [
  {
    title: 'Tasks Completed',
    value: '24',
    change: '+5',
    icon: Clock,
  },
  {
    title: 'Active Projects',
    value: '7',
    change: '+2',
    icon: Presentation,
  },
  {
    title: 'Team Members',
    value: '16',
    change: '+3',
    icon: Users,
  },
  {
    title: 'Completion Rate',
    value: '87%',
    change: '+12%',
    icon: PieChart,
  },
];

const Dashboard = () => {
  return (
    <PageTransition>
      <div className="p-6 max-w-[1600px] mx-auto animate-fade-in">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="h-9">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card p-5 shadow-sm"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <span className="text-xs font-medium text-green-500">
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  <div className="rounded-full bg-primary/10 p-2">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Active Projects</h2>
            <Button variant="link" size="sm" className="text-primary">
              View All
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
