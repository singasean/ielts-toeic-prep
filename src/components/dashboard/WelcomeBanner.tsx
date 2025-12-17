import { useExam } from '@/contexts/ExamContext';
import { Target, TrendingUp, Award } from 'lucide-react';

export const WelcomeBanner = () => {
  const { examType } = useExam();

  const stats = [
    { label: 'Tasks Completed', value: '0', icon: Target },
    { label: 'Study Streak', value: '0 days', icon: TrendingUp },
    { label: 'Achievements', value: '0', icon: Award },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl gradient-bg p-6 md:p-8 text-primary-foreground mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Welcome to {examType.toUpperCase()} Prep! 👋
            </h1>
            <p className="text-primary-foreground/80 max-w-lg">
              Master your {examType.toUpperCase()} exam with our comprehensive practice materials. 
              Start with the free tasks and upgrade for full access.
            </p>
          </div>

          <div className="flex gap-4 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
