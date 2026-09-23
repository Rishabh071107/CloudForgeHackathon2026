import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import HackathonFormat from './components/HackathonFormat';
import Evaluation from './components/Evaluation';
import Eligibility from './components/Eligibility';
import Rules from './components/Rules';
import Registration from './components/Registration';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#18181B] text-[#E4E4E7] font-sans antialiased selection:bg-[#F97316] selection:text-[#18181B] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <EventDetails />
        <HackathonFormat />
        <Evaluation />
        {/* <Eligibility /> */}
        <Rules />
        <Registration />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
