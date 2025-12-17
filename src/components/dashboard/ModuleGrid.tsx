import { useExam } from '@/contexts/ExamContext';
import { ModuleCard } from './ModuleCard';

export const ModuleGrid = ({ hskLevel }  => {
  const { modules } = useExam();
    const filteredModules = modules.filter((module) => {
    // Hide Writing module for HSK levels 1-2
    if (hskLevel && hskLevel < 3 && module.id === 'hsk-writing') {
      return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredModules.map((module, index) => (
        <ModuleCard key={module.id} module={module} index={index} />
      ))}
    </div>
  );
};
