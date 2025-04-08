import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorSidebar from "./CalculatorSidebar"; // import sidebar

function SipCalculator() {
  const [mode, setMode] = useState("gst");
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [gstPercent, setGstPercent] = useState("18");

  const [futureValue, setFutureValue] = useState(null);
  const [investedAmount, setInvestedAmount] = useState(null);
  const [gain, setGain] = useState(null);
  const [gstAmount, setGstAmount] = useState(null);

  const calculate = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseFloat(years) * 12;
    const gst = parseFloat(gstPercent) / 100;

    if (!P || !r || !n) return;

    const totalInvested = P * n;
    const FV = P * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);

    let gainAmount = FV - totalInvested;
    let gstCut = mode === "gst" ? gainAmount * gst : 0;
    let gainAfterGST = gainAmount - gstCut;

    const finalValue = totalInvested + gainAfterGST;

    setInvestedAmount(totalInvested.toFixed(2));
    setGain(gainAfterGST.toFixed(2));
    setGstAmount(gstCut.toFixed(2));
    setFutureValue(finalValue.toFixed(2));
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
            <h2 className="text-2xl font-bold text-center mb-6 text-green-700">
              📈 SIP Calculator with GST
            </h2>

            {/* Mode Switch */}
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setMode("gst")}
                className={`px-4 py-1 rounded-l-full border ${
                  mode === "gst" ? "bg-green-600 text-white" : "bg-gray-100"
                }`}
              >
                Include GST
              </button>
              <button
                onClick={() => setMode("no-gst")}
                className={`px-4 py-1 rounded-r-full border ${
                  mode === "no-gst" ? "bg-green-600 text-white" : "bg-gray-100"
                }`}
              >
                No GST
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <input
                type="number"
                placeholder="💰 Monthly Investment (₹)"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
              />
              <input
                type="number"
                placeholder="📊 Expected Annual Return (%)"
                value={annualReturn}
                onChange={(e) => setAnnualReturn(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
              />
              <input
                type="number"
                placeholder="📅 Investment Duration (Years)"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
              />
              {mode === "gst" && (
                <input
                  type="number"
                  placeholder="GST Rate (%)"
                  value={gstPercent}
                  onChange={(e) => setGstPercent(e.target.value)}
                  className="w-full p-3 rounded border border-gray-300 focus:outline-green-500"
                />
              )}

              <button
                onClick={calculate}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
              >
                Calculate 📊
              </button>
            </div>

            {/* Results */}
            {futureValue && (
              <div className="mt-6 space-y-2 text-lg bg-gray-50 p-4 rounded-lg">
                <p>
                  🔹 <strong>Future Value:</strong> ₹{futureValue}
                </p>
                <p>
                  💸 <strong>Total Invested:</strong> ₹{investedAmount}
                </p>
                <p>
                  📈{" "}
                  <strong>
                    Estimated Gain {mode === "gst" && "(After GST)"}:
                  </strong>{" "}
                  ₹{gain}
                </p>
                {mode === "gst" && (
                  <p>
                    🧾 <strong>GST Deducted:</strong> ₹{gstAmount}
                  </p>
                )}
              </div>
            )}

            {/* Explanation */}
            <div className="mt-8 bg-green-50 p-4 rounded text-sm text-gray-700">
              <h4 className="font-semibold mb-2">📘 How it works:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>You invest a fixed amount every month as SIP.</li>
                <li>
                  Returns are compounded monthly based on expected return.
                </li>
                <li>
                  Formula used:{" "}
                  <code>
                    FV = P × [ (1 + r)<sup>n</sup> - 1 ] × (1 + r) ÷ r
                  </code>
                </li>
                <li>
                  Where:
                  <ul className="ml-4 list-disc list-inside">
                    <li>
                      <strong>P</strong> = Monthly Investment
                    </li>
                    <li>
                      <strong>r</strong> = Monthly Interest Rate
                    </li>
                    <li>
                      <strong>n</strong> = Total Number of Months
                    </li>
                  </ul>
                </li>
                {mode === "gst" && (
                  <li>
                    Since GST mode is active, the estimated gain is reduced by
                    GST ({gstPercent}%).
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SipCalculator;
