import { useState } from "react";

import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Properties } from "@/components/site/Properties";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Footer } from "@/components/site/Footer";
import { defaultFilters, type Filters } from "@/data";

export default function App() {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const handleSearch = (next: Filters) => {
    setFilters(next);
    requestAnimationFrame(() => {
      document.getElementById("properties")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <div className="min-h-screen bg-canvas">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Properties filters={filters} onReset={() => setFilters(defaultFilters)} />
        <Services />
        <About />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
