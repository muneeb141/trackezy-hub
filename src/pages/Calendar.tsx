
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, MoreHorizontal, Plus } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isEqual, parseISO, getDay, addMonths, subMonths } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import PageTransition from '@/components/ui/PageTransition';

// Sample event data
const events = [
  {
    id: '1',
    title: 'Team Meeting',
    date: '2024-05-15T10:00',
    endDate: '2024-05-15T11:30',
    type: 'meeting',
    participants: ['Alex Johnson', 'Jamie Rodriguez', 'Taylor Moore'],
  },
  {
    id: '2',
    title: 'Project Review',
    date: '2024-05-18T14:00',
    endDate: '2024-05-18T15:00',
    type: 'review',
    participants: ['Sam Wilson', 'Casey Kim'],
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: '2024-05-22T09:30',
    endDate: '2024-05-22T11:00',
    type: 'presentation',
    participants: ['Alex Johnson', 'Jordan Smith'],
  },
  {
    id: '4',
    title: 'Design Workshop',
    date: '2024-05-25T13:00',
    endDate: '2024-05-25T16:00',
    type: 'workshop',
    participants: ['Sam Wilson', 'Casey Kim', 'Taylor Moore'],
  },
  {
    id: '5',
    title: 'Sprint Planning',
    date: '2024-05-27T10:00',
    endDate: '2024-05-27T12:00',
    type: 'planning',
    participants: ['Alex Johnson', 'Jamie Rodriguez', 'Jordan Smith'],
  },
];

// Time slots for the day view
const timeSlots = Array.from({ length: 24 }, (_, i) => i);

