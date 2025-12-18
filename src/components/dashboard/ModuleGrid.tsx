import { useExam } from '@/contexts/ExamContext';
import { ModuleCard } from './ModuleCard';

interface ModuleGridProps {
  hskLevel?: number;
  ieltsBand?: number;
}

export const ModuleGrid = ({ hskLevel, ieltsBand }: ModuleGridProps) => {
  const { modules } = useExam();
  
  const filteredModules = modules.filter((module) => {
    // Hide Writing module for HSK levels 1-2 only
    if (hskLevel && hskLevel < 3 && module.id === 'hsk-writing') {
      return false;
    }
    
    // You can add IELTS band-based filtering here if needed in the future
    // For example, filter certain modules for lower bands
    // if (ieltsBand && ieltsBand < 4.0 && module.id === 'ielts-advanced') {
    //   return false;
    // }
    
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
