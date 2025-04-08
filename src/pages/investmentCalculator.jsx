import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestmentReturnCalculator from "../components/InvestmentCalculator.jsx";
import CalculatorSidebar from "./CalculatorSidebar.jsx";

function InvestmentCalculator() {
  useEffect(() => {
    document.title = "Investment Return Calculator | WealthPlanner";
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
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
              📊 Investment Return Tool
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Estimate your future returns and profit based on investment data.
            </p>

            <InvestmentReturnCalculator showTitle={false} />

            <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-gray-800 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">🛠️ How This Tool Works</h2>
              <p className="mb-2">You can either:</p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>
                  <strong>Auto Calculate</strong>: Enter return rate and period to see compound growth.
                </li>
                <li>
                  <strong>Manual Profit</strong>: Just enter how much you invested and how much you received.
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

export default InvestmentCalculator;
