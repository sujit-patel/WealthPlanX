// src/components/EarningsCalculator.jsx (or wherever you keep reusable components)
import React, { useState } from "react";

function EarningsCalculator({ showTitle = true }) {
  const [targetAmount, setTargetAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [earnings, setEarnings] = useState(null);
  const [dailyFromMonthly, setDailyFromMonthly] = useState(null);
  const [mode, setMode] = useState("day");

  const calculateEarnings = () => {
    if (targetAmount && duration) {
      const amount = parseFloat(targetAmount);
      const time = parseFloat(duration);

      if (time > 0) {
        const result = amount / time;
        setEarnings(result.toFixed(2));

        if (mode === "month") {
          const daily = result / 30;
          setDailyFromMonthly(daily.toFixed(2));
        } else {
          setDailyFromMonthly(null);
        }
      } else {
        setEarnings(null);
        setDailyFromMonthly(null);
      }
    } else {
      setEarnings(null);
      setDailyFromMonthly(null);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg">
      {showTitle && (
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎯 Earnings Goal Calculator
        </h2>
      )}

      {/* Mode Toggle */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setMode("day")}
          className={`px-4 py-2 rounded-full font-medium ${
            mode === "day"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Day Wise
        </button>
        <button
          onClick={() => setMode("month")}
          className={`px-4 py-2 rounded-full font-medium ${
            mode === "month"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Month Wise
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input
          type="number"
          placeholder="💰 Total Target Amount (₹)"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
        />
        <input
          type="number"
          placeholder={
            mode === "day" ? "📅 Number of Days" : "🗓️ Number of Months"
          }
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
        />

        <button
          onClick={calculateEarnings}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          Calculate ✅
        </button>
      </div>

      {/* Results */}
      {earnings && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg text-gray-800">
          <p className="text-lg font-semibold text-center">
            You need to earn <span className="text-blue-700">₹{earnings}</span>{" "}
            per {mode === "day" ? "day" : "month"}.
          </p>

          {mode === "month" && dailyFromMonthly && (
            <p className="text-md text-center mt-2 text-gray-700">
              📅 That’s approx <strong>₹{dailyFromMonthly}</strong> per day
              (30-day month).
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default EarningsCalculator;
