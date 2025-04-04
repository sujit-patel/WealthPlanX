import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import InvestmentCalculator from "../components/InvestmentCalculator.jsx";
import EarningsCalculator from "../components/EarningsCalculator.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import SipCalculator from "../components/SipCalculator.jsx";
import GoldInvestmentCalculator from "../components/GoldInvestmentCalculator.jsx";

function Calculators() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-between flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-10">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            All Financial Calculators 🧮
          </h2>
          <p className="text-lg text-gray-600">
            Easily calculate returns, earnings, and more!
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Investment Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📈 Investment Return
            </h3>
            <InvestmentCalculator showExplanation={false} inHero={true} />
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/investment")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Visit Page
              </button>
            </div>
          </motion.div>

          {/* Earnings Calculator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              🎯 Earnings Goal
            </h3>
            <EarningsCalculator showExplanation={false} inHero={true} />
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/earnings")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Visit Page
              </button>
            </div>
          </motion.div>

          {/* SIP Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📈 SIP Calculator
            </h3>
            <SipCalculator showExplanation={false} inHero={true} />
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/sip")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Visit Page
              </button>
            </div>
          </motion.div>

          {/* Gold Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white p-6 rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              📈 Gold Calculator
            </h3>
            <GoldInvestmentCalculator showExplanation={false} inHero={true} />
            <div className="text-right mt-4">
              <button
                onClick={() => navigate("/gold")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition font-medium"
              >
                Visit Page
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Calculators;
