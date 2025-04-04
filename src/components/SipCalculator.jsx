import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");

  const [futureValue, setFutureValue] = useState(null);
  const [investedAmount, setInvestedAmount] = useState(null);
  const [gain, setGain] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseFloat(years) * 12;

    if (P && r && n) {
      const FV = P * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);
      const totalInvested = P * n;
      const profit = FV - totalInvested;

      setFutureValue(FV.toFixed(2));
      setInvestedAmount(totalInvested.toFixed(2));
      setGain(profit.toFixed(2));
    } else {
      setFutureValue(null);
      setInvestedAmount(null);
      setGain(null);
    }
  };

  return (
    <main className="flex-grow py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          SIP Calculator
        </h2>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="💰 Monthly Investment (₹)"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <input
            type="number"
            placeholder="📊 Expected Annual Return (%)"
            value={annualReturn}
            onChange={(e) => setAnnualReturn(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
          />
          <input
            type="number"
            placeholder="📅 Investment Duration (Years)"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-blue-500"
          />

          <button
            onClick={calculateSIP}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
          >
            Calculate
          </button>
        </div>

        {futureValue && (
          <div className="mt-6 space-y-2 text-lg bg-gray-50 p-4 rounded-lg">
            <p>
              <strong>Future Value:</strong> ₹{futureValue}
            </p>
            <p>
              <strong>Total Invested:</strong> ₹{investedAmount}
            </p>
            <p>
              <strong>Estimated Gain:</strong> ₹{gain}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default SipCalculator;
