import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Lock, EyeOff, FileSignature } from "lucide-react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 animate-fadeIn">
          <div className="flex items-center gap-3 text-purple-600 mb-6">
            <Lock size={32} />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <p className="text-gray-700 mb-4">
            This Privacy Policy explains how <strong>WealthPlanner</strong> collects, uses, and protects your information. By using this website, you agree to our privacy practices outlined below.
          </p>

          <section className="space-y-6 mt-6">
            <div className="flex gap-3 items-start">
              <EyeOff className="text-blue-500 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">1. Data Collection</h2>
                <p className="text-gray-700">
                  We only collect basic, non-identifiable information like tool inputs. We do not collect personal data like name, email, or payment details.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FileSignature className="text-green-500 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">2. Use of Data</h2>
                <p className="text-gray-700">
                  Collected data is used strictly for improving user experience and functionality of our calculators. We do not share your data with third parties.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Lock className="text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">3. Security</h2>
                <p className="text-gray-700">
                  We implement standard security practices to protect the data entered on our platform. No data is stored permanently.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-8 text-sm text-gray-600 border-t pt-4">
            Last updated: April 2025
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
