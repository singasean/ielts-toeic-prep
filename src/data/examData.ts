import { Module, SubModule, Task, ExamType } from '@/types/exam';

export const ieltsModules: Module[] = [
  {
    id: 'ielts-listening',
    title: 'Listening',
    icon: 'Headphones',
    skill: 'listening',
    description: 'Master IELTS Listening with comprehensive practice',
    totalTasks: 45,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-reading',
    title: 'Reading',
    icon: 'BookOpen',
    skill: 'reading',
    description: 'Improve your reading comprehension skills',
    totalTasks: 40,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task1',
    title: 'Writing Task 1',
    icon: 'PenTool',
    skill: 'writing-task1',
    description: 'Academic and General Training Task 1',
    totalTasks: 30,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task2',
    title: 'Writing Task 2',
    icon: 'FileText',
    skill: 'writing-task2',
    description: 'Essay writing practice and strategies',
    totalTasks: 35,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    icon: 'Mic',
    skill: 'speaking',
    description: 'Speaking practice for all three parts',
    totalTasks: 25,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-practice-tests',
    title: 'Practice Tests',
    icon: 'ClipboardList',
    skill: 'practice-tests',
    description: 'Full-length mock tests',
    totalTasks: 12,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-vocabulary',
    title: 'Vocabulary',
    icon: 'Book',
    skill: 'vocabulary',
    description: 'Academic and General vocabulary building',
    totalTasks: 50,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-grammar',
    title: 'Grammar',
    icon: 'GraduationCap',
    skill: 'grammar',
    description: 'Essential grammar for IELTS success',
    totalTasks: 40,
    completedTasks: 0,
    examType: 'ielts',
  },
];

export const toeicModules: Module[] = [
  {
    id: 'toeic-listening',
    title: 'Listening Comprehension',
    icon: 'Headphones',
    skill: 'listening-comprehension',
    description: 'TOEIC Listening sections 1-4',
    totalTasks: 50,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-reading',
    title: 'Reading Comprehension',
    icon: 'BookOpen',
    skill: 'reading-comprehension',
    description: 'TOEIC Reading sections 5-7',
    totalTasks: 45,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-integrated',
    title: 'Integrated Practice Tests',
    icon: 'ClipboardList',
    skill: 'integrated-tests',
    description: 'Full-length TOEIC practice tests',
    totalTasks: 10,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-vocabulary',
    title: 'Vocabulary',
    icon: 'Book',
    skill: 'vocabulary',
    description: 'Business and workplace vocabulary',
    totalTasks: 60,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-grammar',
    title: 'Grammar',
    icon: 'GraduationCap',
    skill: 'grammar',
    description: 'Grammar essentials for TOEIC',
    totalTasks: 45,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-writing',
    title: 'Writing Practice',
    icon: 'PenTool',
    skill: 'writing-practice',
    description: 'TOEIC Writing section preparation',
    totalTasks: 25,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-speaking',
    title: 'Speaking Practice',
    icon: 'Mic',
    skill: 'speaking-practice',
    description: 'TOEIC Speaking section preparation',
    totalTasks: 25,
    completedTasks: 0,
    examType: 'toeic',
  },
];

// Fixed SubModule definitions with proper typing
export const listeningSubModules: SubModule[] = [
  {
    id: 'overview',
    title: 'Overview',
    type: 'overview',
    totalItems: 4,
    completedItems: 0,
  },
  {
    id: 'tips',
    title: 'Tips and Strategies',
    type: 'tips',
    totalItems: 6,
    completedItems: 0,
  },
  {
    id: 'multiple-choice',
    title: 'Multiple Choice',
    type: 'question-type',
    questionType: 'multiple-choice',
    totalItems: 10,
    completedItems: 0,
  },
  {
    id: 'matching',
    title: 'Matching',
    type: 'question-type',
    questionType: 'matching',
    totalItems: 8,
    completedItems: 0,
  },
  {
    id: 'diagram-labelling',
    title: 'Plan / Map / Diagram Labelling',
    type: 'question-type',
    questionType: 'diagram-labelling',
    totalItems: 6,
    completedItems: 0,
  },
  {
    id: 'form-completion',
    title: 'Form / Note / Table Completion',
    type: 'question-type',
    questionType: 'form-completion',
    totalItems: 10,
    completedItems: 0,
  },
  {
    id: 'sentence-completion',
    title: 'Sentence Completion',
    type: 'question-type',
    questionType: 'sentence-completion',
    totalItems: 8,
    completedItems: 0,
  },
  {
    id: 'short-answer',
    title: 'Short Answer',
    type: 'question-type',
    questionType: 'short-answer',
    totalItems: 6,
    completedItems: 0,
  },
];

