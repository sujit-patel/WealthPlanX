// src/pages/InvestmentCalculator.jsx
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InvestmentReturnCalculator from "../components/InvestmentCalculator.jsx";

function InvestmentCalculator() {
  useEffect(() => {
    document.title = "Investment Return Calculator | WealthPlanner";
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            📊 Investment Return Tool
          </h1>
          <p className="text-gray-600 mt-2">
            Estimate your future returns and profit based on investment data.
          </p>
        </div>

        <InvestmentReturnCalculator showTitle={false} />

        <div className="max-w-2xl mx-auto mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">🛠️ How This Tool Works</h2>
          <p className="mb-2">
            You can either:
          </p>
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
      <Footer />
    </>
  );
}

export default InvestmentCalculator;
