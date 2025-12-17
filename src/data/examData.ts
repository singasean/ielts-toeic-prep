import { Module, SubModule } from '@/types/exam';

// ============ IELTS MODULES AND SUB-MODULES ============

export const ieltsListeningSubModules: SubModule[] = [
  { id: 'ielts-listening-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 3, completedItems: 0 },
  { id: 'ielts-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 12, completedItems: 0 },
  { id: 'ielts-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 8, completedItems: 0 },
  { id: 'ielts-listening-map-labelling', title: 'Plan, Map, Diagram Labelling', type: 'question-type', questionType: 'diagram-labelling', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-form-completion', title: 'Form, Note, Table, Flow Chart Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'form-completion', totalItems: 5, completedItems: 0 },
];

export const ieltsReadingSubModules: SubModule[] = [
  { id: 'ielts-reading-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 3, completedItems: 0 },
  { id: 'ielts-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 14, completedItems: 0 },
  { id: 'ielts-reading-matching', title: 'Matching Headings', type: 'question-type', questionType: 'matching', totalItems: 8, completedItems: 0 },
  { id: 'ielts-reading-classification', title: 'Classification', type: 'question-type', questionType: 'matching', totalItems: 7, completedItems: 0 },
  { id: 'ielts-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-reading-short-answer', title: 'Short Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-reading-summary', title: 'Summary Completion', type: 'question-type', questionType: 'form-completion', totalItems: 8, completedItems: 0 },
];

export const ieltsWritingTask1SubModules: SubModule[] = [
  { id: 'ielts-writing-task1-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-writing-task1-letter', title: 'Letter Writing', type: 'question-type', questionType: 'short-answer', totalItems: 15, completedItems: 0 },
  { id: 'ielts-writing-task1-diagram', title: 'Diagram Description', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
  { id: 'ielts-writing-task1-process', title: 'Process Description', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-writing-task1-feedback', title: 'Writing Feedback', type: 'question-type', questionType: 'short-answer', totalItems: 5, completedItems: 0 },
];

export const ieltsWritingTask2SubModules: SubModule[] = [
  { id: 'ielts-writing-task2-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-writing-task2-opinion', title: 'Opinion Essays', type: 'question-type', questionType: 'short-answer', totalItems: 20, completedItems: 0 },
  { id: 'ielts-writing-task2-discussion', title: 'Discussion Essays', type: 'question-type', questionType: 'short-answer', totalItems: 15, completedItems: 0 },
  { id: 'ielts-writing-task2-problem-solution', title: 'Problem-Solution Essays', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
  { id: 'ielts-writing-task2-feedback', title: 'Writing Feedback', type: 'question-type', questionType: 'short-answer', totalItems: 8, completedItems: 0 },
];

export const ieltsSpeakingSubModules: SubModule[] = [
  { id: 'ielts-speaking-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-speaking-part1', title: 'Part 1: Introduction', type: 'question-type', questionType: 'short-answer', totalItems: 40, completedItems: 0 },
  { id: 'ielts-speaking-part2', title: 'Part 2: Long Turn', type: 'question-type', questionType: 'short-answer', totalItems: 30, completedItems: 0 },
  { id: 'ielts-speaking-part3', title: 'Part 3: Discussion', type: 'question-type', questionType: 'short-answer', totalItems: 30, completedItems: 0 },
  { id: 'ielts-speaking-feedback', title: 'Speaking Feedback', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

export const ieltsPracticeTestsSubModules: SubModule[] = [
  { id: 'ielts-practice-test1', title: 'Practice Test 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'ielts-practice-test2', title: 'Practice Test 2', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'ielts-practice-test3', title: 'Practice Test 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
];

export const ieltsVocabularySubModules: SubModule[] = [
  { id: 'ielts-vocab-general', title: 'General Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
  { id: 'ielts-vocab-academic', title: 'Academic Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'ielts-vocab-collocations', title: 'Collocations & Phrases', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
];

export const ieltsGrammarSubModules: SubModule[] = [
  { id: 'ielts-grammar-tenses', title: 'Tenses & Aspects', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'ielts-grammar-structures', title: 'Sentence Structures', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'ielts-grammar-errors', title: 'Grammar Errors Practice', type: 'question-type', questionType: 'multiple-choice', totalItems: 35, completedItems: 0 },
];

export const ieltsModules: Module[] = [
  {
    id: 'ielts-listening',
    title: 'Listening',
    icon: 'Headphones',
    skill: 'listening',
    description: 'Master IELTS Listening with comprehensive practice',
    totalTasks: 55,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-reading',
    title: 'Reading',
    icon: 'BookOpen',
    skill: 'reading',
    description: 'Improve your reading comprehension skills',
    totalTasks: 60,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task1',
    title: 'Writing Task 1',
    icon: 'PenTool',
    skill: 'writing-task1',
    description: 'Master formal and semi-formal letters, diagrams, and processes',
    totalTasks: 52,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task2',
    title: 'Writing Task 2',
    icon: 'PenTool',
    skill: 'writing-task2',
    description: 'Learn to write essays on various topics and styles',
    totalTasks: 65,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    icon: 'Mic',
    skill: 'speaking',
    description: 'Prepare for all three parts of the IELTS Speaking test',
    totalTasks: 110,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-practice-tests',
    title: 'Practice Tests',
    icon: 'FileText',
    skill: 'practice-tests',
    description: 'Complete full-length practice tests',
    totalTasks: 120,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-vocabulary',
    title: 'Vocabulary',
    icon: 'BookMarked',
    skill: 'vocabulary',
    description: 'Build your vocabulary for IELTS',
    totalTasks: 150,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-grammar',
    title: 'Grammar',
    icon: 'Type',
    skill: 'grammar',
    description: 'Master essential grammar for IELTS',
    totalTasks: 90,
    completedTasks: 0,
    examType: 'ielts',
  },
];

// ============ TOEIC MODULES AND SUB-MODULES ============

export const toeicListeningSubModules: SubModule[] = [
  { id: 'toeic-listening-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-listening-part1', title: 'Part 1: Photographs', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'toeic-listening-part2', title: 'Part 2: Question-Response', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'toeic-listening-part3', title: 'Part 3: Conversations', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-listening-part4', title: 'Part 4: Talks', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
];

export const toeicReadingSubModules: SubModule[] = [
  { id: 'toeic-reading-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-reading-part5', title: 'Part 5: Incomplete Sentences', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-reading-part6', title: 'Part 6: Text Completion', type: 'question-type', questionType: 'multiple-choice', totalItems: 16, completedItems: 0 },
  { id: 'toeic-reading-part7', title: 'Part 7: Reading Comprehension', type: 'question-type', questionType: 'multiple-choice', totalItems: 54, completedItems: 0 },
];

export const toeicVocabularySubModules: SubModule[] = [
  { id: 'toeic-vocab-business', title: 'Business Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'toeic-vocab-office', title: 'Office & Workplace', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'toeic-vocab-professional', title: 'Professional Communication', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
];

export const toeicPracticeTestsSubModules: SubModule[] = [
  { id: 'toeic-practice-test1', title: 'Practice Test 1', type: 'question-type', questionType: 'multiple-choice', totalItems: 200, completedItems: 0 },
  { id: 'toeic-practice-test2', title: 'Practice Test 2', type: 'question-type', questionType: 'multiple-choice', totalItems: 200, completedItems: 0 },
  { id: 'toeic-practice-test3', title: 'Practice Test 3', type: 'question-type', questionType: 'multiple-choice', totalItems: 200, completedItems: 0 },
];

export const toeicModules: Module[] = [
  {
    id: 'toeic-listening',
    title: 'Listening Comprehension',
    icon: 'Headphones',
    skill: 'listening-comprehension',
    description: 'Master TOEIC Listening (Parts 1-4)',
    totalTasks: 95,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-reading',
    title: 'Reading Comprehension',
    icon: 'BookOpen',
    skill: 'reading-comprehension',
    description: 'Master TOEIC Reading (Parts 5-7)',
    totalTasks: 100,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-vocabulary',
    title: 'Vocabulary',
    icon: 'BookMarked',
    skill: 'vocabulary',
    description: 'Build professional vocabulary for TOEIC',
    totalTasks: 150,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-practice-tests',
    title: 'Practice Tests',
    icon: 'FileText',
    skill: 'practice-tests',
    description: 'Complete full-length TOEIC practice tests',
    totalTasks: 600,
    completedTasks: 0,
    examType: 'toeic',
  },
];

// ============ HELPER FUNCTIONS ============

export const getModuleSubModules = (moduleId: string): SubModule[] => {
  const subModulesMap: Record<string, SubModule[]> = {
    'ielts-listening': ieltsListeningSubModules,
    'ielts-reading': ieltsReadingSubModules,
    'ielts-writing-task1': ieltsWritingTask1SubModules,
    'ielts-writing-task2': ieltsWritingTask2SubModules,
    'ielts-speaking': ieltsSpeakingSubModules,
    'ielts-practice-tests': ieltsPracticeTestsSubModules,
    'ielts-vocabulary': ieltsVocabularySubModules,
    'ielts-grammar': ieltsGrammarSubModules,
    'toeic-listening': toeicListeningSubModules,
    'toeic-reading': toeicReadingSubModules,
    'toeic-vocabulary': toeicVocabularySubModules,
    'toeic-practice-tests': toeicPracticeTestsSubModules,
  };
  return subModulesMap[moduleId] || [];
};

export const getModulesByExamType = (examType: string) => {
  if (examType === 'ielts') return ieltsModules;
  if (examType === 'toeic') return toeicModules;
  return ieltsModules;
};

// ============ HSK SUPPORT (KEEPING EXISTING STRUCTURE) ============

export const HSK_LEVELS = [
  { level: 1, title: 'HSK Level 1', skills: ['listening', 'reading'] },
  { level: 2, title: 'HSK Level 2', skills: ['listening', 'reading'] },
  { level: 3, title: 'HSK Level 3', skills: ['listening', 'reading', 'writing'] },
  { level: 4, title: 'HSK Level 4', skills: ['listening', 'reading', 'writing'] },
  { level: 5, title: 'HSK Level 5', skills: ['listening', 'reading', 'writing'] },
  { level: 6, title: 'HSK Level 6', skills: ['listening', 'reading', 'writing'] },
];

// HSK SubModules
export const hskLevel1SubModules: SubModule[] = [
  { id: 'hsk1-listening-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-listening-match', title: 'Match sentences with pictures', type: 'question-type', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-reading-true-false', title: 'Reading: True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'hsk1-reading-choose', title: 'Reading: Choose the right pictures', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
];

export const hskLevel2SubModules: SubModule[] = [
  { id: 'hsk2-listening-true-false', title: 'True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'hsk2-listening-dialogue', title: 'Dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 15, completedItems: 0 },
  { id: 'hsk2-reading-true-false', title: 'Reading: True or false', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'hsk2-reading-fill-blank', title: 'Reading: Fill in the gap', type: 'question-type', questionType: 'fill-blank', totalItems: 25, completedItems: 0 },
];

export const hskLevel3SubModules: SubModule[] = [
  { id: 'hsk3-listening-dialogue', title: 'Dialogue questions', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'hsk3-reading-comprehension', title: 'Reading comprehension', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'hsk3-writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

export const hskLevel4SubModules: SubModule[] = [
  { id: 'hsk4-listening', title: 'Listening', type: 'question-type', questionType: 'multiple-choice', totalItems: 45, completedItems: 0 },
  { id: 'hsk4-reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 80, completedItems: 0 },
  { id: 'hsk4-writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 15, completedItems: 0 },
];

export const hskLevel5SubModules: SubModule[] = [
  { id: 'hsk5-listening', title: 'Listening', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
  { id: 'hsk5-reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 100, completedItems: 0 },
  { id: 'hsk5-writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 20, completedItems: 0 },
];

export const hskLevel6SubModules: SubModule[] = [
  { id: 'hsk6-listening', title: 'Listening', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'hsk6-reading', title: 'Reading', type: 'question-type', questionType: 'multiple-choice', totalItems: 120, completedItems: 0 },
  { id: 'hsk6-writing', title: 'Writing', type: 'question-type', questionType: 'short-answer', totalItems: 25, completedItems: 0 },
];

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

export const hskModules = [
  {
    id: 'hsk-listening',
    title: 'Listening',
    icon: 'Headphones',
    skill: 'listening',
    description: 'Master HSK Listening with comprehensive practice',
    totalTasks: 200,
    completedTasks: 0,
    examType: 'hsk',
  },
  {
    id: 'hsk-reading',
    title: 'Reading',
    icon: 'BookOpen',
    skill: 'reading',
    description: 'Improve your reading comprehension skills for HSK',
    totalTasks: 300,
    completedTasks: 0,
    examType: 'hsk',
  },
  {
    id: 'hsk-writing',
    title: 'Writing',
    icon: 'PenTool',
    skill: 'writing',
    description: 'Writing practice for HSK levels 3-6',
    totalTasks: 70,
    completedTasks: 0,
    examType: 'hsk',
  },
];
