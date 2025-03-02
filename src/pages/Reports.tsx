
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, LineChart, PieChart, Download, Filter, Calendar, Share2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const projectData = [
  { name: 'Dashboard Redesign', completed: 65, remaining: 35, tasks: 20, overdue: 2 },
  { name: 'Mobile App', completed: 80, remaining: 20, tasks: 35, overdue: 0 },
  { name: 'Website Refresh', completed: 30, remaining: 70, tasks: 45, overdue: 5 },
  { name: 'API Integration', completed: 50, remaining: 50, tasks: 18, overdue: 1 },
  { name: 'Database Migration', completed: 90, remaining: 10, tasks: 12, overdue: 0 },
];

const timelineData = [
  { name: 'Week 1', tasks: 15, bugs: 5 },
  { name: 'Week 2', tasks: 20, bugs: 8 },
  { name: 'Week 3', tasks: 25, bugs: 3 },
  { name: 'Week 4', tasks: 30, bugs: 2 },
  { name: 'Week 5', tasks: 22, bugs: 4 },
  { name: 'Week 6', tasks: 18, bugs: 1 },
];

const priorityData = [
  { name: 'High', value: 25, color: '#ef4444' },
  { name: 'Medium', value: 45, color: '#f97316' },
  { name: 'Low', value: 30, color: '#22c55e' },
];

const teamEfficiencyData = [
  { name: 'Design', efficiency: 85, tasks: 28, color: '#8b5cf6' },
  { name: 'Frontend', efficiency: 75, tasks: 36, color: '#3b82f6' },
  { name: 'Backend', efficiency: 90, tasks: 24, color: '#14b8a6' },
  { name: 'QA', efficiency: 82, tasks: 18, color: '#f59e0b' },
];

const ReportsPage = () => {
  const [dateRange, setDateRange] = useState('This Month');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-6 max-w-7xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Visualize project data and team performance</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {dateRange}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setDateRange('Today')}>Today</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange('This Week')}>This Week</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange('This Month')}>This Month</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange('Last Quarter')}>Last Quarter</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setDateRange('This Year')}>This Year</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard">
        <TabsList className="mb-6">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>
        
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Project Overview</CardTitle>
                <CardDescription>Current status of all projects</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={projectData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        paddingAngle={2}
                        dataKey="tasks"
                      >
                        {projectData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={teamEfficiencyData[index % teamEfficiencyData.length].color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Task Priority Distribution</CardTitle>
                <CardDescription>Tasks by priority level</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={priorityData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {priorityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Team Efficiency</CardTitle>
                <CardDescription>Productivity metrics by team</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={teamEfficiencyData} layout="vertical" barCategoryGap={12}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Efficiency']} />
                      <Bar dataKey="efficiency" radius={[0, 4, 4, 0]}>
                        {teamEfficiencyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-base">Task & Bug Timeline</CardTitle>
                  <CardDescription>6-week view of tasks and bugs</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={timelineData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="tasks" stroke="#3b82f6" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="bugs" stroke="#ef4444" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Project Completion Status</CardTitle>
                <CardDescription>Progress for active projects</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={projectData} layout="vertical" barCategoryGap={12}>
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={150} tickLine={false} axisLine={false} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="completed" stackId="a" fill="#22c55e" name="Completed %" />
                      <Bar dataKey="remaining" stackId="a" fill="#e5e7eb" name="Remaining %" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Overdue Tasks</CardTitle>
                <CardDescription>Tasks past due date by project</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={projectData} barCategoryGap={8}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} tickMargin={10} />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="overdue" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="projects">
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <BarChart className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">Project-specific Reports</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                Select a specific project to view detailed metrics, timeline analysis, and resource allocation.
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>Select a Project</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center">
                  {projectData.map((project) => (
                    <DropdownMenuItem key={project.name}>
                      {project.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team">
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <LineChart className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">Team Performance Reports</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                Analyze team velocities, individual contributions, and workload distribution.
              </p>
              <Button>Team Analytics Dashboard</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="custom">
          <div className="bg-card rounded-lg border p-6 text-center">
            <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
              <PieChart className="h-10 w-10 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold">Custom Report Builder</h3>
              <p className="text-sm text-muted-foreground mt-2 mb-4">
                Create personalized reports by selecting metrics, dimensions, and visualizations.
              </p>
              <Button>Build Custom Report</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default ReportsPage;
