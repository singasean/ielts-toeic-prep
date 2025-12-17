export type ExamType = 'ielts' | 'toeic' | 'hsk';

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
  | 'speaking-practice';

export type QuestionType =
  | 'overview'
  | 'tips'
  | 'multiple-choice'
  | 'matching'
  | 'diagram-labelling'
  | 'form-completion'
  | 'sentence-completion'
  | 'short-answer'
  | 'hsk-listening'
  | 'hsk-reading'
  | 'hsk-writing'
  | 'fill-blank';


export type TaskStatus = 'not-started' | 'in-progress' | 'completed';

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

export interface SubModule {
  id: string;
  title: string;
  type: 'overview' | 'tips' | 'question-type';
  questionType?: QuestionType;
  totalItems: number;
  completedItems: number;
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  questionType: QuestionType;
  questionCount: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  instruction: string;
  content: string;
  options?: string[];
  correctAnswer?: string | string[];
}
