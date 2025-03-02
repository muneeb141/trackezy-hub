
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Check, ChevronRight, Globe, Lock, Moon, Palette, Shield, User, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const SettingsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-6 max-w-7xl"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button>Save Changes</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <Card className="md:row-span-2">
          <CardContent className="p-4">
            <nav className="space-y-1">
              {[
                { icon: User, label: 'Profile', active: false },
                { icon: Bell, label: 'Notifications', active: false },
                { icon: Palette, label: 'Appearance', active: true },
                { icon: Globe, label: 'Language', active: false },
                { icon: Zap, label: 'Performance', active: false },
                { icon: Shield, label: 'Security', active: false },
                { icon: Users, label: 'Teams', active: false },
                { icon: Lock, label: 'Permissions', active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center justify-between px-3 py-2 rounded-md ${
                    item.active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  } transition-colors cursor-pointer`}
                >
                  <div className="flex items-center">
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.active ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4 opacity-70" />
                  )}
                </div>
              ))}
            </nav>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how Trackezy looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-3">Theme</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="cursor-pointer bg-white border-2 border-primary rounded-lg p-2 flex flex-col items-center space-y-2">
                      <div className="h-12 w-full bg-white border rounded"></div>
                      <span className="text-xs font-medium">Light</span>
                    </div>
                    <div className="cursor-pointer bg-black border-2 border-transparent rounded-lg p-2 flex flex-col items-center space-y-2">
                      <div className="h-12 w-full bg-gray-900 border border-gray-700 rounded"></div>
                      <span className="text-xs font-medium text-white">Dark</span>
                    </div>
                    <div className="cursor-pointer bg-gradient-to-r from-white to-gray-900 border-2 border-transparent rounded-lg p-2 flex flex-col items-center space-y-2">
                      <div className="h-12 w-full bg-gradient-to-r from-white to-gray-900 border rounded"></div>
                      <span className="text-xs font-medium">System</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="enable-animations" className="flex items-center space-x-2">
                      <span>Enable animations</span>
                    </Label>
                    <Switch id="enable-animations" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enable or disable interface animations throughout the application
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium mb-3">Color Scheme</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {[
                      { color: 'bg-blue-600', name: 'Blue', selected: false },
                      { color: 'bg-purple-600', name: 'Purple', selected: true },
                      { color: 'bg-green-600', name: 'Green', selected: false },
                      { color: 'bg-amber-600', name: 'Amber', selected: false },
                      { color: 'bg-rose-600', name: 'Rose', selected: false },
                    ].map((scheme) => (
                      <div
                        key={scheme.name}
                        className={`cursor-pointer rounded-md p-2 flex flex-col items-center space-y-1 ${
                          scheme.selected ? 'ring-2 ring-primary ring-offset-2' : ''
                        }`}
                      >
                        <div className={`h-8 w-8 rounded-full ${scheme.color}`}></div>
                        <span className="text-xs">{scheme.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sidebar Customization</CardTitle>
              <CardDescription>
                Configure how the sidebar displays content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="compact-sidebar" className="flex items-center space-x-2">
                      <span>Compact sidebar</span>
                    </Label>
                    <Switch id="compact-sidebar" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Use a narrower sidebar with icons only
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="auto-collapse" className="flex items-center space-x-2">
                      <span>Auto-collapse on small screens</span>
                    </Label>
                    <Switch id="auto-collapse" defaultChecked />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Automatically collapse sidebar on mobile devices
                  </p>
                </div>

                <div>
                  <Label htmlFor="sidebar-position">Sidebar position</Label>
                  <select
                    id="sidebar-position"
                    className="w-full mt-1 rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="left">Left (Default)</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue="editor">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger>
                <TabsTrigger value="advanced">Advanced</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="editor" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <select
                  id="font-size"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="small">Small</option>
                  <option value="medium" selected>Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="line-height">Line Height</Label>
                <select
                  id="line-height"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="compact">Compact</option>
                  <option value="normal" selected>Normal</option>
                  <option value="relaxed">Relaxed</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="code-folding" className="flex items-center space-x-2">
                    <span>Code folding</span>
                  </Label>
                  <Switch id="code-folding" defaultChecked />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="display" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <select
                  id="date-format"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                  <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                  <option value="yyyy/mm/dd">YYYY/MM/DD</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <select
                  id="timezone"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="utc">UTC</option>
                  <option value="est">Eastern Time (EST)</option>
                  <option value="pst">Pacific Time (PST)</option>
                  <option value="gmt">GMT</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="24-hour-time" className="flex items-center space-x-2">
                    <span>Use 24-hour time</span>
                  </Label>
                  <Switch id="24-hour-time" />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="data-refresh">Data refresh interval (seconds)</Label>
                <Input id="data-refresh" type="number" defaultValue="30" min="5" max="300" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="dev-mode" className="flex items-center space-x-2">
                    <span>Developer mode</span>
                  </Label>
                  <Switch id="dev-mode" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable additional debugging tools and detailed logging
                </p>
              </div>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full">
                  Clear Application Cache
                </Button>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default SettingsPage;
