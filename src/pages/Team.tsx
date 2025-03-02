
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MoreVertical, UserPlus, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/ui/PageTransition';

const teamMembers = [
  { 
    id: '1', 
    name: 'Alex Johnson', 
    role: 'Project Manager', 
    email: 'alex.j@example.com', 
    phone: '+1 (555) 123-4567',
    avatar: 'https://i.pravatar.cc/300?img=1',
    status: 'active',
    projects: ['Dashboard Redesign', 'Mobile App'],
  },
  { 
    id: '2', 
    name: 'Sam Wilson', 
    role: 'UX Designer', 
    email: 'sam.w@example.com', 
    phone: '+1 (555) 234-5678',
    avatar: 'https://i.pravatar.cc/300?img=2',
    status: 'active',
    projects: ['Mobile App', 'Website Refresh'],
  },
  { 
    id: '3', 
    name: 'Taylor Moore', 
    role: 'Frontend Developer', 
    email: 'taylor.m@example.com', 
    phone: '+1 (555) 345-6789',
    avatar: 'https://i.pravatar.cc/300?img=3',
    status: 'busy',
    projects: ['Dashboard Redesign', 'API Integration'],
  },
  { 
    id: '4', 
    name: 'Jamie Rodriguez', 
    role: 'Backend Developer', 
    email: 'jamie.r@example.com', 
    phone: '+1 (555) 456-7890',
    avatar: 'https://i.pravatar.cc/300?img=4',
    status: 'away',
    projects: ['API Integration', 'Database Migration'],
  },
  { 
    id: '5', 
    name: 'Casey Kim', 
    role: 'QA Engineer', 
    email: 'casey.k@example.com', 
    phone: '+1 (555) 567-8901',
    avatar: 'https://i.pravatar.cc/300?img=5',
    status: 'offline',
    projects: ['Mobile App', 'Dashboard Redesign'],
  },
  { 
    id: '6', 
    name: 'Jordan Smith', 
    role: 'Product Owner', 
    email: 'jordan.s@example.com', 
    phone: '+1 (555) 678-9012',
    avatar: 'https://i.pravatar.cc/300?img=6',
    status: 'active',
    projects: ['Database Migration', 'Website Refresh'],
  },
];

const recentActivities = [
  {
    id: '1',
    user: 'Alex Johnson',
    action: 'completed a task',
    item: 'Create wireframes for dashboard',
    time: '2 hours ago',
    project: 'Dashboard Redesign',
  },
  {
    id: '2',
    user: 'Sam Wilson',
    action: 'commented on',
    item: 'User flow diagram',
    time: '4 hours ago',
    project: 'Mobile App',
  },
  {
    id: '3',
    user: 'Taylor Moore',
    action: 'committed code to',
    item: 'feature/header-component',
    time: 'Yesterday at 5:30 PM',
    project: 'Website Refresh',
  },
  {
    id: '4',
    user: 'Jamie Rodriguez',
    action: 'created a new PR for',
    item: 'API Authentication',
    time: 'Yesterday at 3:15 PM',
    project: 'API Integration',
  },
  {
    id: '5',
    user: 'Casey Kim',
    action: 'approved PR for',
    item: 'Bug fixes',
    time: '2 days ago',
    project: 'Mobile App',
  },
];

const TeamPage = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Team Management</h1>
            <p className="text-muted-foreground">View and manage your team members and activities</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add Team Member
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search team members..." className="pl-8" />
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select className="h-9 w-full sm:w-auto rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                  <option value="all">All Roles</option>
                  <option value="manager">Project Manager</option>
                  <option value="designer">UX Designer</option>
                  <option value="developer">Developer</option>
                  <option value="qa">QA Engineer</option>
                </select>
              </div>
            </div>

            <div className="bg-card rounded-lg border shadow">
              <div className="grid grid-cols-1 divide-y">
                {teamMembers.map((member) => (
                  <div key={member.id} className="p-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={member.avatar} 
                            alt={member.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div 
                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(member.status)}`}
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                          <Mail className="h-4 w-4" />
                          <span className="sr-only">Email</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                          <Phone className="h-4 w-4" />
                          <span className="sr-only">Call</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                          <span className="sr-only">Message</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">More options</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Edit Member</DropdownMenuItem>
                            <DropdownMenuItem>Assign to Project</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <div className="mt-2 pl-[52px]">
                      <div className="flex flex-wrap gap-1 mt-1">
                        {member.projects.map((project) => (
                          <span 
                            key={project} 
                            className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="activity" className="flex-1">Activity</TabsTrigger>
                <TabsTrigger value="insights" className="flex-1">Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="activity" className="bg-card rounded-lg border shadow p-4">
                <h3 className="font-semibold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="border-b pb-3 last:border-0">
                      <div className="flex items-start gap-2">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm">
                            <span className="font-medium">{activity.user}</span>
                            <span className="text-muted-foreground"> {activity.action} </span>
                            <span className="font-medium">{activity.item}</span>
                          </p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs text-muted-foreground">{activity.time}</span>
                            <span className="mx-1 text-muted-foreground">•</span>
                            <span className="text-xs text-primary">{activity.project}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="link" size="sm">View All Activities</Button>
                </div>
              </TabsContent>
              <TabsContent value="insights" className="bg-card rounded-lg border shadow p-4">
                <h3 className="font-semibold mb-4">Team Insights</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <h4 className="text-sm font-medium">Team Composition</h4>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Project Managers</span>
                        <span>16%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '16%' }}></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Designers</span>
                        <span>24%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Developers</span>
                        <span>45%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span>QA Engineers</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Team Productivity</h4>
                    <p className="text-sm text-muted-foreground mt-1">Productivity is up 12% from last month</p>
                    <div className="mt-2 flex justify-between">
                      <Button variant="outline" size="sm">View Full Report</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TeamPage;
