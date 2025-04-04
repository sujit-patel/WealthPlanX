import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AlertTriangle, ShieldCheck, Info } from "lucide-react";

function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow  py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 animate-fadeIn">
          <div className="flex items-center gap-3 text-red-600 mb-6">
            <AlertTriangle size={32} />
            <h1 className="text-3xl font-bold">Important Disclaimer</h1>
          </div>

          <p className="text-gray-700 mb-6 text-lg">
            The tools provided on <strong>WealthPlanner</strong> are designed to
            assist you with basic financial planning. However, the results are
            for informational purposes only.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <ShieldCheck className="text-blue-600 mt-1" />
              <p className="text-gray-700">
                We do not collect or store any personal data you input. All
                calculations happen right in your browser.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <Info className="text-yellow-500 mt-1" />
              <p className="text-gray-700">
                Always double-check your financial decisions with a certified
                advisor. These tools do not substitute for professional advice.
              </p>
            </div>
            <div className="flex gap-3 items-start">
              <AlertTriangle className="text-red-500 mt-1" />
              <p className="text-gray-700">
                WealthPlanner is not responsible for any financial loss,
                decision, or outcome based on the use of our calculators.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t pt-4 text-sm text-gray-600">
            By using this site, you acknowledge and agree to the above terms.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Disclaimer;
