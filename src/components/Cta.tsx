const Cta = () => {
  return (
    <section
      className="py-20 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Organized?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
         Start managing your events like a pro. Create your first event in seconds and experience the difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
