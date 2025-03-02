
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Filter, List, Plus, Grid, Search } from 'lucide-react';
import { format, addDays, startOfWeek, endOfWeek, eachDayOfInterval, addWeeks, subWeeks, isSameDay } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const eventTypes = {
  meeting: { label: 'Meeting', color: 'bg-blue-500' },
  deadline: { label: 'Deadline', color: 'bg-red-500' },
  task: { label: 'Task', color: 'bg-green-500' },
  sprint: { label: 'Sprint', color: 'bg-purple-500' },
  other: { label: 'Other', color: 'bg-gray-500' },
};

const events = [
  {
    id: '1',
    title: 'Daily Standup',
    start: new Date(2023, 4, 15, 9, 0),
    end: new Date(2023, 4, 15, 9, 30),
    type: 'meeting',
    project: 'Mobile App',
  },
  {
    id: '2',
    title: 'API Integration Planning',
    start: new Date(2023, 4, 15, 11, 0),
    end: new Date(2023, 4, 15, 12, 30),
    type: 'meeting',
    project: 'API Integration',
  },
  {
    id: '3',
    title: 'UI Component Library Release',
    start: new Date(2023, 4, 16, 0, 0),
    end: new Date(2023, 4, 16, 23, 59),
    type: 'deadline',
    project: 'Website Refresh',
  },
  {
    id: '4',
    title: 'Database Migration Review',
    start: new Date(2023, 4, 17, 14, 0),
    end: new Date(2023, 4, 17, 15, 0),
    type: 'meeting',
    project: 'Database Migration',
  },
  {
    id: '5',
    title: 'Sprint Planning',
    start: new Date(2023, 4, 18, 10, 0),
    end: new Date(2023, 4, 18, 12, 0),
    type: 'sprint',
    project: 'Mobile App',
  },
  {
    id: '6',
    title: 'Dashboard Wireframes Review',
    start: new Date(2023, 4, 18, 15, 0),
    end: new Date(2023, 4, 18, 16, 30),
    type: 'meeting',
    project: 'Dashboard Redesign',
  },
  {
    id: '7',
    title: 'Complete Homepage Redesign',
    start: new Date(2023, 4, 19, 0, 0),
    end: new Date(2023, 4, 19, 23, 59),
    type: 'task',
    project: 'Website Refresh',
  },
  {
    id: '8',
    title: 'QA Testing Session',
    start: new Date(2023, 4, 20, 13, 0),
    end: new Date(2023, 4, 20, 17, 0),
    type: 'task',
    project: 'Mobile App',
  },
  {
    id: '9',
    title: 'Backend API Documentation',
    start: new Date(2023, 4, 19, 9, 0),
    end: new Date(2023, 4, 19, 12, 0),
    type: 'task',
    project: 'API Integration',
  },
];

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week');
  const [calendarDate, setCalendarDate] = useState<Date | undefined>(new Date());

  const navigateToToday = () => {
    setCurrentDate(new Date());
  };

  const navigatePrevious = () => {
    if (view === 'week') {
      setCurrentDate(subWeeks(currentDate, 1));
    } else {
      // Handle month navigation
      const prevMonth = new Date(currentDate);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      setCurrentDate(prevMonth);
    }
  };

  const navigateNext = () => {
    if (view === 'week') {
      setCurrentDate(addWeeks(currentDate, 1));
    } else {
      // Handle month navigation
      const nextMonth = new Date(currentDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setCurrentDate(nextMonth);
    }
  };

  const handleCalendarSelect = (date: Date | undefined) => {
    if (date) {
      setCurrentDate(date);
      setCalendarDate(date);
    }
  };

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 }); // Sunday
  const daysOfWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });

  const getEventsForDate = (date: Date) => {
    // In a real app, filter events based on actual date
    // For now, we're distributing sample events based on the date's day of month modulo
    return events.filter(event => {
      const eventDay = event.start.getDate();
      const currentDay = date.getDate();
      return eventDay % 7 === currentDay % 7;
    });
  };

  const dayHours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-6 max-w-7xl"
    >
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Schedule and manage your team events and deadlines</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search events..." className="pl-8 w-full md:w-[200px]" />
          </div>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="hidden md:flex gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>Jump to Date</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <CalendarComponent
                mode="single"
                selected={calendarDate}
                onSelect={handleCalendarSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2 items-center">
              <Button variant="outline" size="icon" onClick={navigatePrevious}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={navigateNext}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" onClick={navigateToToday}>
                Today
              </Button>
              <h2 className="text-lg font-semibold">
                {view === 'week'
                  ? `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`
                  : format(currentDate, 'MMMM yyyy')}
              </h2>
            </div>
            
            <div className="flex items-center gap-2">
              <Tabs defaultValue="week" className="mr-2" onValueChange={(value) => setView(value)}>
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
              </Tabs>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <Grid className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-7 gap-px bg-muted">
            {daysOfWeek.map((day, i) => (
              <div 
                key={i} 
                className={`text-center py-2 font-medium text-sm ${
                  isSameDay(day, new Date()) ? 'bg-primary/10' : 'bg-card'
                }`}
              >
                <div className="mb-1">{format(day, 'EEE')}</div>
                <div className={`
                  h-8 w-8 rounded-full flex items-center justify-center mx-auto
                  ${isSameDay(day, new Date()) ? 'bg-primary text-primary-foreground' : ''}
                `}>
                  {format(day, 'd')}
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 divide-x border-t">
            {daysOfWeek.map((day, dayIndex) => (
              <div 
                key={dayIndex} 
                className={`min-h-[600px] ${
                  isSameDay(day, new Date()) ? 'bg-primary/5' : ''
                }`}
              >
                {dayHours.map((hour) => (
                  <div 
                    key={hour} 
                    className="h-14 border-b relative group hover:bg-accent/50 transition-colors"
                  >
                    {hour === 8 && (
                      <div className="absolute -left-16 top-0 text-xs text-muted-foreground w-14 text-right pr-2">
                        {hour === 12 ? '12 PM' : hour > 12 ? `${hour-12} PM` : `${hour} AM`}
                      </div>
                    )}
                    
                    {/* Placeholder for demonstrating events */}
                    {getEventsForDate(day).filter(event => {
                      const eventHour = event.start.getHours();
                      return eventHour === hour;
                    }).map((event, index) => (
                      <div
                        key={index}
                        className={`absolute top-0 left-1 right-1 m-0.5 rounded-md p-1.5 overflow-hidden text-xs ${eventTypes[event.type as keyof typeof eventTypes].color} text-white`}
                        style={{ height: `${Math.min(event.end.getHours() - event.start.getHours(), 2) * 100}%` }}
                      >
                        <div className="font-medium truncate">{event.title}</div>
                        <div className="truncate text-white/70 text-xs">{event.project}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-base">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.slice(0, 5).map((event, i) => (
                <div key={i} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                  <div className={`w-2 h-full min-h-[2.5rem] rounded-full ${eventTypes[event.type as keyof typeof eventTypes].color}`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{event.title}</h4>
                    <div className="flex flex-wrap gap-2 items-center mt-1">
                      <Badge variant="outline">{event.project}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {format(event.start, 'MMM d, h:mm a')} - {format(event.end, 'h:mm a')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Calendar Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(eventTypes).map(([key, value]) => (
                <div key={key} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${value.color}`} />
                  <span className="text-sm">{value.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-2">Filters</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                  <span className="text-sm">Show completed tasks</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                  <span className="text-sm">Show all-day events</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" defaultChecked />
                  <span className="text-sm">Show team events</span>
                </label>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default CalendarPage;
