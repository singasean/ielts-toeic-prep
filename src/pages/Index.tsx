import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { ExamTypeSwitch } from '@/components/dashboard/ExamTypeSwitch';
import { ModuleGrid } from '@/components/dashboard/ModuleGrid';
import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner';
import { useExam } from '@/contexts/ExamContext';

const Index = () => {
  const { examType } = useExam();

  return (
    <DashboardLayout>
      <WelcomeBanner />
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Exam Preparation</h2>
          <p className="text-muted-foreground mt-1">
            Choose a skill to start practicing
          </p>
        </div>
        <ExamTypeSwitch />
      </div>

      <ModuleGrid />
    </DashboardLayout>
  );
};

export default Index;
