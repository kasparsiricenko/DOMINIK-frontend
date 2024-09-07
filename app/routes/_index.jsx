import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfitLink from '../components/ProfitLink';
import ProductRequestLink from '../components/ProductRequestLink';
import YearComparisonLink from '../components/YearComparisonLink';
import IlliquidStockLink from '../components/IlliquidStockLink';
import BasicSeasonalLink from '../components/BasicSeasonalLink';
import MarketingLink from '../components/MarketingLink';
import InvoicingLink from '../components/InvoicingLink';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <Header />

      {/* Main Content with Padding */}
      <main className="flex-grow container mx-auto py-10 px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 mx-auto max-w-[600px]">
          <ProfitLink />
          <ProductRequestLink />
          <YearComparisonLink />
          <IlliquidStockLink />
          <BasicSeasonalLink />
          <MarketingLink />
          <InvoicingLink />
        </div>
      </main>

      <Footer />
    </div>
  );
}