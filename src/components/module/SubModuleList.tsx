import { Link } from 'react-router-dom';
import {
  Info,
  Lightbulb,
  CheckSquare,
  List,
  Map,
  Table,
  AlignLeft,
  MessageSquare,
  ChevronRight,
} from 'lucide-react';
import { SubModule } from '@/types/exam';
import { cn } from '@/lib/utils';

const iconMap: Record<string, typeof Info> = {
  'overview': Info,
  'tips': Lightbulb,
  'multiple-choice': CheckSquare,
  'matching': List,
  'diagram-labelling': Map,
  'form-completion': Table,
  'sentence-completion': AlignLeft,
  'short-answer': MessageSquare,
};

interface SubModuleListProps {
  subModules: SubModule[];
  examType: string;
  skill: string;
}

export const SubModuleList = ({ subModules, examType, skill }: SubModuleListProps) => {
  return (
    <div className="space-y-3">
      {subModules.map((subModule, index) => {
        const Icon = iconMap[subModule.questionType || subModule.type] || Info;
        const progressPercent = Math.round((subModule.completedItems / subModule.totalItems) * 100);

        return (
          <Link
            key={subModule.id}
            to={`/materials/${examType}/${skill}/${subModule.id}`}
            className={cn(
              'group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-200 opacity-0 animate-slide-up',
              `stagger-${(index % 6) + 1}`
            )}
          >
            {/* Icon */}
            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Icon className="h-5 w-5" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {subModule.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span>{progressPercent}% completed</span>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block w-24">
                <div className="h-1.5 bg-progress-bg rounded-full overflow-hidden">
                  <div
                    className="h-full progress-gradient rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </Link>
        );
      })}
    </div>
  );
};