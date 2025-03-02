
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart, PieChart, Pie, Cell } from 'recharts';
import { Calendar as CalendarIcon, Download, Filter, Layers, BarChart2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import PageTransition from '@/components/ui/PageTransition';

// Sample data for charts
const taskCompletionData = [
  { name: 'Jan', completed: 65, total: 85 },
  { name: 'Feb', completed: 59, total: 70 },
  { name: 'Mar', completed: 80, total: 95 },
  { name: 'Apr', completed: 81, total: 90 },
  { name: 'May', completed: 56, total: 75 },
  { name: 'Jun', completed: 55, total: 60 },
  { name: 'Jul', completed: 40, total: 50 },
];

const productivityData = [
  { name: 'Week 1', productivity: 78 },
  { name: 'Week 2', productivity: 82 },
  { name: 'Week 3', productivity: 61 },
  { name: 'Week 4', productivity: 85 },
  { name: 'Week 5', productivity: 75 },
  { name: 'Week 6', productivity: 92 },
  { name: 'Week 7', productivity: 87 },
  { name: 'Week 8', productivity: 69 },
];

const projectStatusData = [
  { name: 'Completed', value: 14, color: '#10b981' },
  { name: 'In Progress', value: 8, color: '#3b82f6' },
  { name: 'Not Started', value: 3, color: '#d1d5db' },
  { name: 'Delayed', value: 5, color: '#ef4444' },
];

const teamPerformanceData = [
  { name: 'Design', tasks: 45, completion: 85 },
  { name: 'Development', tasks: 82, completion: 92 },
  { name: 'Marketing', tasks: 27, completion: 78 },
  { name: 'Operations', tasks: 34, completion: 88 },
  { name: 'Sales', tasks: 29, completion: 72 },
];

const ReportsPage = () => {
  const [date, setDate] = useState<Date>();

  return (
    <PageTransition>
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">Track performance and productivity metrics</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {date ? format(date, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">42</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 2.5%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Task Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 3.2%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Team Productivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">92%</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-green-500">↑ 1.8%</span> from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Overdue Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">7</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="text-red-500">↑ 2</span> from last week
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Task Completion</CardTitle>
                    <Select defaultValue="6months">
                      <SelectTrigger className="w-[120px] h-8">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="6months">Last 6 months</SelectItem>
                        <SelectItem value="1year">Last year</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <CardDescription>Task completion rate over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={taskCompletionData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="completed" fill="#3b82f6" name="Completed Tasks" />
                        <Bar dataKey="total" fill="#d1d5db" name="Total Tasks" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Project Status</CardTitle>
                  </div>
                  <CardDescription>Current status of all projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={projectStatusData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={5}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {projectStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="productivity" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Team Productivity Trends</CardTitle>
                  <Select defaultValue="8weeks">
                    <SelectTrigger className="w-[120px] h-8">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4weeks">Last 4 weeks</SelectItem>
                      <SelectItem value="8weeks">Last 8 weeks</SelectItem>
                      <SelectItem value="6months">Last 6 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <CardDescription>Weekly productivity scores</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={productivityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="productivity"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                        name="Productivity Score"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Metrics</CardTitle>
                <CardDescription>Key performance indicators for all projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Project metrics would go here - table or other visualization */}
                  <div className="text-center py-10">
                    <div className="flex justify-center items-center">
                      <Layers className="h-12 w-12 text-primary opacity-20" />
                    </div>
                    <h3 className="mt-4 text-lg font-medium">Project metrics visualization</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                      This section would display detailed metrics for each project, including timeline, budget, and resource allocation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Performance</CardTitle>
                <CardDescription>Task completion rates by department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={teamPerformanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="tasks" fill="#d1d5db" name="Total Tasks" />
                      <Bar dataKey="completion" fill="#3b82f6" name="Completion Rate (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default ReportsPage;
