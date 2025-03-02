
import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Calendar, Camera, Edit, FileText, Lock, Mail, Phone, Settings, Shield, Upload, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-6 max-w-7xl"
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="h-24 w-24 rounded-full bg-primary/10 overflow-hidden flex items-center justify-center border-4 border-background">
                    <User className="h-12 w-12 text-primary/40" />
                  </div>
                  <Button size="icon" variant="outline" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Change avatar</span>
                  </Button>
                </div>
                <h2 className="text-xl font-semibold">Alex Johnson</h2>
                <div className="flex items-center gap-1 mt-1">
                  <Badge variant="outline" className="text-blue-500 bg-blue-50">
                    <BadgeCheck className="h-3 w-3 mr-1" />
                    Project Manager
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">Senior PM at Trackezy with 5+ years experience</p>
                <Button variant="outline" className="mt-4 w-full flex gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">alex.j@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Joined April 2021</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Team Members</CardTitle>
              <CardDescription>Your closest collaborators</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {[
                { name: 'Sam Wilson', role: 'UX Designer', avatar: 'https://i.pravatar.cc/300?img=2' },
                { name: 'Taylor Moore', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/300?img=3' },
                { name: 'Jamie Rodriguez', role: 'Backend Developer', avatar: 'https://i.pravatar.cc/300?img=4' },
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img src={member.avatar} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" size="sm" className="mt-1">View all team members</Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <Tabs defaultValue="account">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <TabsContent value="account" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <Input id="first-name" defaultValue="Alex" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <Input id="last-name" defaultValue="Johnson" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" defaultValue="alex.j@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                        defaultValue="Senior Project Manager with 5+ years of experience specializing in Agile methodologies and cross-functional team leadership."
                      />
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Work Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="job-title" className="text-sm font-medium">
                        Job Title
                      </label>
                      <Input id="job-title" defaultValue="Project Manager" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="department" className="text-sm font-medium">
                        Department
                      </label>
                      <Input id="department" defaultValue="Product Development" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">
                        Location
                      </label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timezone" className="text-sm font-medium">
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="pst">Pacific Time (PST)</option>
                        <option value="est">Eastern Time (EST)</option>
                        <option value="cst">Central Time (CST)</option>
                        <option value="mst">Mountain Time (MST)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="security" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Change Password</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="current-password" className="text-sm font-medium">
                        Current Password
                      </label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="new-password" className="text-sm font-medium">
                        New Password
                      </label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirm-password" className="text-sm font-medium">
                        Confirm New Password
                      </label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <Button className="mt-2">Update Password</Button>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Two-Factor Authentication</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Add an extra layer of security to your account by enabling two-factor authentication.
                  </p>
                  <Button variant="outline" className="flex gap-2">
                    <Shield className="h-4 w-4" />
                    Enable 2FA
                  </Button>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Sessions</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start p-3 border rounded-md">
                      <div>
                        <h4 className="text-sm font-medium">Current Session</h4>
                        <p className="text-xs text-muted-foreground">San Francisco, CA • Last active now</p>
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-600">Active</Badge>
                    </div>
                    <div className="flex justify-between items-start p-3 border rounded-md">
                      <div>
                        <h4 className="text-sm font-medium">Mobile App</h4>
                        <p className="text-xs text-muted-foreground">iOS 16 • Last active 2 hours ago</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-500 h-auto py-1">
                        Log Out
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="projects" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Your Projects</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'Dashboard Redesign', role: 'Project Manager', progress: 65 },
                      { name: 'Mobile App', role: 'Project Manager', progress: 80 },
                      { name: 'Website Refresh', role: 'Collaborator', progress: 30 },
                    ].map((project, i) => (
                      <div key={i} className="border rounded-md p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{project.name}</h4>
                            <p className="text-sm text-muted-foreground">{project.role}</p>
                          </div>
                          <Button variant="ghost" size="sm" className="h-auto py-1">View</Button>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2.5">
                          <div
                            className="bg-primary h-2.5 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{project.progress}% Complete</p>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">View All Projects</Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Email Notifications</h4>
                        <p className="text-xs text-muted-foreground">Receive emails for important updates</p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="email-notifications"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Push Notifications</h4>
                        <p className="text-xs text-muted-foreground">Receive notifications on your device</p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="push-notifications"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Task Reminders</h4>
                        <p className="text-xs text-muted-foreground">Get notified about upcoming deadlines</p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="task-reminders"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                    </div>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Comments and Mentions</h4>
                        <p className="text-xs text-muted-foreground">Receive notifications when mentioned</p>
                      </div>
                      <div className="flex items-center h-5">
                        <input
                          id="comments-mentions"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Email Digest Frequency</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="email-digest"
                        value="daily"
                        defaultChecked
                        className="h-4 w-4 border-gray-300"
                      />
                      <span className="text-sm">Daily digest</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="email-digest"
                        value="weekly"
                        className="h-4 w-4 border-gray-300"
                      />
                      <span className="text-sm">Weekly digest</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="email-digest"
                        value="none"
                        className="h-4 w-4 border-gray-300"
                      />
                      <span className="text-sm">No digest</span>
                    </label>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>Recent actions you've performed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'Updated project status', project: 'Dashboard Redesign', time: '2 hours ago', icon: Edit },
                  { action: 'Uploaded design files', project: 'Mobile App', time: 'Yesterday', icon: Upload },
                  { action: 'Added new task', project: 'API Integration', time: '2 days ago', icon: FileText },
                  { action: 'Updated account settings', project: '', time: '1 week ago', icon: Settings },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <activity.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">{activity.action}</span>
                        {activity.project && (
                          <span className="text-muted-foreground"> in <span className="text-primary">{activity.project}</span></span>
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
                <Button variant="link" className="pl-0">View Full Activity History</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
