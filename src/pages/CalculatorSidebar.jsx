import React from "react";
import { Link, useLocation } from "react-router-dom";

const calculators = [
  { name: "📈 Investment Return", path: "/investment" },
  { name: "🎯 Earnings Goal", path: "/earnings" },
  { name: "📆 SIP Calculator", path: "/sip" },
  { name: "🪙 Gold Investment", path: "/gold" },
  { name: "💰 Money Saving", path: "/saving" },
];

function CalculatorSidebar() {
  const location = useLocation();

  return (
    <aside className="w-full sm:w-64 bg-white shadow-lg rounded-xl p-4 mb-6 sm:mb-0 sm:mr-6">
      <h3 className="text-lg font-semibold mb-4 text-blue-700">
        📚 Calculators
      </h3>
      <ul className="space-y-3">
        {calculators.map((calc) => (
          <li key={calc.path}>
            <Link
              to={calc.path}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition ${
                location.pathname === calc.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-100 text-gray-800"
              }`}
            >
              {calc.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CalculatorSidebar;
