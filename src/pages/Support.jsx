import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { HelpCircle } from "lucide-react";

function Support() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 animate-fadeIn">
          <div className="flex items-center gap-3 text-blue-600 mb-6">
            <HelpCircle size={32} />
            <h1 className="text-3xl font-bold">Support Center</h1>
          </div>

          <p className="text-gray-700 mb-6">
            Welcome to our Support Center. We're here to assist you with any issues, feedback, or questions you might have about our tools and features.
          </p>

          <div className="mt-8 text-gray-700 space-y-4">
            <p>💡 Explore our FAQs and tutorials to learn more about how to get the most out of our tools.</p>
            <p>🛠️ If you notice any bugs or inaccuracies, feel free to report them through the feedback option inside each calculator.</p>
            <p>📚 We're constantly working to improve your experience. Stay tuned for new features and updates!</p>
          </div>

          <div className="mt-8 text-sm text-gray-500 border-t pt-4">
            For anything else, please navigate through the available tools and help sections. Thank you for using WealthPlanner.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Support;
