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

// IELTS Band type
export type IELTSBand = 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 | 4.0 | 4.5 | 5.0 | 5.5 | 6.0 | 6.5 | 7.0 | 7.5 | 8.0 | 8.5 | 9.0;

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

// Task status type
export type TaskStatus = 'not-started' | 'in-progress' | 'completed';

// Task interface
export interface Task {
  id: string;
  subModuleId: string;
  questionType: string;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  status?: TaskStatus;
  questionCount?: number;
  title?: string;
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

// IELTS Level interface
export interface IELTSLevel {
  band: IELTSBand;
  title: string;
  description: string;
}
