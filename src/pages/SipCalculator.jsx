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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-12 px-4">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
            📈 SIP Calculator
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
              Calculate 📊
            </button>
          </div>

          {futureValue && (
            <div className="mt-6 space-y-2 text-lg bg-gray-50 p-4 rounded-lg">
              <p>
                🔹 <strong>Future Value:</strong> ₹{futureValue}
              </p>
              <p>
                💸 <strong>Total Invested:</strong> ₹{investedAmount}
              </p>
              <p>
                📈 <strong>Estimated Gain:</strong> ₹{gain}
              </p>
            </div>
          )}

          <div className="mt-8 bg-blue-50 p-4 rounded text-sm text-gray-700">
            <h4 className="font-semibold mb-2">📘 How it works:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>You invest a fixed amount every month (SIP).</li>
              <li>Returns are compounded monthly using your expected rate.</li>
              <li>
                Formula used:{" "}
                <code>
                  FV = P × [ (1 + r)<sup>n</sup> - 1 ] × (1 + r) ÷ r
                </code>
              </li>
              <li>
                Where <strong>P</strong> = Monthly Investment,{" "}
                <strong>r</strong> = Monthly Rate, <strong>n</strong> = Total
                Months.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SipCalculator;
