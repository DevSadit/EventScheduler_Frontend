const Status = () => {
  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "1K+", label: "Expert Instructors" },
    { number: "10K+", label: "Courses Available" },
    { number: "98%", label: "Success Rate" },
  ];
  return (
    <section className={`py-16 dark:bg-gray-800 bg-gray-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
