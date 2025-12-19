import { Link } from 'react-router-dom';
import { 
  Play,
  ChevronRight
} from 'lucide-react';
import { Task } from '@/data/examData';
import { cn } from '@/lib/utils';

interface TaskListProps {
  tasks: Task[];
  examType: string;
  skill: string;
  subModuleId?: string;
}

export const TaskList = ({ tasks, examType, skill, subModuleId }: TaskListProps) => {
  return (
    <div className="space-y-2">
      {tasks.map((task, index) => {

        return (
          <Link
            key={task.id}
            to={`/practice/${examType}/${skill}/${subModuleId}/${task.id}`}
            className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border transition-all duration-200 opacity-0 hover:border-primary/50 hover:shadow-md"
            style={{
              animation: `slideIn 0.3s ease-out ${index * 0.05}s forwards`,
            }}
          >
            {/* Status Icon */}
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
              <Play className="h-5 w-5 text-primary" />
            </div>

            {/* Content */}
            <div className="flex items-center flex-1 min-w-0">
              <div className="flex-1">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {task.question}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {task.difficulty} • {task.questionType}
                </p>
              </div>
            </div>

            {/* Action */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Start
              </span>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </Link>
        );
      })}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
