import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, BarChart2, FileText, PlusCircle, Link as LinkIcon, MessageSquare } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/ui/PageTransition';

// Sample user data
const userData = {
  name: 'Alex Johnson',
  role: 'Project Manager',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  joinDate: 'March 2022',
  avatar: 'https://i.pravatar.cc/300?img=1',
  bio: 'Experienced project manager with a background in software development. Passionate about building efficient teams and delivering high-quality products on time.',
  skills: ['Project Management', 'Team Leadership', 'Agile/Scrum', 'Risk Management', 'Stakeholder Communication', 'Software Development'],
  social: [
    { platform: 'LinkedIn', link: 'https://linkedin.com/in/alexjohnson' },
    { platform: 'Twitter', link: 'https://twitter.com/alexjohnson' },
    { platform: 'GitHub', link: 'https://github.com/alexjohnson' },
  ]
};

// Sample projects
const userProjects = [
  {
    id: '1',
    name: 'Dashboard Redesign',
    description: 'Redesign of the main dashboard UI to improve usability and incorporate new features.',
    status: 'in-progress',
    dueDate: 'May 30, 2024',
    progress: 65,
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Creating a mobile version of our platform for iOS and Android devices.',
    status: 'in-progress',
    dueDate: 'July 15, 2024',
    progress: 42,
  },
  {
    id: '3',
    name: 'API Integration',
    description: 'Integration with third-party APIs to enhance platform functionality.',
    status: 'completed',
    dueDate: 'April 10, 2024',
    progress: 100,
  },
];

// Sample activities
const recentActivities = [
  {
    id: '1',
    type: 'task',
    action: 'completed',
    item: 'Review design mockups',
    time: '2 hours ago',
    project: 'Dashboard Redesign',
  },
  {
    id: '2',
    type: 'comment',
    action: 'commented on',
    item: 'API documentation',
    time: '3 hours ago',
    project: 'API Integration',
  },
  {
    id: '3',
    type: 'project',
    action: 'created',
    item: 'Mobile App Development',
    time: '1 day ago',
    project: 'Mobile App Development',
  },
  {
    id: '4',
    type: 'task',
    action: 'assigned',
    item: 'Finalize color palette',
    time: '2 days ago',
    project: 'Dashboard Redesign',
  },
  {
    id: '5',
    type: 'file',
    action: 'uploaded',
    item: 'project-requirements.pdf',
    time: '3 days ago',
    project: 'Mobile App Development',
  },
];

const ProfilePage = () => {
  return (
    <PageTransition>
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={userData.avatar} alt={userData.name} />
                    <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-xl font-bold">{userData.name}</h2>
                  <p className="text-muted-foreground">{userData.role}</p>
                  <div className="flex mt-4 gap-2">
                    <Button variant="outline" size="sm">
                      Edit Profile
                    </Button>
                    <Button size="sm">
                      Message
                    </Button>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{userData.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Joined {userData.joinDate}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Bio</h3>
                  <p className="text-sm text-muted-foreground">{userData.bio}</p>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {userData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Social Links</h3>
                  <div className="space-y-2">
                    {userData.social.map((account) => (
                      <div key={account.platform} className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 text-muted-foreground" />
                        <a href={account.link} className="text-sm text-primary hover:underline">
                          {account.platform}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                    <CardDescription>A summary of your work and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">2</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">37</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">92%</div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Projects</CardTitle>
                    <CardDescription>Projects you're currently working on</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {userProjects.filter(p => p.status === 'in-progress').map((project) => (
                        <div key={project.id} className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{project.name}</h3>
                              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                            </div>
                            <Badge className={project.status === 'in-progress' ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                              {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                            </Badge>
                          </div>
                          <div className="mt-4 text-sm">
                            <div className="flex justify-between mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full" 
                                style={{ width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <div className="mt-4 text-sm text-muted-foreground">
                            Due: {project.dueDate}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">All Projects</h3>
                  <Button>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {userProjects.map((project) => (
                    <Card key={project.id}>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle>{project.name}</CardTitle>
                            <CardDescription>{project.description}</CardDescription>
                          </div>
                          <Badge className={project.status === 'in-progress' ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}>
                            {project.status === 'in-progress' ? 'In Progress' : 'Completed'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="mt-2 text-sm">
                          <div className="flex justify-between mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            Due: {project.dueDate}
                          </div>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your activity in the last 30 days</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0">
                          <div className="rounded-full bg-primary/10 p-2">
                            {activity.type === 'task' && <FileText className="h-4 w-4 text-primary" />}
                            {activity.type === 'comment' && <MessageSquare className="h-4 w-4 text-primary" />}
                            {activity.type === 'project' && <Layers className="h-4 w-4 text-primary" />}
                            {activity.type === 'file' && <FileText className="h-4 w-4 text-primary" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">
                              <span className="font-medium">You</span>
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
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProfilePage;
