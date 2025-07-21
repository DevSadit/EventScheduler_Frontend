import { Star } from "lucide-react";
import image1 from "../assets/p1.jpg";
import image2 from "../assets/p2.jpg";
import image3 from "../assets/p3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      img: image1,
      content:
        "Nexdu transformed my learning experience. The progressive course structure helped me master complex topics step by step.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Data Scientist",
      img: image2,
      content:
        "The admin dashboard is incredibly intuitive. I can easily manage my courses and track student progress.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      img: image3,
      content:
        "Beautiful interface and smooth learning experience. The dark mode is perfect for late-night studying!",
      rating: 5,
    },
  ];
  return (
    <section id="reviews" className="py-20 dark:bg-gray-900 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600  leading-tight bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover why thousands of users trust EventScheduler to manage their important events and deadlines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border p-4 rounded-xl border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <div className=" rounded-full flex items-center justify-center mr-4">
                  {testimonial.img && (
                    <img
                      src={testimonial.img}
                      
                      alt={testimonial.name}
                      className="rounded-full h-10 w-10"
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
