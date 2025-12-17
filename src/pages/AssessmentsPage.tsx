import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { AssessmentCard } from '@/components/assessments/AssessmentCard';
import { cn } from '@/lib/utils';

const assessments = [
  {
    id: 'ielts-full-1',
    title: 'IELTS Full Practice Test 1',
    examType: 'ielts' as const,
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
    duration: '2h 45m',
    difficulty: 'Intermediate' as const,
    questionCount: 80,
  },
  {
    id: 'ielts-full-2',
    title: 'IELTS Full Practice Test 2',
    examType: 'ielts' as const,
    skills: ['Listening', 'Reading', 'Writing', 'Speaking'],
    duration: '2h 45m',
    difficulty: 'Advanced' as const,
    questionCount: 80,
  },
  {
    id: 'ielts-listening-mini',
    title: 'IELTS Listening Mini Test',
    examType: 'ielts' as const,
    skills: ['Listening'],
    duration: '30m',
    difficulty: 'Beginner' as const,
    questionCount: 20,
  },
  {
    id: 'ielts-reading-mini',
    title: 'IELTS Reading Mini Test',
    examType: 'ielts' as const,
    skills: ['Reading'],
    duration: '60m',
    difficulty: 'Intermediate' as const,
    questionCount: 40,
  },
  {
    id: 'toeic-full-1',
    title: 'TOEIC Full Practice Test 1',
    examType: 'toeic' as const,
    skills: ['Listening', 'Reading'],
    duration: '2h',
    difficulty: 'Intermediate' as const,
    questionCount: 200,
  },
  {
    id: 'toeic-full-2',
    title: 'TOEIC Full Practice Test 2',
    examType: 'toeic' as const,
    skills: ['Listening', 'Reading'],
    duration: '2h',
    difficulty: 'Advanced' as const,
    questionCount: 200,
  },
  {
    id: 'toeic-listening-mini',
    title: 'TOEIC Listening Mini Test',
    examType: 'toeic' as const,
    skills: ['Listening'],
    duration: '45m',
    difficulty: 'Beginner' as const,
    questionCount: 100,
  },
  {
    id: 'toeic-reading-mini',
    title: 'TOEIC Reading Mini Test',
    examType: 'toeic' as const,
    skills: ['Reading'],
    duration: '75m',
    difficulty: 'Intermediate' as const,
    questionCount: 100,
  },
];

type FilterType = 'all' | 'ielts' | 'toeic';

const AssessmentsPage = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  const filteredAssessments = assessments.filter(
    (a) => filter === 'all' || a.examType === filter
  );

  const ieltsAssessments = filteredAssessments.filter((a) => a.examType === 'ielts');
  const toeicAssessments = filteredAssessments.filter((a) => a.examType === 'toeic');

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Assessments</h1>
          <p className="text-muted-foreground mt-1">
            Test your skills with full practice tests and mini assessments
          </p>
        </div>

        {/* Filter */}
        <div className="inline-flex items-center gap-1 p-1 bg-secondary rounded-lg">
          {(['all', 'ielts', 'toeic'] as FilterType[]).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize",
                filter === type
                  ? "gradient-bg text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              {type === 'all' ? 'All' : type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* IELTS Section */}
      {(filter === 'all' || filter === 'ielts') && ieltsAssessments.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="h-6 w-1 gradient-bg rounded-full" />
            IELTS Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ieltsAssessments.map((assessment, index) => (
              <AssessmentCard key={assessment.id} assessment={assessment} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* TOEIC Section */}
      {(filter === 'all' || filter === 'toeic') && toeicAssessments.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="h-6 w-1 gradient-bg rounded-full" />
            TOEIC Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toeicAssessments.map((assessment, index) => (
              <AssessmentCard key={assessment.id} assessment={assessment} index={index} />
            ))}
          </div>
        </section>
      )}
    </DashboardLayout>
  );
};

export default AssessmentsPage;
