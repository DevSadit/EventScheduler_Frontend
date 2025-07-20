import {
  ArrowRight,
  Award,
  BookOpen,
  Play,
  Users,
  Clock,
  Calendar,
} from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Your Ultimate
            <span className="block">Event Scheduler</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600  max-w-3xl mx-auto leading-relaxed">
            Streamline your life with our powerful event management platform.
            Create, organize, and track all your important events in one
            beautiful interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button className="group flex items-center px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Learn More
            </button>
          </div>
        </div>

        {/* Floating cards animation */}
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-xl 
  bg-white/50 border-gray-200 hover:bg-white/70 
  dark:bg-gray-800/50 dark:border-gray-700 dark:hover:bg-gray-800/70`}
                style={{
                  animationDelay: `${i * 200}ms`,
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <div
                  className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                    i === 1
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : i === 2
                      ? "bg-gradient-to-r from-purple-500 to-purple-600"
                      : "bg-gradient-to-r from-pink-500 to-pink-600"
                  }`}
                >
                  {i === 1 ? (
                    <Clock className="w-6 h-6 text-white" />
                  ) : i === 2 ? (
                    <Users className="w-6 h-6 text-white" />
                  ) : (
                    <Calendar className="w-6 h-6 text-white" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {i === 1
                    ? "Time Management"
                    : i === 2
                    ? "Multiple Categories"
                    : "Smart Scheduling"}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {i === 1
                    ? "Never miss an important event. Our system keeps track of all your scheduled activities."
                    : i === 2
                    ? "Organize events by Work, Personal, or Other categories for better management."
                    : "Create and organize events with our intuitive interface. Set dates, times, and categories effortlessly."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
