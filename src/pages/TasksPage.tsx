import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { TaskList } from '@/components/module/TaskList';
import { Button } from '@/components/ui/button';
import { 
  listeningSubModules, 
  getTasksBySubModuleType 
} from '@/data/examData';

const TasksPage = () => {
  const { examType, skill, subModuleId } = useParams<{ 
    examType: string; 
    skill: string; 
    subModuleId: string 
  }>();

  const subModule = listeningSubModules.find(sm => sm.id === subModuleId);
  
  // Get the correct tasks for this submodule type
  const tasks = subModule ? getTasksBySubModuleType(subModule.type) : [];

  return (
    <DashboardLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <Button variant="ghost" size="sm" asChild>
          <Link to={`/materials/${examType}/${skill}`} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
        </Button>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground uppercase">{examType}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground capitalize">{skill}</span>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm font-medium text-foreground">{subModule?.title}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {subModule?.title || 'Practice Tasks'}
        </h1>
        <p className="text-muted-foreground">
          Complete the tasks below to practice this question type
        </p>
        {subModule && (
          <div className="flex items-center gap-4 mt-4 text-sm">
            <span className="text-muted-foreground">
              {subModule.totalItems} total tasks
            </span>
          </div>
        )}
      </div>

      {/* Tasks */}
      <TaskList 
        tasks={tasks} 
        examType={examType || 'ielts'} 
        skill={skill || 'listening'} 
        subModuleId={subModuleId || ''} 
      />
    </DashboardLayout>
  );
};

export default TasksPage;
