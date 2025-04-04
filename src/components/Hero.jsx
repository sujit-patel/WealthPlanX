import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Calculator, ShieldCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24 text-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-16">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-xl text-center md:text-left"
          >
            <div className="mb-4 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              💡 Smarter Financial Planning
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Finances
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Plan your income, investments, and goals using powerful tools.
              Simplify your financial journey, one calculation at a time.
            </p>

            <a
              href="/calculators"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Try Our Tools 🚀
            </a>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full max-w-md mx-auto"
          >
            <img
              src="/assets/Finance Illustration.svg"
              alt="Finance Illustration"
              className="w-full drop-shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Why Use Our Calculators?
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Built to simplify your money matters. We provide easy-to-use tools
            designed to make financial planning effortless and accurate.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[Calculator, BarChart3, ShieldCheck].map((Icon, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
              >
                <div className="flex justify-center mb-4">
                  <Icon
                    className={`w-10 h-10 ${
                      index === 0
                        ? "text-blue-600"
                        : index === 1
                        ? "text-green-600"
                        : "text-indigo-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {
                    [
                      "Accurate Calculations",
                      "Smart Investment Planning",
                      "100% Free & Secure",
                    ][index]
                  }
                </h3>
                <p className="text-gray-600 text-sm">
                  {
                    [
                      "Get precise estimates for earnings, investments, SIPs, and more. Built on reliable financial formulas.",
                      "From SIPs to gold and returns, plan better with tools that support your wealth journey.",
                      "No login, no data tracking. Use our tools freely and securely—your privacy matters to us.",
                    ][index]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            What Users Are Saying
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Our tools have helped thousands of people make smarter money moves.
            Here's what some of them have to say.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Sujit Patel", "Ujjaval Patel", "Sidharth Patel"].map(
              (name, i) => (
                <motion.div
                  key={name}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={i + 3}
                >
                  <p className="text-gray-700 italic mb-4">
                    {
                      [
                        "“I was struggling to plan my investments. These calculators made it so easy to understand everything.”",
                        "“SIP calculator is amazing. I finally know how much I need to invest to reach my goals.”",
                        "“Clean design, no ads, and super accurate tools. This site is a hidden gem.”",
                      ][i]
                    }
                  </p>
                  <div className="font-semibold text-blue-600">{name}</div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-12 max-w-2xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            We believe financial planning should be simple, smart, and
            stress-free. Here's what sets us apart.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {[
              [
                "✔️ 100% Free Tools",
                "All calculators are completely free with no hidden charges or ads.",
              ],
              [
                "📱 Easy to Use",
                "Simple UI with responsive design — works great on mobile & desktop.",
              ],
              [
                "📊 Smart Planning",
                "Make decisions backed by data. Know your returns, risks, and goals.",
              ],
              [
                "🔐 Secure & Private",
                "We never store your data. Your financial info stays only with you.",
              ],
            ].map(([title, desc], index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
              >
                <h4 className="font-bold text-lg mb-2 text-blue-600">
                  {title}
                </h4>
                <p className="text-gray-600 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
