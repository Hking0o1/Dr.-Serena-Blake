
import React from 'react';
import Header from '@/app/components/Header'; // Make sure this file exists: serene-healing-space-next/components/Header.tsx or Header/index.tsx
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Fees from '@/app/components/Fees';
import Testimonials from '@/app/components/Testimonials';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import QuotesOfTheDay from '@/app/components/QuotesOfTheDay';
import Faqs from '@/app/components/Faq';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Fees />
      <QuotesOfTheDay />
      <Contact />
      <Faqs />
      <Footer />
    </div>
  );
};

export default Index;
