import { Globe, Shield, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 dark:bg-gray-900 border-t dark:border-gray-800 bg-gray-50 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Event Sheduler
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Empowering educators and learners with cutting-edge technology for
              better educational outcomes.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                <Shield className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                <Zap className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Features
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Pricing
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                API
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Documentation
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Help Center
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Contact
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Privacy
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                Terms
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; 2025 Nexdu. All rights reserved. Built with ❤️ for better
            education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
