import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SpecialOffers } from './components/SpecialOffers';
import { MenuSection } from './components/MenuSection';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CustomizationModal } from './components/CustomizationModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-['Tajawal',sans-serif] selection:bg-amber-500 selection:text-stone-950">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1">
          <Hero />
          <WhyChooseUs />
          <SpecialOffers />
          <MenuSection />
          <LocationSection />
          <ReviewsSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Modals and Drawers */}
        <CustomizationModal />
        <CartDrawer />
        <OrderTrackerModal />
        <MobileBottomBar />
      </div>
    </CartProvider>
  );
}
