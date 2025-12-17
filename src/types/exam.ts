// Skill types for different modules
export type SkillType = 
  | 'listening' 
  | 'reading' 
  | 'writing-task1' 
  | 'writing-task2' 
  | 'writing'
  | 'speaking' 
  | 'practice-tests' 
  | 'vocabulary' 
  | 'grammar'
  | 'writing-feedback'
  | 'speaking-feedback'
  | 'listening-comprehension'
  | 'reading-comprehension'
  | 'integrated-tests'
  | 'writing-practice'
  | 'speaking-practice'
  | 'phrases-idioms';

// Question types for tasks
export type QuestionType =
  | 'multiple-choice'
  | 'true-false-ng'
  | 'yes-no-ng'
  | 'matching'
  | 'sentence-completion'
  | 'form-completion'
  | 'note-completion'
  | 'table-completion'
  | 'flow-chart-completion'
  | 'diagram-labelling'
  | 'short-answer'
  | 'overview'
  | 'fill-blank'
  | 'identify-info'
  | 'identify-views';

// Sub-module types
export type SubModuleType = 
  | 'overview' 
  | 'question-type' 
  | 'task-type' 
  | 'essay-type' 
  | 'speaking-part'
  | 'practice-test'
  | 'vocabulary'
  | 'grammar';

// Exam types
export type ExamType = 'ielts' | 'toeic' | 'hsk';

// Sub-module interface
export interface SubModule {
  id: string;
  title: string;
  type: SubModuleType;
  questionType: QuestionType;
  totalItems: number;
  completedItems: number;
}

// Module interface
export interface Module {
  id: string;
  title: string;
  icon: string;
  skill: SkillType;
  description: string;
  totalTasks: number;
  completedTasks: number;
  examType: ExamType;
}

// Task interface
export interface Task {
  id: string;
  moduleId: string;
  subModuleId: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  completed: boolean;
  score?: number;
}

// User progress interface
export interface UserProgress {
  moduleId: string;
  subModuleId: string;
  taskId: string;
  completed: boolean;
  score?: number;
  completedAt?: Date;
}

// HSK Level interface
export interface HSKLevel {
  level: number;
  title: string;
  skills: string[];
}