// Overview Tasks
export const overviewTasks: Task[] = [
  {
    id: 'overview-1',
    title: 'Overview 1',
    status: 'not-started',
    questionType: 'overview',
    questionCount: 5,
  },
  {
    id: 'overview-2',
    title: 'Overview 2',
    status: 'not-started',
    questionType: 'overview',
    questionCount: 4,
  },
];

// Tips and Strategies Tasks
export const tipsTasks: Task[] = [
  {
    id: 'tips-1',
    title: 'Tips and Strategies 1',
    status: 'not-started',
    questionType: 'tips',
    questionCount: 3,
  },
  {
    id: 'tips-2',
    title: 'Tips and Strategies 2',
    status: 'not-started',
    questionType: 'tips',
    questionCount: 3,
  },
];

// Multiple Choice Tasks
export const multipleChoiceTasks: Task[] = [
  {
    id: 'mc-1',
    title: 'Multiple Choice 1',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
  {
    id: 'mc-2',
    title: 'Multiple Choice 2',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
];

// Matching Tasks
export const matchingTasks: Task[] = [
  {
    id: 'matching-1',
    title: 'Matching 1',
    status: 'not-started',
    questionType: 'matching',
    questionCount: 8,
  },
  {
    id: 'matching-2',
    title: 'Matching 2',
    status: 'not-started',
    questionType: 'matching',
    questionCount: 8,
  },
];

// Diagram Labelling Tasks
export const diagramLabellingTasks: Task[] = [
  {
    id: 'diagram-1',
    title: 'Plan / Map / Diagram Labelling 1',
    status: 'not-started',
    questionType: 'diagram-labelling',
    questionCount: 6,
  },
  {
    id: 'diagram-2',
    title: 'Plan / Map / Diagram Labelling 2',
    status: 'not-started',
    questionType: 'diagram-labelling',
    questionCount: 6,
  },
];

// Form Completion Tasks
export const formCompletionTasks: Task[] = [
  {
    id: 'form-1',
    title: 'Form / Note / Table Completion 1',
    status: 'not-started',
    questionType: 'form-completion',
    questionCount: 10,
  },
  {
    id: 'form-2',
    title: 'Form / Note / Table Completion 2',
    status: 'not-started',
    questionType: 'form-completion',
    questionCount: 10,
  },
];

// Sentence Completion Tasks
export const sentenceCompletionTasks: Task[] = [
  {
    id: 'sentence-1',
    title: 'Sentence Completion 1',
    status: 'not-started',
    questionType: 'sentence-completion',
    questionCount: 8,
  },
  {
    id: 'sentence-2',
    title: 'Sentence Completion 2',
    status: 'not-started',
    questionType: 'sentence-completion',
    questionCount: 8,
  },
];

// Short Answer Tasks
export const shortAnswerTasks: Task[] = [
  {
    id: 'short-1',
    title: 'Short Answer 1',
    status: 'not-started',
    questionType: 'short-answer',
    questionCount: 6,
  },
  {
    id: 'short-2',
    title: 'Short Answer 2',
    status: 'not-started',
    questionType: 'short-answer',
    questionCount: 6,
  },
];

// Mapping function to get tasks by submodule type
export const getTasksBySubModuleType = (subModuleType: string): Task[] => {
  const taskMap: Record<string, Task[]> = {
    overview: overviewTasks,
    tips: tipsTasks,
    'multiple-choice': multipleChoiceTasks,
    matching: matchingTasks,
    'diagram-labelling': diagramLabellingTasks,
    'form-completion': formCompletionTasks,
    'sentence-completion': sentenceCompletionTasks,
    'short-answer': shortAnswerTasks,
  };

  return taskMap[subModuleType] || [];
};

// Keep sampleTasks for backward compatibility
export const sampleTasks: Task[] = [
  {
    id: 'task-1',
    title: 'Practice Set 1',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
  {
    id: 'task-2',
    title: 'Practice Set 2',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
  {
    id: 'task-3',
    title: 'Practice Set 3',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
  {
    id: 'task-4',
    title: 'Practice Set 4',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
  {
    id: 'task-5',
    title: 'Practice Set 5',
    status: 'not-started',
    questionType: 'multiple-choice',
    questionCount: 10,
  },
];

// HSK Configuration
export const HSK_LEVELS = [
  { level: 1, title: 'HSK Level 1', skills: ['listening', 'reading'] },
  { level: 2, title: 'HSK Level 2', skills: ['listening', 'reading'] },
  { level: 3, title: 'HSK Level 3', skills: ['listening', 'reading', 'writing'] },
  { level: 4, title: 'HSK Level 4', skills: ['listening', 'reading', 'writing'] },
  { level: 5, title: 'HSK Level 5', skills: ['listening', 'reading', 'writing'] },
  { level: 6, title: 'HSK Level 6', skills: ['listening', 'reading', 'writing'] },
];

// HSK SubModules by Level
export const hskLevel1SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
];

export const hskLevel2SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
];

export const hskLevel3SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 2, completedItems: 0 },
];

export const hskLevel4SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 3, completedItems: 0 },
];

