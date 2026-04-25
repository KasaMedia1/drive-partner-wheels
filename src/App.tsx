import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Inchiriere from "./pages/Inchiriere.tsx";
import InchiriereCategorie from "./pages/InchiriereCategorie.tsx";
import VehicleDetail from "./pages/VehicleDetail.tsx";
import Flota from "./pages/Flota.tsx";
import CalculatorUber from "./pages/CalculatorUber.tsx";
import CalculatorCurieri from "./pages/CalculatorCurieri.tsx";
import Despre from "./pages/Despre.tsx";
import Contact from "./pages/Contact.tsx";
import Rezerva from "./pages/Rezerva.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/inchiriere" element={<Inchiriere />} />
          <Route path="/inchiriere/:categorie" element={<InchiriereCategorie />} />
          <Route path="/inchiriere/:categorie/:slug" element={<VehicleDetail />} />
          <Route path="/flota" element={<Flota />} />
          <Route path="/calculator-uber" element={<CalculatorUber />} />
          <Route path="/calculator-curieri" element={<CalculatorCurieri />} />
          {/* Legacy redirects */}
          <Route path="/uber-bolt" element={<Navigate to="/calculator-uber" replace />} />
          <Route path="/curieri" element={<Navigate to="/calculator-curieri" replace />} />
          <Route path="/despre" element={<Despre />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rezerva/:id" element={<Rezerva />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
