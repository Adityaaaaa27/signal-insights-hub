import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import DashboardLayout from "./components/layout/DashboardLayout";
import OperationsOverview from "./pages/OperationsOverview";
import SuccessMetrics from "./pages/SuccessMetrics";
import ScalabilityView from "./pages/ScalabilityView";
import MerchantBehavior from "./pages/MerchantBehavior";
import SignalBiasAnalyzer from "./pages/SignalBiasAnalyzer";
import KitchenLoadMonitor from "./pages/KitchenLoadMonitor";
import SignalQualityExplorer from "./pages/SignalQualityExplorer";
import KPTPredictionPanel from "./pages/KPTPredictionPanel";
import TemporalSimulation from "./pages/TemporalSimulation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<OperationsOverview />} />
            <Route path="/predictions" element={<KPTPredictionPanel />} />
            <Route path="/signal-bias" element={<SignalBiasAnalyzer />} />
            <Route path="/kitchen-load" element={<KitchenLoadMonitor />} />
            <Route path="/merchant-behavior" element={<MerchantBehavior />} />
            <Route path="/signal-quality" element={<SignalQualityExplorer />} />
            <Route path="/scalability" element={<ScalabilityView />} />
            <Route path="/simulation" element={<TemporalSimulation />} />
            <Route path="/success-metrics" element={<SuccessMetrics />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
