import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExamProvider } from "@/contexts/ExamContext";
import Index from "./pages/Index";
import MaterialsPage from "./pages/MaterialsPage";
import TasksPage from "./pages/TasksPage";
import PracticePage from "./pages/PracticePage";
import AssessmentsPage from "./pages/AssessmentsPage";
import CalculatorPage from "./pages/CalculatorPage";
import HelpPage from "./pages/HelpPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ExamProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/materials/:examType" element={<Index />} />
            <Route path="/materials/:examType/:skill" element={<MaterialsPage />} />
            <Route path="/materials/:examType/:skill/:subModuleId" element={<TasksPage />} />
            <Route path="/practice/:examType/:skill/:subModuleId/:taskId" element={<PracticePage />} />
            <Route path="/practice/:examType/assessment/:assessmentId" element={<PracticePage />} />
            <Route path="/assessments" element={<AssessmentsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ExamProvider>
  </QueryClientProvider>
);

export default App;
