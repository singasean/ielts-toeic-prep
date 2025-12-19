import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ExamType } from '@/types/exam';
import { ieltsModules, toeicModules, hskModules } from '@/data/examData';

type TaskStatus = 'not-started' | 'in-progress' | 'completed';

interface Progress {
  [moduleId: string]: {
    [taskId: string]: TaskStatus;
  };
}

type ModuleType = typeof ieltsModules[number] | typeof toeicModules[number] | typeof hskModules[number];

interface ExamContextType {
  examType: ExamType;
  setExamType: (type: ExamType) => void;
  modules: ModuleType[];
  progress: Progress;
  updateTaskProgress: (moduleId: string, taskId: string, status: TaskStatus) => void;
  getModuleProgress: (moduleId: string) => number;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [examType, setExamType] = useState<ExamType>('ielts');
  const [progress, setProgress] = useState<Progress>({});

  const modules = examType === 'ielts' ? ieltsModules : examType === 'toeic' ? toeicModules : hskModules;

  const updateTaskProgress = (moduleId: string, taskId: string, status: TaskStatus) => {
    setProgress((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        [taskId]: status,
      },
    }));
  };

  const getModuleProgress = (moduleId: string): number => {
    const moduleProgress = progress[moduleId];
    if (!moduleProgress) return 0;

    const completedTasks = Object.values(moduleProgress).filter(
      (status) => status === 'completed'
    ).length;
    const module = modules.find((m) => m.id === moduleId);
    if (!module) return 0;

    return Math.round((completedTasks / module.totalTasks) * 100);
  };

  return (
    <ExamContext.Provider
      value={{
        examType,
        setExamType,
        modules,
        progress,
        updateTaskProgress,
        getModuleProgress,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export const useExam = (): ExamContextType => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExam must be used within an ExamProvider');
  }
  return context;
};