const eventTypeColors = {
  meeting: 'bg-blue-100 text-blue-800 border-blue-200',
  review: 'bg-purple-100 text-purple-800 border-purple-200',
  presentation: 'bg-amber-100 text-amber-800 border-amber-200',
  workshop: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  planning: 'bg-pink-100 text-pink-800 border-pink-200',
};

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  // For month view
  const daysInMonth = () => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    return eachDayOfInterval({ start, end });
  };

  // For week view
  const getWeekDates = () => {
    const today = selectedDate || new Date();
    const day = getDay(today);
    const diff = day === 0 ? 6 : day - 1; // Adjust to make Monday the first day
    const monday = new Date(today);
    monday.setDate(today.getDate() - diff);
    
    return Array(7).fill(0).map((_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });
  };

  // Get events for a specific date
  const getEventsForDate = (date: Date) => {
    return events.filter(event => {
      const eventDate = parseISO(event.date);
      return isEqual(
        new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate()),
        new Date(date.getFullYear(), date.getMonth(), date.getDate())
      );
    });
  };

  // Navigate between months
  const previousMonth = () => {
    setDate(subMonths(date, 1));
  };

  const nextMonth = () => {
    setDate(addMonths(date, 1));
  };

  return (
    <PageTransition>
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">Schedule and manage your events</p>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
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

        <Tabs defaultValue="month" value={view} onValueChange={setView} className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <TabsList>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="agenda">Agenda</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={previousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="font-medium">
                {format(date, 'MMMM yyyy')}
              </div>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="month" className="mt-0">
            <Card className="border rounded-lg shadow-sm">
              <div className="grid grid-cols-7 gap-px bg-muted text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="py-2 text-sm font-medium">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-px bg-muted">
                {Array.from({ length: getDay(startOfMonth(date)) === 0 ? 6 : getDay(startOfMonth(date)) - 1 }).map((_, i) => (
                  <div key={`empty-${i}`} className="bg-background p-2 h-24 sm:h-32"></div>
                ))}
                {daysInMonth().map((day) => {
                  const dayEvents = getEventsForDate(day);
                  return (
                    <div
                      key={day.toString()}
                      className={cn(
                        "bg-background p-2 min-h-24 sm:min-h-32",
                        !isSameMonth(day, date) && "text-muted-foreground",
                        isToday(day) && "bg-accent/50",
                      )}
                    >
                      <div className="flex justify-between items-start">
                        <span className={cn(
                          "text-sm font-medium",
                          isToday(day) && "text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center"
                        )}>
                          {format(day, 'd')}
                        </span>
                        {dayEvents.length > 0 && (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View All Events</DropdownMenuItem>
                              <DropdownMenuItem>Create Event</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        )}
                      </div>
                      <div className="mt-1 space-y-1 overflow-hidden">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={cn(
                              "text-xs rounded px-1.5 py-0.5 truncate",
                              eventTypeColors[event.type as keyof typeof eventTypeColors]
                            )}
                          >
                            {format(parseISO(event.date), 'HH:mm')} {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-muted-foreground pl-1.5">
                            +{dayEvents.length - 2} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="week" className="mt-0">
            <Card className="border rounded-lg shadow-sm">
              <div className="grid grid-cols-8 divide-x">
                <div className="py-2 text-center text-muted-foreground text-sm font-medium">
                  Time
                </div>
                {getWeekDates().map((date) => (
                  <div 
                    key={date.toString()} 
                    className={cn(
                      "py-2 text-center text-sm font-medium",
                      isToday(date) && "bg-accent/50"
                    )}
                  >
                    <div>{format(date, 'EEE')}</div>
                    <div className={cn(
                      isToday(date) && "text-primary bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mx-auto"
                    )}>
                      {format(date, 'd')}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-8 divide-x h-[600px] overflow-auto">
                <div className="divide-y">
                  {timeSlots.map((hour) => (
                    <div key={hour} className="h-20 px-2 py-1 text-xs text-muted-foreground">
                      {hour.toString().padStart(2, '0')}:00
                    </div>
                  ))}
                </div>
                {getWeekDates().map((date) => (
                  <div 
                    key={date.toString()} 
                    className={cn(
                      "divide-y relative",
                      isToday(date) && "bg-accent/10"
                    )}
                  >
                    {timeSlots.map((hour) => (
                      <div key={hour} className="h-20 border-dashed"></div>
                    ))}
                    {/* We would position events here with absolute positioning based on their time */}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="day" className="mt-0">
            <Card className="border rounded-lg shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">
                  {selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : format(new Date(), 'EEEE, MMMM d, yyyy')}
                </h3>
              </div>
              <div className="divide-y h-[600px] overflow-auto">
                {timeSlots.map((hour) => (
                  <div key={hour} className="flex">
                    <div className="w-16 shrink-0 py-4 px-2 text-xs text-muted-foreground border-r">
                      {hour.toString().padStart(2, '0')}:00
                    </div>
                    <div className="flex-1 py-4 px-4 border-dashed border-muted">
                      {/* Events would go here */}
                      {hour === 10 && (
                        <div className="bg-blue-100 text-blue-800 border border-blue-200 rounded p-2 mb-2">
                          <div className="font-medium">Team Meeting</div>
                          <div className="text-xs">10:00 - 11:30</div>
                        </div>
                      )}
                      {hour === 14 && (
                        <div className="bg-purple-100 text-purple-800 border border-purple-200 rounded p-2">
                          <div className="font-medium">Project Review</div>
                          <div className="text-xs">14:00 - 15:00</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="agenda" className="mt-0">
            <Card className="border rounded-lg shadow-sm divide-y">
              {events.map((event) => (
                <div key={event.id} className="p-4 hover:bg-accent/50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        {format(parseISO(event.date), 'EEEE, MMMM d • HH:mm')} - {format(parseISO(event.endDate), 'HH:mm')}
                      </div>
                    </div>
                    <Badge
                      className={cn(
                        "px-2 py-1 text-xs rounded-lg",
                        eventTypeColors[event.type as keyof typeof eventTypeColors]
                      )}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <div className="mt-2">
                    <div className="text-sm font-medium mt-2">Participants:</div>
                    <div className="flex gap-1 mt-1">
                      {event.participants.map((participant) => (
                        <span
                          key={participant}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary"
                        >
                          {participant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PageTransition>
  );
};

export default CalendarPage;
