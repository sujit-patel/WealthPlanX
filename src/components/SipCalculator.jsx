import React, { useState } from "react";

function SIPWithGSTCalculator({ showTitle = true }) {
  const [mode, setMode] = useState("gst");
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const [years, setYears] = useState("");
  const [gstPercent, setGstPercent] = useState("18");

  const [futureValue, setFutureValue] = useState(null);
  const [investedAmount, setInvestedAmount] = useState(null);
  const [gain, setGain] = useState(null);

  const calculate = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualReturn) / 100 / 12;
    const n = parseFloat(years) * 12;
    const gst = parseFloat(gstPercent) / 100;

    if (!P || !r || !n) return;

    const totalInvested = P * n;
    const FV = P * (((Math.pow(1 + r, n) - 1) * (1 + r)) / r);

    let gainAmount = FV - totalInvested;
    let gainAfterGST = mode === "gst" ? gainAmount * (1 - gst) : gainAmount;

    const finalValue = totalInvested + gainAfterGST;

    setInvestedAmount(totalInvested.toFixed(2));
    setGain(gainAfterGST.toFixed(2));
    setFutureValue(finalValue.toFixed(2));
  };

  return (
    <div className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg">
      {showTitle && (
        <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
          📈 SIP Calculator (with GST)
        </h2>
      )}

      {/* Toggle GST Mode */}
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

      <div className="space-y-3">
        <input
          type="number"
          placeholder="💰 Monthly Investment (₹)"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-green-500"
        />
        <input
          type="number"
          placeholder="📊 Expected Annual Return (%)"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-green-500"
        />
        <input
          type="number"
          placeholder="📅 Investment Duration (Years)"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-green-500"
        />
        {mode === "gst" && (
          <input
            type="number"
            placeholder="GST Rate (%)"
            value={gstPercent}
            onChange={(e) => setGstPercent(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 focus:outline-green-500"
          />
        )}

        <button
          onClick={calculate}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
        >
          Calculate 🔍
        </button>
      </div>

      {futureValue && (
        <div className="mt-6 space-y-2 text-lg">
          <p>
            <strong>📦 Future Value:</strong> ₹{futureValue}
          </p>
          <p>
            <strong>💸 Total Invested:</strong> ₹{investedAmount}
          </p>
          <p>
            <strong>
              📈 Estimated Gain {mode === "gst" && "(After GST)"}:
            </strong>{" "}
            ₹{gain}
          </p>
        </div>
      )}
    </div>
  );
}

export default SIPWithGSTCalculator;
