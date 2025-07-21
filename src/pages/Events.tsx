import React, { useState } from 'react';
import { Calendar, Plus, Filter, Search, Grid, List, Clock, Tag, MapPin } from 'lucide-react';
import EventCard from '../components/EventCard';

// Mock EventCard component since we don't have the original


const Events = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const Events = [
    {
      id: "1",
      title: "Team Meeting",
      date: "2024-01-25",
      time: "10:00",
      notes: "Discuss Q1 goals and project updates",
      category: "Work",
      archived: false,
    },
    {
      id: "2",
      title: "Doctor Appointment",
      date: "2024-01-26",
      time: "14:30",
      notes: "Annual checkup",
      category: "Personal",
      archived: false,
    },
    {
      id: "3",
      title: "Grocery Shopping",
      date: "2024-01-24",
      time: "18:00",
      category: "Other",
      archived: true,
    },
    {
      id: "4",
      title: "Project Presentation",
      date: "2024-01-27",
      time: "09:00",
      notes: "Present the new marketing campaign to stakeholders",
      category: "Work",
      archived: false,
    },
    {
      id: "5",
      title: "Yoga Class",
      date: "2024-01-28",
      time: "19:00",
      notes: "Evening relaxation session at the community center",
      category: "Personal",
      archived: false,
    },
  ];

  const categories = ['all', ...new Set(Events.map(event => event.category))];

  const filteredEvents = Events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.notes?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const activeEvents = filteredEvents.filter(event => !event.archived);
  const archivedEvents = filteredEvents.filter(event => event.archived);

  return (
    <section className="dark:bg-gray-950 bg-gray-50 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent">
            Your Events
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Manage all your events in one place. Create, edit, and organize your schedule with ease.
          </p>
        </div>

        {/* Action Bar */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-200 appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* View Mode and Create Button */}
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Create Button */}
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <Plus className="w-5 h-5 mr-2" />
                Create Event
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Events</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{Events.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Events</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{activeEvents.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Categories</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{categories.length - 1}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Tag className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Events Grid/List */}
        {activeEvents.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Active Events</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {activeEvents.length} events
              </span>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {activeEvents.map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
            </div>
          </div>
        )}

        {/* Archived Events */}
        {archivedEvents.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Archived Events</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                {archivedEvents.length} events
              </span>
            </div>
            
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {archivedEvents.map((event) => (
                <EventCard event={event} key={event.id} />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No events found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Create your first event to get started.'
              }
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create Event
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;