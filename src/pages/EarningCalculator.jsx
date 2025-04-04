// src/pages/EarningCalculator.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EarningsCalculator from "../components/EarningsCalculator";

function EarningCalculator() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        {/* Page Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            🎯 Earnings Goal Tool
          </h1>
          <p className="text-gray-600 mt-2">
            Calculate how much you need to earn daily or monthly to hit your
            target.
          </p>
        </div>

        {/* Calculator Component */}
        <EarningsCalculator showTitle={false} />

        {/* Tool Explanation */}
        <div className="max-w-2xl mx-auto mt-12 bg-blue-50 border border-blue-200 p-6 rounded-xl text-gray-800">
          <h2 className="text-2xl font-semibold mb-4">
            🛠️ How This Tool Works
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>
              Enter your <strong>total target amount</strong> — for example,
              ₹10,000.
            </li>
            <li>
              Choose whether you want to hit the goal in <strong>days</strong>{" "}
              or <strong>months</strong>.
            </li>
            <li>
              Input the number of days or months you want to use to reach your
              goal.
            </li>
            <li>
              Click <strong>“Calculate ✅”</strong> and the tool will tell you
              how much you need to earn per day or month.
            </li>
            <li>
              If you choose <strong>monthly</strong> mode, you’ll also see an
              approximate <strong>daily estimate</strong> based on a 30-day
              month.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EarningCalculator;
