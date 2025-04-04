import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 w-full text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 space-y-4 sm:space-y-0">
        {/* Important Pages & Copyright together */}
        <div className="flex flex-col sm:flex-row justify-between w-full items-center sm:items-center">
          {/* Important Pages */}
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-center sm:text-left">
            <Link to="/policy" className="hover:text-gray-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-gray-400">
              Terms of Service
            </Link>

            <Link to="/disclaimer" className="hover:text-gray-400">
              Disclaimer
            </Link>

            <Link to="/support" className="hover:text-gray-400">
              Support
            </Link>
          </ul>

          {/* Copyright Section */}
          <div className="text-gray-500 text-sm mt-4 sm:mt-0 sm:ml-auto">
            © {new Date().getFullYear()} WealthPlanner. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
