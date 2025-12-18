import { Module, SubModule } from '@/types/exam';

// ============ IELTS MODULES AND SUB-MODULES ============

// LISTENING - 10 submodules
export const ieltsListeningSubModules: SubModule[] = [
  { id: 'ielts-listening-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 12, completedItems: 0 },
  { id: 'ielts-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 8, completedItems: 0 },
  { id: 'ielts-listening-plan-map-diagram', title: 'Plan/Map/Diagram Labelling', type: 'question-type', questionType: 'diagram-labelling', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-form-completion', title: 'Form Completion', type: 'question-type', questionType: 'form-completion', totalItems: 8, completedItems: 0 },
  { id: 'ielts-listening-note-completion', title: 'Note Completion', type: 'question-type', questionType: 'note-completion', totalItems: 8, completedItems: 0 },
  { id: 'ielts-listening-table-completion', title: 'Table Completion', type: 'question-type', questionType: 'table-completion', totalItems: 8, completedItems: 0 },
  { id: 'ielts-listening-flow-chart-summary', title: 'Flow Chart/Summary Completion', type: 'question-type', questionType: 'flow-chart-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-listening-short-answer', title: 'Short Answer', type: 'question-type', questionType: 'short-answer', totalItems: 5, completedItems: 0 },
];

// READING - 12 submodules
export const ieltsReadingSubModules: SubModule[] = [
  { id: 'ielts-reading-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 14, completedItems: 0 },
  { id: 'ielts-reading-identify-info-tfng', title: 'Identify Information (T/F/NG)', type: 'question-type', questionType: 'identify-info', totalItems: 12, completedItems: 0 },
  { id: 'ielts-reading-identify-claims-ynng', title: 'Identify Writer\'s Views/Claims (Y/N/NG)', type: 'question-type', questionType: 'identify-views', totalItems: 10, completedItems: 0 },
  { id: 'ielts-reading-match-info', title: 'Match Information', type: 'question-type', questionType: 'matching', totalItems: 8, completedItems: 0 },
  { id: 'ielts-reading-match-headings', title: 'Match Headings', type: 'question-type', questionType: 'matching', totalItems: 8, completedItems: 0 },
  { id: 'ielts-reading-match-features', title: 'Match Features', type: 'question-type', questionType: 'matching', totalItems: 6, completedItems: 0 },
  { id: 'ielts-reading-match-sentence-endings', title: 'Match Sentence Endings', type: 'question-type', questionType: 'matching', totalItems: 6, completedItems: 0 },
  { id: 'ielts-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-reading-summary-completion', title: 'Summary/Note/Table/Flow Chart Completion', type: 'question-type', questionType: 'form-completion', totalItems: 8, completedItems: 0 },
  { id: 'ielts-reading-diagram-labelling', title: 'Diagram Label Completion', type: 'question-type', questionType: 'diagram-labelling', totalItems: 6, completedItems: 0 },
  { id: 'ielts-reading-short-answer', title: 'Short Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

// WRITING TASK 1
export const ieltsWritingTask1SubModules: SubModule[] = [
  { id: 'ielts-writing-task1-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-writing-task1-formal-letter', title: 'Formal Letter', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
  { id: 'ielts-writing-task1-semi-formal-letter', title: 'Semi-formal Letter', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
  { id: 'ielts-writing-task1-informal-letter', title: 'Informal Letter', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
];

// WRITING TASK 2
export const ieltsWritingTask2SubModules: SubModule[] = [
  { id: 'ielts-writing-task2-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-writing-task2-opinion', title: 'Opinion Essays', type: 'question-type', questionType: 'short-answer', totalItems: 20, completedItems: 0 },
  { id: 'ielts-writing-task2-discussion', title: 'Discussion Essays', type: 'question-type', questionType: 'short-answer', totalItems: 15, completedItems: 0 },
  { id: 'ielts-writing-task2-problem-solution', title: 'Problem-Solution Essays', type: 'question-type', questionType: 'short-answer', totalItems: 12, completedItems: 0 },
];

// SPEAKING
export const ieltsSpeakingSubModules: SubModule[] = [
  { id: 'ielts-speaking-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'ielts-speaking-part1', title: 'Part 1: Introduction', type: 'question-type', questionType: 'short-answer', totalItems: 40, completedItems: 0 },
  { id: 'ielts-speaking-part2', title: 'Part 2: Long Turn', type: 'question-type', questionType: 'short-answer', totalItems: 30, completedItems: 0 },
  { id: 'ielts-speaking-part3', title: 'Part 3: Discussion', type: 'question-type', questionType: 'short-answer', totalItems: 30, completedItems: 0 },
];

// VOCABULARY
export const ieltsVocabularySubModules: SubModule[] = [
  { id: 'ielts-vocab-general', title: 'General Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
  { id: 'ielts-vocab-academic', title: 'Academic Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 60, completedItems: 0 },
  { id: 'ielts-vocab-collocations', title: 'Collocations & Phrases', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
];

// GRAMMAR
export const ieltsGrammarSubModules: SubModule[] = [
  { id: 'ielts-grammar-tenses', title: 'Tenses & Aspects', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'ielts-grammar-structures', title: 'Sentence Structures', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'ielts-grammar-errors', title: 'Grammar Errors Practice', type: 'question-type', questionType: 'multiple-choice', totalItems: 35, completedItems: 0 },
];

// Main modules list
export const ieltsModules: Module[] = [
  {
    id: 'ielts-listening',
    title: 'Listening',
    icon: 'Headphones',
    skill: 'listening',
    description: 'Master IELTS Listening with comprehensive practice',
    totalTasks: 81,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-reading',
    title: 'Reading',
    icon: 'BookOpen',
    skill: 'reading',
    description: 'Improve your reading comprehension skills',
    totalTasks: 100,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task1',
    title: 'Writing Task 1',
    icon: 'PenTool',
    skill: 'writing-task1',
    description: 'Master formal, semi-formal, and informal letters',
    totalTasks: 38,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-writing-task2',
    title: 'Writing Task 2',
    icon: 'PenTool',
    skill: 'writing-task2',
    description: 'Learn to write essays on various topics and styles',
    totalTasks: 49,
    completedTasks: 0,
    examType: 'ielts',
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    icon: 'Mic',
    skill: 'speaking',
    description: 'Prepare for all three parts of the IELTS Speaking test',
    totalTasks: 102,
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
  { id: 'toeic-listening-part1', title: 'Photographs', type: 'question-type', questionType: 'multiple-choice', totalItems: 6, completedItems: 0 },
  { id: 'toeic-listening-part2', title: 'Question-Response', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'toeic-listening-part3', title: 'Conversations', type: 'question-type', questionType: 'multiple-choice', totalItems: 39, completedItems: 0 },
  { id: 'toeic-listening-part4', title: 'Short Talks', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
];

export const toeicReadingSubModules: SubModule[] = [
  { id: 'toeic-reading-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-reading-part5', title: 'Incomplete Sentences', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-reading-part6', title: 'Text Completion', type: 'question-type', questionType: 'multiple-choice', totalItems: 16, completedItems: 0 },
  { id: 'toeic-reading-part7-single', title: 'Single Passages', type: 'question-type', questionType: 'multiple-choice', totalItems: 29, completedItems: 0 },
  { id: 'toeic-reading-part7-double', title: 'Double Passages', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'toeic-reading-part7-triple', title: 'Triple Passages', type: 'question-type', questionType: 'multiple-choice', totalItems: 15, completedItems: 0 },
];

export const toeicVocabularySubModules: SubModule[] = [
  { id: 'toeic-vocab-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-vocab-business', title: 'Business Vocabulary', type: 'question-type', questionType: 'multiple-choice', totalItems: 50, completedItems: 0 },
  { id: 'toeic-vocab-office', title: 'Office & Workplace', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'toeic-vocab-finance', title: 'Finance & Accounting', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-vocab-marketing', title: 'Marketing & Sales', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-vocab-travel', title: 'Travel & Transportation', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
];

export const toeicGrammarSubModules: SubModule[] = [
  { id: 'toeic-grammar-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-grammar-verb-tenses', title: 'Verb Tenses', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
  { id: 'toeic-grammar-parts-of-speech', title: 'Parts of Speech', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-grammar-prepositions', title: 'Prepositions', type: 'question-type', questionType: 'multiple-choice', totalItems: 20, completedItems: 0 },
  { id: 'toeic-grammar-conjunctions', title: 'Conjunctions', type: 'question-type', questionType: 'multiple-choice', totalItems: 15, completedItems: 0 },
  { id: 'toeic-grammar-word-forms', title: 'Word Forms', type: 'question-type', questionType: 'multiple-choice', totalItems: 25, completedItems: 0 },
];

export const toeicPhrasesIdiomsSubModules: SubModule[] = [
  { id: 'toeic-phrases-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-phrases-common', title: 'Common Business Phrases', type: 'question-type', questionType: 'multiple-choice', totalItems: 40, completedItems: 0 },
  { id: 'toeic-idioms-business', title: 'Business Idioms', type: 'question-type', questionType: 'multiple-choice', totalItems: 35, completedItems: 0 },
  { id: 'toeic-phrasal-verbs', title: 'Phrasal Verbs', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
  { id: 'toeic-collocations', title: 'Common Collocations', type: 'question-type', questionType: 'multiple-choice', totalItems: 30, completedItems: 0 },
];

export const toeicWritingSubModules: SubModule[] = [
  { id: 'toeic-writing-overview', title: 'Overview', type: 'overview', questionType: 'overview', totalItems: 2, completedItems: 0 },
  { id: 'toeic-writing-emails', title: 'Email Writing', type: 'question-type', questionType: 'short-answer', totalItems: 25, completedItems: 0 },
  { id: 'toeic-writing-requests', title: 'Write a Request', type: 'question-type', questionType: 'short-answer', totalItems: 20, completedItems: 0 },
  { id: 'toeic-writing-opinion', title: 'Express an Opinion', type: 'question-type', questionType: 'short-answer', totalItems: 15, completedItems: 0 },
];

export const toeicModules: Module[] = [
  {
    id: 'toeic-listening',
    title: 'Listening Comprehension',
    icon: 'Headphones',
    skill: 'listening-comprehension',
    description: 'Master TOEIC Listening (Parts 1-4)',
    totalTasks: 102,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-reading',
    title: 'Reading Comprehension',
    icon: 'BookOpen',
    skill: 'reading-comprehension',
    description: 'Master TOEIC Reading (Parts 5-7)',
    totalTasks: 102,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-vocabulary',
    title: 'Vocabulary',
    icon: 'BookMarked',
    skill: 'vocabulary',
    description: 'Build professional vocabulary for TOEIC',
    totalTasks: 177,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-grammar',
    title: 'Grammar',
    icon: 'Type',
    skill: 'grammar',
    description: 'Master essential grammar for TOEIC',
    totalTasks: 117,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-phrases-idioms',
    title: 'Phrases & Idioms',
    icon: 'Lightbulb',
    skill: 'phrases-idioms',
    description: 'Learn common business phrases and idioms',
    totalTasks: 137,
    completedTasks: 0,
    examType: 'toeic',
  },
  {
    id: 'toeic-writing',
    title: 'Writing',
    icon: 'PenTool',
    skill: 'writing',
    description: 'Master business writing and email correspondence',
    totalTasks: 62,
    completedTasks: 0,
    examType: 'toeic',
  },
];

// ============ HSK SUPPORT ============

export const HSK_LEVELS = [
  { level: 1, title: 'HSK Level 1', skills: ['listening', 'reading'] },
  { level: 2, title: 'HSK Level 2', skills: ['listening', 'reading'] },
  { level: 3, title: 'HSK Level 3', skills: ['listening', 'reading', 'writing'] },
  { level: 4, title: 'HSK Level 4', skills: ['listening', 'reading', 'writing'] },
  { level: 5, title: 'HSK Level 5', skills: ['listening', 'reading', 'writing'] },
  { level: 6, title: 'HSK Level 6', skills: ['listening', 'reading', 'writing'] },
];

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

// ============ HELPER FUNCTIONS ============

export const getModuleSubModules = (moduleId: string): SubModule[] => {
  const subModulesMap: Record<string, SubModule[]> = {
    'ielts-listening': ieltsListeningSubModules,
    'ielts-reading': ieltsReadingSubModules,
    'ielts-writing-task1': ieltsWritingTask1SubModules,
    'ielts-writing-task2': ieltsWritingTask2SubModules,
    'ielts-speaking': ieltsSpeakingSubModules,
    'ielts-vocabulary': ieltsVocabularySubModules,
    'ielts-grammar': ieltsGrammarSubModules,
    'toeic-listening': toeicListeningSubModules,
    'toeic-reading': toeicReadingSubModules,
    'toeic-vocabulary': toeicVocabularySubModules,
    'toeic-grammar': toeicGrammarSubModules,
    'toeic-phrases-idioms': toeicPhrasesIdiomsSubModules,
    'toeic-writing': toeicWritingSubModules,
  };
  return subModulesMap[moduleId] || [];
};

export const getModulesByExamType = (examType: string) => {
  if (examType === 'ielts') return ieltsModules;
  if (examType === 'toeic') return toeicModules;
  return ieltsModules;
};


export const getTasksBySubModuleType = (subModuleType: string) => {
  const subModuleMap: Record<string, SubModule[]> = {
    'listening': ieltsListeningSubModules,
    'reading': ieltsReadingSubModules,
    'writing-task1': ieltsWritingTask1SubModules,
    'writing-task2': ieltsWritingTask2SubModules,
    'speaking': ieltsSpeakingSubModules,
    'vocabulary': ieltsVocabularySubModules,
    'grammar': ieltsGrammarSubModules,
    'toeic-listening': toeicListeningSubModules,
    'toeic-reading': toeicReadingSubModules,
    'toeic-vocabulary': toeicVocabularySubModules,
    'toeic-grammar': toeicGrammarSubModules,
    'toeic-phrases-idioms': toeicPhrasesIdiomsSubModules,
    'toeic-writing': toeicWritingSubModules,
  };
  return subModuleMap[subModuleType] || [];
};

/*

export const getTasksBySubModuleType = (subModuleType: string) => {
  // This function should return Task[] not SubModule[]
  // For now, return mock tasks based on the submodule
  // You'll need to create actual task data later
  return [];
};

export const generateTasksFromSubModule = (subModule: SubModule) => {
  // Generate mock tasks based on totalItems
  const tasks = [];
  for (let i = 1; i <= subModule.totalItems; i++) {
    tasks.push({
      id: `${subModule.id}-task-${i}`,
      moduleId: subModule.id.split('-')[0] + '-' + subModule.id.split('-')[1], // e.g., "ielts-listening"
      subModuleId: subModule.id,
      title: `${subModule.title} - Task ${i}`,
      description: `Practice task ${i} for ${subModule.title}`,
      difficulty: i <= subModule.totalItems / 3 ? 'easy' : i <= (2 * subModule.totalItems) / 3 ? 'medium' : 'hard',
      questionType: subModule.questionType,
      isCompleted: false,
    });
  }
  return tasks;
};

*/