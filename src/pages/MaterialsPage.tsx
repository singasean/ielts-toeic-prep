import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SubModuleList } from '@/components/module/SubModuleList';
import { Button } from '@/components/ui/button';
import { getModuleSubModules, ieltsModules, toeicModules, hskModules } from '@/data/examData';
import { useExam } from '@/contexts/ExamContext';

const MaterialsPage = () => {
  const { examType, skill } = useParams<{ examType: string; skill: string }>();
  const { examType: contextExamType } = useExam();
  
  // Determine which exam type to use
  const currentExamType = examType || contextExamType;
  
  // Get modules based on exam type
  const modules = 
    currentExamType === 'ielts' ? ieltsModules : 
    currentExamType === 'toeic' ? toeicModules : 
    hskModules;
    
  const currentModule = modules.find(m => m.skill === skill);

  if (!currentModule) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground">Module not found</h2>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">
            Back to Dashboard
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  // Get the current band/level (default to 1.0 for IELTS, 1 for HSK)
  // You can get this from URL params or localStorage
  const ieltsBand = 1.0; // This should come from context or URL params
  const hskLevel = 1;

  // Get the correct submodules based on the module ID and band/level
  const subModules = getModuleSubModules(
    currentModule.id, 
    currentExamType === 'ielts' ? ieltsBand : undefined,
    currentExamType === 'hsk' ? hskLevel : undefined
  );

  return (
    <DashboardLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground uppercase">{currentExamType}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm font-medium text-foreground">{currentModule.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{currentModule.title}</h1>
        <p className="text-muted-foreground">{currentModule.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <span className="text-muted-foreground">
            {subModules.length > 0 
              ? `${subModules.reduce((sum, sm) => sum + sm.totalItems, 0)} total tasks` 
              : `${currentModule.totalTasks} total tasks`}
          </span>
          {currentExamType === 'ielts' && (
            <span className="text-primary font-medium">
              Band {ieltsBand.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      {/* Sub-modules - NOW DYNAMIC! */}
      <SubModuleList 
        subModules={subModules} 
        examType={currentExamType || 'ielts'} 
        skill={skill || 'listening'} 
      />
    </DashboardLayout>
  );
};

export default MaterialsPage;
