import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ExamType } from '@/types/exam';
import { ieltsModules, toeicModules, hskModules, getCEFRBandRange } from '@/data/examData';

type TaskStatus = 'not-started' | 'in-progress' | 'completed';

interface Progress {
  [moduleId: string]: {
    [taskId: string]: TaskStatus;
  };
}

type ModuleType = typeof ieltsModules[number] | typeof toeicModules[number] | typeof hskModules[number];

export type CEFRLevel = 'B1' | 'B2' | 'C1' | 'C2';

interface ExamContextType {
  examType: ExamType;
  setExamType: (type: ExamType) => void;
  modules: ModuleType[];
  progress: Progress;
  updateTaskProgress: (moduleId: string, taskId: string, status: TaskStatus) => void;
  getModuleProgress: (moduleId: string) => number;
  ieltsBand: number;
  setIeltsBand: (band: number) => void;
  hskLevel: number;
  setHskLevel: (level: number) => void;
  cefrLevel: CEFRLevel;
  setCefrLevel: (level: CEFRLevel) => void;
}

const ExamContext = createContext<ExamContextType | undefined>(undefined);

export const ExamProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [examType, setExamType] = useState<ExamType>('ielts');
  const [progress, setProgress] = useState<Progress>({});
  
  // Initialize CEFR level from localStorage or default to B1
  const [cefrLevel, setCefrLevelState] = useState<CEFRLevel>(() => {
    const saved = localStorage.getItem('cefrLevel');
    return (saved as CEFRLevel) || 'B1';
  });
  
  // Derive ieltsBand from CEFR level
  const [ieltsBand, setIeltsBandState] = useState<number>(() => {
    const saved = localStorage.getItem('cefrLevel');
    const level = (saved as CEFRLevel) || 'B1';
    const range = getCEFRBandRange(level);
    return range.min; // Use the minimum band of the range
  });
  
  const [hskLevel, setHskLevelState] = useState<number>(() => {
    const saved = localStorage.getItem('hskLevel');
    return saved ? parseInt(saved) : 1;
  });

  // Save to localStorage whenever CEFR level changes
  useEffect(() => {
    localStorage.setItem('cefrLevel', cefrLevel);
    const range = getCEFRBandRange(cefrLevel);
    setIeltsBandState(range.min); // Update band when CEFR changes
  }, [cefrLevel]);

  // Save to localStorage whenever HSK level changes
  useEffect(() => {
    localStorage.setItem('hskLevel', hskLevel.toString());
  }, [hskLevel]);

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

  const setIeltsBand = (band: number) => {
    setIeltsBandState(band);
  };

  const setHskLevel = (level: number) => {
    setHskLevelState(level);
  };

  const setCefrLevel = (level: CEFRLevel) => {
    setCefrLevelState(level);
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
        ieltsBand,
        setIeltsBand,
        hskLevel,
        setHskLevel,
        cefrLevel,
        setCefrLevel,
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
