import { Calendar, Clock, Tag } from "lucide-react";
import Swal from "sweetalert2";
import axios from "axios";
import type { EventType } from "../types.ts";

interface EventCardProps {
  event: EventType;
  setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventCard = ({ event, setEvents, setIsModalOpen }: EventCardProps) => {

const handleEdit = () => {
  setIsModalOpen(true);
  // You may want to set the current event to edit in a parent state as well
};

const handleDelete = async (id: string) => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  });

  if (result.isConfirmed) {
    try {
      await axios.delete(`https://eventscheduler-backend-0u04.onrender.com/events/${id}`);
      setEvents((prev) => prev.filter((event) => event.id !== id));

      await Swal.fire({
        title: "Deleted!",
        text: "Your event has been deleted.",
        icon: "success",
      });
    } catch (error) {
      console.error("Failed to delete event:", error);
      await Swal.fire({
        title: "Error!",
        text: "There was a problem deleting the event.",
        icon: "error",
      });
    }
  }
};




  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Work: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      Personal:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Other:
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    };
    return (
      colors[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    );
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(":");
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return time.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden group ${
        event.archived ? "opacity-60" : ""
      }`}
    >
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(
              event.category
            )}`}
          >
            <Tag className="w-3 h-3 mr-1.5" />
            {event.category}
          </span>
          {event.archived && (
            <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
              Archived
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {event.title}
          </h3>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-green-500" />
            <span className="font-medium">{formatTime(event.time)}</span>
          </div>
        </div>

        {event.notes && (
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {event.notes}
            </p>
          </div>
        )}

        <div className="flex space-x-2 pt-2">
          <button
            onClick={handleEdit}
            className="flex-1 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium py-2 px-4 rounded-xl transition-all duration-200 text-sm"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(event.id)}
            className="flex-1 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 font-medium py-2 px-4 rounded-xl transition-all duration-200 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default EventCard;
