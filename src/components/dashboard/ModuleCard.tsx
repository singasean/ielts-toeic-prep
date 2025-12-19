import { Link } from 'react-router-dom';
import { 
  Headphones, 
  BookOpen, 
  PenTool, 
  FileText, 
  Mic, 
  ClipboardList, 
  Book, 
  GraduationCap,
  MessageSquare,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useExam } from '@/contexts/ExamContext';

const iconMap: Record<string, LucideIcon> = {
  headphones: Headphones,
  'book-open': BookOpen,
  edit: PenTool,
  'file-text': FileText,
  mic: Mic,
  clipboard: ClipboardList,
  book: Book,
  graduation: GraduationCap,
  message: MessageSquare,
};

interface ModuleCardProps {
  module: {
    id: string;
    title: string;
    description: string;
    icon: string;
    skill: string;
    totalTasks: number;
    completedTasks: number;
  };
  index: number;
}

export const ModuleCard = ({ module, index }: ModuleCardProps) => {
  const { examType } = useExam(); // GET examType from context
  const Icon = iconMap[module.icon] || BookOpen;
  const progressPercent = Math.round((module.completedTasks / module.totalTasks) * 100);

  return (
    <Link 
      to={`/materials/${examType}/${module.skill}`}  // USE examType from context
      className={cn(
        "group block bg-card rounded-xl border border-border p-6 card-hover opacity-0 animate-slide-up",
        `stagger-${(index % 6) + 1}`
      )}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 h-12 w-12 rounded-xl gradient-bg flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {module.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {module.description}
          </p>

          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-muted-foreground">
                {progressPercent}% completed
              </span>
            </div>
            <div className="h-2 bg-progress-bg rounded-full overflow-hidden">
              <div 
                className="h-full progress-gradient rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
