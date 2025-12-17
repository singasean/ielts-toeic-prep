import { Link } from 'react-router-dom';
import { Clock, BarChart3, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Assessment {
  id: string;
  title: string;
  examType: 'ielts' | 'toeic';
  skills: string[];
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  questionCount: number;
}

interface AssessmentCardProps {
  assessment: Assessment;
  index: number;
}

const difficultyColors = {
  Beginner: 'bg-status-success/10 text-status-success',
  Intermediate: 'bg-status-warning/10 text-status-warning',
  Advanced: 'bg-accent/10 text-accent',
};

export const AssessmentCard = ({ assessment, index }: AssessmentCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl border border-border p-6 card-hover opacity-0 animate-slide-up",
        `stagger-${(index % 6) + 1}`
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="uppercase text-xs font-semibold">
              {assessment.examType}
            </Badge>
            <Badge className={cn("text-xs border-0", difficultyColors[assessment.difficulty])}>
              {assessment.difficulty}
            </Badge>
          </div>
          <h3 className="font-semibold text-lg text-foreground">{assessment.title}</h3>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {assessment.skills.map((skill) => (
          <span 
            key={skill}
            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{assessment.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <BarChart3 className="h-4 w-4" />
          <span>{assessment.questionCount} questions</span>
        </div>
      </div>

      <Button 
        variant="gradient" 
        className="w-full gap-2"
        asChild
      >
        <Link to={`/practice/${assessment.examType}/assessment/${assessment.id}`}>
          <Play className="h-4 w-4" />
          Start Assessment
        </Link>
      </Button>
    </div>
  );
};
