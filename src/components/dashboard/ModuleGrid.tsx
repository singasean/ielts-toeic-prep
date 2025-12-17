import { useExam } from '@/contexts/ExamContext';
import { ModuleCard } from './ModuleCard';

export const ModuleGrid = () => {
  const { modules } = useExam();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {modules.map((module, index) => (
        <ModuleCard key={module.id} module={module} index={index} />
      ))}
    </div>
  );
};
