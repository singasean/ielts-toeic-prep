import { useExam } from '@/contexts/ExamContext';
import { cn } from '@/lib/utils';

export const ExamTypeSwitch = () => {
  const { examType, setExamType } = useExam();

  return (
    <div className="inline-flex items-center gap-1 p-1 bg-secondary rounded-lg">
      <button
        onClick={() => setExamType('ielts')}
        className={cn(
          "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
          examType === 'ielts'
            ? "gradient-bg text-primary-foreground shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
      >
        IELTS
      </button>
      <button
        onClick={() => setExamType('toeic')}
        className={cn(
          "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
          examType === 'toeic'
            ? "gradient-bg text-primary-foreground shadow-md"
            : "text-muted-foreground hover:text-foreground hover:bg-background/50"
        )}
      >
        TOEIC
      </button>
    </div>
  );
};
