import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import InvestmentCalculator from "./pages/investmentCalculator.jsx";
import EarningsCalculator from "./pages/EarningCalculator.jsx";
import Calculators from "./pages/Calculators.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsofService from "./pages/TermsofService.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Support from "./pages/Support.jsx";
import SipCalculator from "./pages/SipCalculator.jsx";
import GoldInvement from "./pages/GoldInvement.jsx";
import MoneySavingCalculator from "./pages/MoneySavingCalculator.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/investment" element={<InvestmentCalculator />}></Route>
          <Route path="/earnings" element={<EarningsCalculator />}></Route>
          <Route path="/calculators" element={<Calculators />}></Route>
          <Route path="/about" element={<Aboutus />}></Route>
          <Route path="/policy" element={<PrivacyPolicy />}></Route>
          <Route path="/terms" element={<TermsofService />}></Route>
          <Route path="/disclaimer" element={<Disclaimer />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/sip" element={<SipCalculator />}></Route>
          <Route path="/gold" element={<GoldInvement />}></Route>
          <Route path="/saving" element={<MoneySavingCalculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
