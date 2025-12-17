import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { SubModuleList } from '@/components/module/SubModuleList';
import { Button } from '@/components/ui/button';
import { listeningSubModules } from '@/data/examData';
import { ieltsModules, toeicModules } from '@/data/examData';

const MaterialsPage = () => {
  const { examType, skill } = useParams<{ examType: string; skill: string }>();
  const modules = examType === 'ielts' ? ieltsModules : toeicModules;
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
        <span className="text-sm text-muted-foreground uppercase">{examType}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm font-medium text-foreground">{currentModule.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">{currentModule.title}</h1>
        <p className="text-muted-foreground">{currentModule.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <span className="text-muted-foreground">
            {currentModule.totalTasks} total tasks
          </span>
        </div>
      </div>

      {/* Sub-modules */}
      <SubModuleList 
        subModules={listeningSubModules} 
        examType={examType || 'ielts'} 
        skill={skill || 'listening'} 
      />
    </DashboardLayout>
  );
};

export default MaterialsPage;
