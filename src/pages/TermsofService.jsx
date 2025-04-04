import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollText, ShieldCheck, FileText } from "lucide-react";

function TermsofService() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <Navbar />

      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 animate-fadeIn">
          <div className="flex items-center gap-3 text-blue-600 mb-6">
            <ScrollText size={32} />
            <h1 className="text-3xl font-bold">Terms of Service</h1>
          </div>

          <p className="text-gray-700 mb-4">
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the <strong>WealthPlanner</strong> website. By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <section className="space-y-4 mt-6">
            <div className="flex gap-3 items-start">
              <ShieldCheck className="text-green-600 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">1. User Responsibilities</h2>
                <p className="text-gray-700">
                  You agree to use our tools only for personal and lawful purposes. Any misuse may lead to restriction of access.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <FileText className="text-yellow-500 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">2. Accuracy of Tools</h2>
                <p className="text-gray-700">
                  While we strive to ensure accuracy, we do not guarantee 100% precision. Calculators should not replace expert financial advice.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <ScrollText className="text-red-500 mt-1" />
              <div>
                <h2 className="font-semibold text-lg">3. Changes to Terms</h2>
                <p className="text-gray-700">
                  We reserve the right to update or change our Terms at any time. Continued use of the service means acceptance of any changes.
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

export default TermsofService;
