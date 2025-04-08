import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorSidebar from "./CalculatorSidebar";

function MoneySavingCalculator() {
  const [goalAmount, setGoalAmount] = useState("");
  const [timeYears, setTimeYears] = useState("");
  const [monthlySalary, setMonthlySalary] = useState("");

  const [monthlySaving, setMonthlySaving] = useState(null);
  const [savingPercent, setSavingPercent] = useState(null);

  const calculateSaving = () => {
    const goal = parseFloat(goalAmount);
    const years = parseFloat(timeYears);
    const salary = parseFloat(monthlySalary);

    if (!goal || !years || !salary) return;

    const totalMonths = years * 12;
    const savingPerMonth = goal / totalMonths;
    const percent = (savingPerMonth / salary) * 100;

    setMonthlySaving(savingPerMonth.toFixed(2));
    setSavingPercent(percent.toFixed(2));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row">
          {/* Sidebar */}
          <CalculatorSidebar />

          {/* Calculator */}
          <div className="flex-grow bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
              💰 Money Saving Goal Calculator
            </h2>

            {/* Inputs */}
            <div className="space-y-4">
              <input
                type="number"
                placeholder="🎯 Goal Amount (₹)"
                value={goalAmount}
                onChange={(e) => setGoalAmount(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
              />
              <input
                type="number"
                placeholder="⏳ Time to Save (Years)"
                value={timeYears}
                onChange={(e) => setTimeYears(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
              />
              <input
                type="number"
                placeholder="👔 Monthly Salary (₹)"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
              />

              <button
                onClick={calculateSaving}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
              >
                Calculate 📊
              </button>
            </div>

            {/* Results */}
            {monthlySaving && (
              <div className="mt-6 space-y-2 text-lg bg-gray-50 p-4 rounded-lg">
                <p>
                  💸 <strong>Monthly Saving Needed:</strong> ₹{monthlySaving}
                </p>
                <p>
                  📊 <strong>Percentage of Salary:</strong> {savingPercent}%
                </p>
              </div>
            )}

            {/* Explanation */}
            <div className="mt-8 bg-blue-50 p-4 rounded text-sm text-gray-700">
              <h4 className="font-semibold mb-2">📘 How this tool works:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  You set a total savings goal and the number of years to reach
                  it.
                </li>
                <li>
                  The calculator divides your goal by the number of months
                  (years × 12).
                </li>
                <li>It tells how much you need to save monthly.</li>
                <li>Also shows what % of your salary you need to save.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MoneySavingCalculator;
