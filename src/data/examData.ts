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
    id: 'ielts-writing',
    title: 'Writing',
    icon: 'PenTool',
    skill: 'writing',
    description: 'Improve your academic writing skills for IELTS Task 1 & 2',
    totalTasks: 30,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    icon: 'Mic',
    skill: 'speaking',
    description: 'Master the IELTS Speaking test with confidence',
    totalTasks: 20,
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
];

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
  { id: 'listening-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-match-sentences', title: 'Match sentences with pictures', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-match-dialogues', title: 'Match dialogues with pictures', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-choose-answer', title: 'Choose the right answer', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'reading-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'reading-choose-pictures', title: 'Choose the right pictures', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'reading-choose-sentences', title: 'Choose the right sentences', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'reading-fill-gap', title: 'Fill in the gap', type: 'question-type', questionType: 'fill-blank', totalItems: 20, completedItems: 0 },
];

export const hskLevel2SubModules: SubModule[] = [
  { id: 'listening-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-match-dialogues', title: 'Match dialogues with pictures', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'listening-short-dialogue', title: 'Short dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'listening-dialogue-questions', title: 'Dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'reading-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'reading-choose-pictures', title: 'Choose the right pictures', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'reading-choose-sentences', title: 'Choose the right sentences', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'reading-fill-gap', title: 'Fill in the gap', type: 'question-type', questionType: 'fill-blank', totalItems: 25, completedItems: 0 },
];

export const hskLevel3SubModules: SubModule[] = [
  { id: 'listening-choose-pictures', title: 'Choose the right pictures', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-short-dialogue', title: 'Short dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'listening-dialogue-questions', title: 'Dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'reading-choose-sentences', title: 'Choose the right sentences', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'reading-fill-gap', title: 'Fill in the gap', type: 'question-type', questionType: 'fill-blank', totalItems: 30, completedItems: 0 },
  { id: 'reading-comprehension', title: 'Reading comprehension', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
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

// IELTS Listening SubModules (for backward compatibility)
export const listeningSubModules: SubModule[] = [
  { id: 'ielts-listening-section-1', title: 'Section 1: Conversation', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-section-2', title: 'Section 2: Monologue', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-section-3', title: 'Section 3: Academic Discussion', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-section-4', title: 'Section 4: Lecture', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
];

// Helper function to get tasks by submodule type
export const getTasksBySubModuleType = (subModuleType: string): Task[] => {
  const tasks: Record<string, Task[]> = {
    'question-type': [
      { id: 'task-1', title: 'Practice Questions', status: 'not-started', questionType: 'multiple-choice', questionCount: 10 },
      { id: 'task-2', title: 'Full Test', status: 'not-started', questionType: 'multiple-choice', questionCount: 40 },
    ],
  };
  return tasks[subModuleType] || [];
};
