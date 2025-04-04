import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Sparkles, ShieldCheck, BarChart3, Smartphone } from "lucide-react";

function Aboutus() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50">
      <Navbar />

      <main className="flex-grow py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-blue-700 mb-6">
            About <span className="text-blue-500">WealthPlanner</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            💡 At <strong>WealthPlanner</strong>, we believe financial clarity
            should be simple, smart, and accessible for everyone. From
            goal-setting to investment returns — our tools guide you every step
            of the way.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3 text-blue-600 font-semibold">
                <Sparkles size={24} />
                Effortless Tools
              </div>
              <p className="text-gray-600">
                We design intuitive calculators that give instant insights — no
                learning curve required.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3 text-green-600 font-semibold">
                <ShieldCheck size={24} />
                Privacy-First Approach
              </div>
              <p className="text-gray-600">
                No signups. No data storage. You stay in full control of your
                financial planning.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3 text-purple-600 font-semibold">
                <BarChart3 size={24} />
                Insight-Driven
              </div>
              <p className="text-gray-600">
                Whether it’s daily earnings or long-term investments, we give
                you the numbers that matter.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3 text-pink-600 font-semibold">
                <Smartphone size={24} />
                Mobile-Friendly
              </div>
              <p className="text-gray-600">
                Our platform is fully responsive — plan your finances on the go
                from any device.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              🎯 Our Mission
            </h2>
            <p className="text-md text-gray-600 max-w-2xl mx-auto">
              To empower individuals with clear, quick, and helpful financial
              tools that drive smarter money decisions — without complexity or
              cost.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Aboutus;
