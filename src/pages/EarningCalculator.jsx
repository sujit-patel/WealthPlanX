import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EarningsCalculator from "../components/EarningsCalculator";
import CalculatorSidebar from "./CalculatorSidebar";

function EarningCalculator() {
  useEffect(() => {
    document.title = "Earnings Goal Calculator | WealthPlanner";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row">
          {/* Sidebar */}
          <CalculatorSidebar />

          {/* Main Content */}
          <div className="flex-grow bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
              🎯 Earnings Goal Calculator
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Calculate how much you need to earn daily or monthly to hit your
              target.
            </p>

            <EarningsCalculator showTitle={false} />

            {/* Explanation */}
            <div className="mt-10 bg-blue-50 p-6 rounded-xl text-sm text-gray-700">
              <h2 className="text-xl font-semibold mb-3">
                📘 How This Tool Works:
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Enter your <strong>total goal amount</strong> (e.g., ₹10,000).
                </li>
                <li>
                  Select if your goal is to be achieved in <strong>days</strong>{" "}
                  or <strong>months</strong>.
                </li>
                <li>
                  Input the number of days or months for the goal timeline.
                </li>
                <li>
                  Click <strong>"Calculate ✅"</strong> to view the
                  daily/monthly earning needed.
                </li>
                <li>
                  If <strong>monthly</strong> is selected, a rough{" "}
                  <strong>daily breakdown</strong> (30-day month) will also
                  show.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default EarningCalculator;
