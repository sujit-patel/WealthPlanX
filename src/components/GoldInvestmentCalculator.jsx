import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GoldInvestmentCalculator() {
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
    <div className="max-w-md mx-auto bg-white text-gray-800 p-6 rounded-xl shadow-lg my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🪙 Gold Investment Calculator
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="💰 Investment Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
        />

        <input
          type="number"
          placeholder="📈 Gold Price per Gram (₹)"
          value={goldPrice}
          onChange={(e) => setGoldPrice(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 focus:outline-blue-500"
        />

        <button
          onClick={calculateGold}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold"
        >
          Calculate 🧮
        </button>
      </div>

      {goldGrams && (
        <div className="mt-6 p-4 bg-yellow-100 rounded-lg text-center">
          <p className="text-lg font-medium">
            You can buy <span className="font-bold">{goldGrams}g</span> of gold.
          </p>
        </div>
      )}
    </div>
  );
}

export default GoldInvestmentCalculator;