export const hskLevel5SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 15, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 15, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
  { id: 'writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 3, completedItems: 0 },
];

export const hskLevel6SubModules: SubModule[] = [
  { id: 'listening-section-1', title: 'Listening Section 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'listening-section-2', title: 'Listening Section 2', type: 'question-type', questionType: 'matching', totalItems: 20, completedItems: 0 },
  { id: 'listening-section-3', title: 'Listening Section 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-section-4', title: 'Listening Section 4', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 3, completedItems: 0 },
];

// Helper function to get HSK SubModules by level
export const getHskSubModulesByLevel = (level: number): SubModule[] => {
  const levelModules: Record<number, SubModule[]> = {
    1: hskLevel1SubModules,
    2: hskLevel2SubModules,
    3: hskLevel3SubModules,
    4: hskLevel4SubModules,
    5: hskLevel5SubModules,
    6: hskLevel6SubModules,
  };
  return levelModules[level] || [];
};

// HSK Modules - Using Level 1 as base, user can select different levels via dropdown
export const hskModules: Module[] = [
  {
    id: 'hsk-listening',
    title: 'Listening',
    icon: 'Headphones',
    skill: 'listening',
    description: 'Master HSK Listening with comprehensive practice',
    totalTasks: 50,
    completedTasks: 0,
    examType: 'hsk',
  },
  {
    id: 'hsk-reading',
    title: 'Reading',
    icon: 'BookOpen',
    skill: 'reading',
    description: 'Improve your reading comprehension skills for HSK',
    totalTasks: 50,
    completedTasks: 0,
    examType: 'hsk',
  },
  {
    id: 'hsk-writing',
    title: 'Writing',
    icon: 'PenTool',
    skill: 'writing',
    description: 'Writing practice for HSK levels 3-6',
    totalTasks: 20,
    completedTasks: 0,
    examType: 'hsk',
  },
];





export const getModulesByExamType = (examType: ExamType): Module[] => {
  return examType === 'ielts' ? ieltsModules : examType === 'toeic' ? toeicModules : hskModules;
};
