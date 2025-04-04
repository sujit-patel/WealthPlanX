// src/components/InvestmentReturnCalculator.jsx
import React, { useState } from "react";

function InvestmentReturnCalculator({ showTitle = true }) {
  const [mode, setMode] = useState("manual");
  const [investment, setInvestment] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [years, setYears] = useState("");
  const [finalReceived, setFinalReceived] = useState("");

  const [finalAmount, setFinalAmount] = useState(null);
  const [profit, setProfit] = useState(null);
  const [profitPercent, setProfitPercent] = useState(null);

  const handleCalculation = () => {
    const principal = parseFloat(investment);

    if (mode === "auto" && principal && returnRate && years) {
      const rate = parseFloat(returnRate) / 100;
      const time = parseFloat(years);
      const amount = principal * Math.pow(1 + rate, time);
      const totalProfit = amount - principal;
      const percentProfit = (totalProfit / principal) * 100;

      setFinalAmount(amount.toFixed(2));
      setProfit(totalProfit.toFixed(2));
      setProfitPercent(percentProfit.toFixed(2));
    }

    if (mode === "manual" && principal && finalReceived) {
      const final = parseFloat(finalReceived);
      const totalProfit = final - principal;
      const percentProfit = (totalProfit / principal) * 100;

      setFinalAmount(final.toFixed(2));
      setProfit(totalProfit.toFixed(2));
      setProfitPercent(percentProfit.toFixed(2));
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg">
      {showTitle && (
        <h2 className="text-2xl font-bold mb-4 text-center">
          📊 Investment Return Calculator
        </h2>
      )}

      {/* Toggle Mode */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setMode("auto")}
          className={`px-4 py-1 rounded-l-full border ${
            mode === "auto" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Auto Calculate
        </button>
        <button
          onClick={() => setMode("manual")}
          className={`px-4 py-1 rounded-r-full border ${
            mode === "manual" ? "bg-blue-600 text-white" : "bg-gray-100"
          }`}
        >
          Manual Profit
        </button>
      </div>

      <div className="space-y-3">
        <input
          type="number"
          placeholder="💰 Investment Amount (₹)"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
        />

        {mode === "auto" ? (
          <>
            <input
              type="number"
              placeholder="📊 Annual Return Rate (%)"
              value={returnRate}
              onChange={(e) => setReturnRate(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
            />
            <input
              type="number"
              placeholder="📅 Investment Period (Years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
            />
          </>
        ) : (
          <input
            type="number"
            placeholder="📥 Final Amount Received (₹)"
            value={finalReceived}
            onChange={(e) => setFinalReceived(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
          />
        )}

        <button
          onClick={handleCalculation}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
        >
          Calculate 🔍
        </button>
      </div>

      {finalAmount && (
        <div className="mt-6 space-y-2 text-lg">
          <p>
            <strong>📦 Final Amount:</strong> ₹{finalAmount}
          </p>
          <p>
            <strong>💹 Total Profit:</strong> ₹{profit}
          </p>
          <p>
            <strong>📈 Profit Percentage:</strong> {profitPercent}%
          </p>
        </div>
      )}
    </div>
  );
}

export default InvestmentReturnCalculator;
