import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CalculatorSidebar from "./CalculatorSidebar";

function GoldInvement() {
  const [amount, setAmount] = useState("");
  const [goldPrice, setGoldPrice] = useState("");
  const [goldGrams, setGoldGrams] = useState(null);

  const calculateGold = () => {
    const amt = parseFloat(amount);
    const price = parseFloat(goldPrice);

    if (amt > 0 && price > 0) {
      const grams = amt / price;
      setGoldGrams(grams.toFixed(2));
    } else {
      setGoldGrams(null);
    }
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
            <h2 className="text-2xl font-bold text-center mb-6 text-yellow-600">
              🪙 Gold Investment Calculator
            </h2>

            <div className="space-y-4">
              <input
                type="number"
                placeholder="💰 Investment Amount (₹)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-yellow-500"
              />

              <input
                type="number"
                placeholder="📈 Gold Price per Gram (₹)"
                value={goldPrice}
                onChange={(e) => setGoldPrice(e.target.value)}
                className="w-full p-3 rounded border border-gray-300 focus:outline-yellow-500"
              />

              <button
                onClick={calculateGold}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
              >
                Calculate 🧮
              </button>
            </div>

            {goldGrams && (
              <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-center text-lg">
                🧾 You can buy <strong>{goldGrams}g</strong> of gold.
              </div>
            )}

            {/* Tool Explanation */}
            <div className="mt-8 bg-yellow-50 p-4 rounded text-sm text-gray-700">
              <h4 className="font-semibold mb-2">📘 How this tool works:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Enter the total amount you wish to invest in gold.</li>
                <li>Enter the current gold price per gram.</li>
                <li>
                  The calculator will divide the investment amount by the gold
                  price to estimate how much gold (in grams) you can buy.
                </li>
                <li>
                  This helps you plan your gold investments based on market price.
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

export default GoldInvement;
