// ============ IELTS BANDS AND MODULES ============

export const IELTS_BANDS = [
  1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0,
];

export const IELTS_LEVELS = [
  { band: 1.0, title: 'Band 1.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 1.5, title: 'Band 1.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 2.0, title: 'Band 2.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 2.5, title: 'Band 2.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 3.0, title: 'Band 3.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 3.5, title: 'Band 3.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 4.0, title: 'Band 4.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 4.5, title: 'Band 4.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 5.0, title: 'Band 5.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 5.5, title: 'Band 5.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 6.0, title: 'Band 6.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 6.5, title: 'Band 6.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 7.0, title: 'Band 7.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 7.5, title: 'Band 7.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 8.0, title: 'Band 8.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 8.5, title: 'Band 8.5', skills: ['listening', 'reading', 'writing', 'speaking'] },
  { band: 9.0, title: 'Band 9.0', skills: ['listening', 'reading', 'writing', 'speaking'] },
];

// ============ IELTS BAND-SPECIFIC SUBMODULES ============

// Band 1.0
const ieltsBand1_0ListeningSubModules = [
  { id: 'ielts-1.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_0ReadingSubModules = [
  { id: 'ielts-1.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_0WritingSubModules = [
  { id: 'ielts-1.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_0SpeakingSubModules = [
  { id: 'ielts-1.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 1.5
const ieltsBand1_5ListeningSubModules = [
  { id: 'ielts-1.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_5ReadingSubModules = [
  { id: 'ielts-1.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_5WritingSubModules = [
  { id: 'ielts-1.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand1_5SpeakingSubModules = [
  { id: 'ielts-1.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-1.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 2.0
const ieltsBand2_0ListeningSubModules = [
  { id: 'ielts-2.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_0ReadingSubModules = [
  { id: 'ielts-2.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_0WritingSubModules = [
  { id: 'ielts-2.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_0SpeakingSubModules = [
  { id: 'ielts-2.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 2.5
const ieltsBand2_5ListeningSubModules = [
  { id: 'ielts-2.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_5ReadingSubModules = [
  { id: 'ielts-2.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_5WritingSubModules = [
  { id: 'ielts-2.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand2_5SpeakingSubModules = [
  { id: 'ielts-2.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-2.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 3.0
const ieltsBand3_0ListeningSubModules = [
  { id: 'ielts-3.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_0ReadingSubModules = [
  { id: 'ielts-3.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_0WritingSubModules = [
  { id: 'ielts-3.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_0SpeakingSubModules = [
  { id: 'ielts-3.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 3.5
const ieltsBand3_5ListeningSubModules = [
  { id: 'ielts-3.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_5ReadingSubModules = [
  { id: 'ielts-3.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_5WritingSubModules = [
  { id: 'ielts-3.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand3_5SpeakingSubModules = [
  { id: 'ielts-3.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-3.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 4.0
const ieltsBand4_0ListeningSubModules = [
  { id: 'ielts-4.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_0ReadingSubModules = [
  { id: 'ielts-4.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_0WritingSubModules = [
  { id: 'ielts-4.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_0SpeakingSubModules = [
  { id: 'ielts-4.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 4.5
const ieltsBand4_5ListeningSubModules = [
  { id: 'ielts-4.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_5ReadingSubModules = [
  { id: 'ielts-4.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_5WritingSubModules = [
  { id: 'ielts-4.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand4_5SpeakingSubModules = [
  { id: 'ielts-4.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-4.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 5.0
const ieltsBand5_0ListeningSubModules = [
  { id: 'ielts-5.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_0ReadingSubModules = [
  { id: 'ielts-5.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_0WritingSubModules = [
  { id: 'ielts-5.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_0SpeakingSubModules = [
  { id: 'ielts-5.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 5.5
const ieltsBand5_5ListeningSubModules = [
  { id: 'ielts-5.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_5ReadingSubModules = [
  { id: 'ielts-5.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_5WritingSubModules = [
  { id: 'ielts-5.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand5_5SpeakingSubModules = [
  { id: 'ielts-5.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-5.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 6.0
const ieltsBand6_0ListeningSubModules = [
  { id: 'ielts-6.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_0ReadingSubModules = [
  { id: 'ielts-6.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_0WritingSubModules = [
  { id: 'ielts-6.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_0SpeakingSubModules = [
  { id: 'ielts-6.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 6.5
const ieltsBand6_5ListeningSubModules = [
  { id: 'ielts-6.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_5ReadingSubModules = [
  { id: 'ielts-6.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_5WritingSubModules = [
  { id: 'ielts-6.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand6_5SpeakingSubModules = [
  { id: 'ielts-6.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-6.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 7.0
const ieltsBand7_0ListeningSubModules = [
  { id: 'ielts-7.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_0ReadingSubModules = [
  { id: 'ielts-7.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_0WritingSubModules = [
  { id: 'ielts-7.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_0SpeakingSubModules = [
  { id: 'ielts-7.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 7.5
const ieltsBand7_5ListeningSubModules = [
  { id: 'ielts-7.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_5ReadingSubModules = [
  { id: 'ielts-7.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_5WritingSubModules = [
  { id: 'ielts-7.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand7_5SpeakingSubModules = [
  { id: 'ielts-7.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-7.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 8.0
const ieltsBand8_0ListeningSubModules = [
  { id: 'ielts-8.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_0ReadingSubModules = [
  { id: 'ielts-8.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_0WritingSubModules = [
  { id: 'ielts-8.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_0SpeakingSubModules = [
  { id: 'ielts-8.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 8.5
const ieltsBand8_5ListeningSubModules = [
  { id: 'ielts-8.5-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_5ReadingSubModules = [
  { id: 'ielts-8.5-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_5WritingSubModules = [
  { id: 'ielts-8.5-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand8_5SpeakingSubModules = [
  { id: 'ielts-8.5-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-8.5-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];

// Band 9.0
const ieltsBand9_0ListeningSubModules = [
  { id: 'ielts-9.0-listening-form-note', title: 'Form/Note Completion', type: 'question-type', questionType: 'form-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-short-answer', title: 'Short-Answer', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-matching', title: 'Matching', type: 'question-type', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-multiple-answers', title: 'Multiple Choice (Multiple answers)', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-summary', title: 'Summary Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-sentence', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-listening-table-flow', title: 'Table/Flow-Chart Completion', type: 'question-type', questionType: 'table-completion', totalItems: 10, completedItems: 0 },
];

const ieltsBand9_0ReadingSubModules = [
  { id: 'ielts-9.0-reading-multiple-choice', title: 'Multiple Choice', type: 'question-type', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-tfng', title: 'TFNG', type: 'question-type', questionType: 'true-false-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-ynng', title: 'YNNG (GT)', type: 'question-type', questionType: 'yes-no-not-given', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-matching-headings', title: 'Matching Headings', type: 'question-type', questionType: 'matching-headings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-matching-information', title: 'Matching Information', type: 'question-type', questionType: 'matching-information', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-matching-features', title: 'Matching Features', type: 'question-type', questionType: 'matching-features', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-matching-sentence-endings', title: 'Matching Sentence Endings', type: 'question-type', questionType: 'matching-sentence-endings', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-summary-note-table-flow', title: 'Summary/Note/Table/Flow-Chart Completion', type: 'question-type', questionType: 'summary-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-sentence-completion', title: 'Sentence Completion', type: 'question-type', questionType: 'sentence-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-diagram-label', title: 'Diagram/Label Completion', type: 'question-type', questionType: 'diagram-completion', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-reading-short-answer', title: 'Short-Answer Questions', type: 'question-type', questionType: 'short-answer', totalItems: 10, completedItems: 0 },
];

const ieltsBand9_0WritingSubModules = [
  { id: 'ielts-9.0-writing-graph-chart', title: 'Graph/Chart Description', type: 'task-type', questionType: 'graph-chart-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-writing-process-diagram', title: 'Process Diagram', type: 'task-type', questionType: 'process-diagram', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-writing-map', title: 'Map', type: 'task-type', questionType: 'map-description', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-writing-letter', title: 'Letter Writing', type: 'task-type', questionType: 'letter-writing', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-writing-essay', title: 'Essay', type: 'essay-type', questionType: 'essay-writing', totalItems: 10, completedItems: 0 },
];

const ieltsBand9_0SpeakingSubModules = [
  { id: 'ielts-9.0-speaking-intro-interview', title: 'Intro & Interview', type: 'speaking-part', questionType: 'intro-interview', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-speaking-long-turn', title: 'Long Turn', type: 'speaking-part', questionType: 'long-turn', totalItems: 10, completedItems: 0 },
  { id: 'ielts-9.0-speaking-discussion', title: 'Discussion', type: 'speaking-part', questionType: 'discussion', totalItems: 10, completedItems: 0 },
];


// ============ CEFR LEVELS FOR IELTS ============

export const CEFR_LEVELS = [
  { code: 'B1' as const, label: 'B1 Level (Band 4.0 - 5.0)', bandRange: { min: 4.0, max: 5.0 } },
  { code: 'B2' as const, label: 'B2 Level (Band 5.5 - 6.5)', bandRange: { min: 5.5, max: 6.5 } },
  { code: 'C1' as const, label: 'C1 Level (Band 7.0 - 8.0)', bandRange: { min: 7.0, max: 8.0 } },
  { code: 'C2' as const, label: 'C2 Level (Band 8.5 - 9.0)', bandRange: { min: 8.5, max: 9.0 } },
];

export const getCEFRBandRange = (cefrLevel: 'B1' | 'B2' | 'C1' | 'C2'): { min: number; max: number } => {
  const level = CEFR_LEVELS.find(l => l.code === cefrLevel);
  return level ? level.bandRange : { min: 4.0, max: 5.0 };
};

export const getCEFRLabel = (cefrLevel: 'B1' | 'B2' | 'C1' | 'C2'): string => {
  const level = CEFR_LEVELS.find(l => l.code === cefrLevel);
  return level ? level.label : 'B1 Level';
};

// ============ FUNCTION TO GET SUBMODULES BY BAND AND SKILL ============

export const getIeltsSubModulesByBand = (band: number, skill: string) => {
  const bandKey = band.toFixed(1);
  
  const subModulesMap: Record<string, Record<string, any[]>> = {
    '1.0': { listening: ieltsBand1_0ListeningSubModules, reading: ieltsBand1_0ReadingSubModules, writing: ieltsBand1_0WritingSubModules, speaking: ieltsBand1_0SpeakingSubModules },
    '1.5': { listening: ieltsBand1_5ListeningSubModules, reading: ieltsBand1_5ReadingSubModules, writing: ieltsBand1_5WritingSubModules, speaking: ieltsBand1_5SpeakingSubModules },
    '2.0': { listening: ieltsBand2_0ListeningSubModules, reading: ieltsBand2_0ReadingSubModules, writing: ieltsBand2_0WritingSubModules, speaking: ieltsBand2_0SpeakingSubModules },
    '2.5': { listening: ieltsBand2_5ListeningSubModules, reading: ieltsBand2_5ReadingSubModules, writing: ieltsBand2_5WritingSubModules, speaking: ieltsBand2_5SpeakingSubModules },
    '3.0': { listening: ieltsBand3_0ListeningSubModules, reading: ieltsBand3_0ReadingSubModules, writing: ieltsBand3_0WritingSubModules, speaking: ieltsBand3_0SpeakingSubModules },
    '3.5': { listening: ieltsBand3_5ListeningSubModules, reading: ieltsBand3_5ReadingSubModules, writing: ieltsBand3_5WritingSubModules, speaking: ieltsBand3_5SpeakingSubModules },
    '4.0': { listening: ieltsBand4_0ListeningSubModules, reading: ieltsBand4_0ReadingSubModules, writing: ieltsBand4_0WritingSubModules, speaking: ieltsBand4_0SpeakingSubModules },
    '4.5': { listening: ieltsBand4_5ListeningSubModules, reading: ieltsBand4_5ReadingSubModules, writing: ieltsBand4_5WritingSubModules, speaking: ieltsBand4_5SpeakingSubModules },
    '5.0': { listening: ieltsBand5_0ListeningSubModules, reading: ieltsBand5_0ReadingSubModules, writing: ieltsBand5_0WritingSubModules, speaking: ieltsBand5_0SpeakingSubModules },
    '5.5': { listening: ieltsBand5_5ListeningSubModules, reading: ieltsBand5_5ReadingSubModules, writing: ieltsBand5_5WritingSubModules, speaking: ieltsBand5_5SpeakingSubModules },
    '6.0': { listening: ieltsBand6_0ListeningSubModules, reading: ieltsBand6_0ReadingSubModules, writing: ieltsBand6_0WritingSubModules, speaking: ieltsBand6_0SpeakingSubModules },
    '6.5': { listening: ieltsBand6_5ListeningSubModules, reading: ieltsBand6_5ReadingSubModules, writing: ieltsBand6_5WritingSubModules, speaking: ieltsBand6_5SpeakingSubModules },
    '7.0': { listening: ieltsBand7_0ListeningSubModules, reading: ieltsBand7_0ReadingSubModules, writing: ieltsBand7_0WritingSubModules, speaking: ieltsBand7_0SpeakingSubModules },
    '7.5': { listening: ieltsBand7_5ListeningSubModules, reading: ieltsBand7_5ReadingSubModules, writing: ieltsBand7_5WritingSubModules, speaking: ieltsBand7_5SpeakingSubModules },
    '8.0': { listening: ieltsBand8_0ListeningSubModules, reading: ieltsBand8_0ReadingSubModules, writing: ieltsBand8_0WritingSubModules, speaking: ieltsBand8_0SpeakingSubModules },
    '8.5': { listening: ieltsBand8_5ListeningSubModules, reading: ieltsBand8_5ReadingSubModules, writing: ieltsBand8_5WritingSubModules, speaking: ieltsBand8_5SpeakingSubModules },
    '9.0': { listening: ieltsBand9_0ListeningSubModules, reading: ieltsBand9_0ReadingSubModules, writing: ieltsBand9_0WritingSubModules, speaking: ieltsBand9_0SpeakingSubModules },
  };

  return subModulesMap[bandKey]?.[skill] || [];
};

export const getIeltsBandLabel = (band: number): string => {
  return `Band ${band.toFixed(1)}`;
};

// ============ IELTS MODULES ============

export const ieltsModules = [
  {
    id: 'ielts-listening',
    title: 'Listening',
    description: 'IELTS Listening practice by band score',
    icon: 'headphones',
    skill: 'listening',
    totalTasks: 40,
    completedTasks: 0,
    bgGradient: 'from-blue-500 to-blue-700',
    examType: 'ielts' as const,
  },
  {
    id: 'ielts-reading',
    title: 'Reading',
    description: 'IELTS Reading practice by band score',
    icon: 'book-open',
    skill: 'reading',
    totalTasks: 40,
    completedTasks: 0,
    bgGradient: 'from-green-500 to-green-700',
    examType: 'ielts' as const,
  },
  {
    id: 'ielts-writing',
    title: 'Writing',
    description: 'IELTS Writing (Task 1 & 2) by band score',
    icon: 'edit',
    skill: 'writing',
    totalTasks: 20,
    completedTasks: 0,
    bgGradient: 'from-purple-500 to-purple-700',
    examType: 'ielts' as const,
  },
  {
    id: 'ielts-speaking',
    title: 'Speaking',
    description: 'IELTS Speaking practice by band score',
    icon: 'mic',
    skill: 'speaking',
    totalTasks: 30,
    completedTasks: 0,
    bgGradient: 'from-pink-500 to-pink-700',
    examType: 'ielts' as const,
  },
];

// ============ TOEIC & HSK (UNCHANGED) ============

export const toeicModules = [
  {
    id: 'toeic-listening',
    title: 'Listening',
    description: 'TOEIC Listening Comprehension',
    icon: 'headphones',
    skill: 'listening',
    totalTasks: 100,
    completedTasks: 0,
    bgGradient: 'from-blue-500 to-blue-700',
    examType: 'toeic' as const,
  },
  {
    id: 'toeic-reading',
    title: 'Reading',
    description: 'TOEIC Reading Comprehension',
    icon: 'book-open',
    skill: 'reading',
    totalTasks: 100,
    completedTasks: 0,
    bgGradient: 'from-green-500 to-green-700',
    examType: 'toeic' as const,
  },
];

export const hskModules = [
  {
    id: 'hsk-listening',
    title: 'Listening',
    description: 'HSK Listening Comprehension by level',
    icon: 'headphones',
    skill: 'listening',
    totalTasks: 45,
    completedTasks: 0,
    bgGradient: 'from-blue-500 to-blue-700',
    examType: 'hsk' as const,
  },
  {
    id: 'hsk-reading',
    title: 'Reading',
    description: 'HSK Reading Comprehension by level',
    icon: 'book-open',
    skill: 'reading',
    totalTasks: 45,
    completedTasks: 0,
    bgGradient: 'from-green-500 to-green-700',
    examType: 'hsk' as const,
  },
  {
    id: 'hsk-writing',
    title: 'Writing',
    description: 'HSK Writing (Levels 3-6)',
    icon: 'edit',
    skill: 'writing',
    totalTasks: 30,
    completedTasks: 0,
    bgGradient: 'from-purple-500 to-purple-700',
    examType: 'hsk' as const,
  },
];

// Helper function to get submodules
export const getModuleSubModules = (moduleId: string, ieltsBand?: number, hskLevel?: number) => {
  if (moduleId.startsWith('ielts-') && ieltsBand) {
    const skill = moduleId.replace('ielts-', '');
    return getIeltsSubModulesByBand(ieltsBand, skill);
  }
  return [];
};
// ============ HSK LEVELS ============

export const HSK_LEVELS = [
  { level: 1, title: 'HSK 1', skills: ['listening', 'reading'] },
  { level: 2, title: 'HSK 2', skills: ['listening', 'reading'] },
  { level: 3, title: 'HSK 3', skills: ['listening', 'reading', 'writing'] },
  { level: 4, title: 'HSK 4', skills: ['listening', 'reading', 'writing'] },
  { level: 5, title: 'HSK 5', skills: ['listening', 'reading', 'writing'] },
  { level: 6, title: 'HSK 6', skills: ['listening', 'reading', 'writing'] },
];

export const getHskLevelLabel = (level: number): string => {
  return `HSK ${level}`;
};

// ============ HSK SUBMODULES ============

// HSK Level 1 - Listening
const hskLevel1ListeningSubModules = [
  { id: 'hsk1-listening-part1', title: 'Part 1: Pictures', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-listening-part2', title: 'Part 2: Questions', type: 'part', questionType: 'true-false', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-listening-part3', title: 'Part 3: Dialogues', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-listening-part4', title: 'Part 4: Passages', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
];

// HSK Level 1 - Reading
const hskLevel1ReadingSubModules = [
  { id: 'hsk1-reading-part1', title: 'Part 1: Match Pictures', type: 'part', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-reading-part2', title: 'Part 2: Match Sentences', type: 'part', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'hsk1-reading-part3', title: 'Part 3: Questions', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
];

// HSK Level 2 - Listening
const hskLevel2ListeningSubModules = [
  { id: 'hsk2-listening-part1', title: 'Part 1: Pictures', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'hsk2-listening-part2', title: 'Part 2: Questions', type: 'part', questionType: 'true-false', totalItems: 10, completedItems: 0 },
  { id: 'hsk2-listening-part3', title: 'Part 3: Dialogues', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'hsk2-listening-part4', title: 'Part 4: Passages', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
];

// HSK Level 2 - Reading
const hskLevel2ReadingSubModules = [
  { id: 'hsk2-reading-part1', title: 'Part 1: Match Pictures', type: 'part', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'hsk2-reading-part2', title: 'Part 2: Match Sentences', type: 'part', questionType: 'matching', totalItems: 5, completedItems: 0 },
  { id: 'hsk2-reading-part3', title: 'Part 3: Questions', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'hsk2-reading-part4', title: 'Part 4: Passages', type: 'part', questionType: 'multiple-choice', totalItems: 5, completedItems: 0 },
];

// HSK Level 3+ - Add similar structures for levels 3-6
const hskLevel3ListeningSubModules = [
  { id: 'hsk3-listening-part1', title: 'Part 1: Dialogues', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
  { id: 'hsk3-listening-part2', title: 'Part 2: Long Passages', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
];

const hskLevel3ReadingSubModules = [
  { id: 'hsk3-reading-part1', title: 'Part 1: Match Sentences', type: 'part', questionType: 'matching', totalItems: 10, completedItems: 0 },
  { id: 'hsk3-reading-part2', title: 'Part 2: Fill in Blanks', type: 'part', questionType: 'fill-blank', totalItems: 10, completedItems: 0 },
  { id: 'hsk3-reading-part3', title: 'Part 3: Comprehension', type: 'part', questionType: 'multiple-choice', totalItems: 10, completedItems: 0 },
];

const hskLevel3WritingSubModules = [
  { id: 'hsk3-writing-part1', title: 'Part 1: Sentence Building', type: 'part', questionType: 'short-answer', totalItems: 5, completedItems: 0 },
  { id: 'hsk3-writing-part2', title: 'Part 2: Picture Description', type: 'part', questionType: 'short-answer', totalItems: 5, completedItems: 0 },
];

// Add helper function to get HSK submodules
export const getHskSubModulesByLevel = (level: number, skill: string) => {
  const subModulesMap: Record<number, Record<string, any[]>> = {
    1: { listening: hskLevel1ListeningSubModules, reading: hskLevel1ReadingSubModules },
    2: { listening: hskLevel2ListeningSubModules, reading: hskLevel2ReadingSubModules },
    3: { listening: hskLevel3ListeningSubModules, reading: hskLevel3ReadingSubModules, writing: hskLevel3WritingSubModules },
    // Add 4, 5, 6 as needed
  };

  return subModulesMap[level]?.[skill] || [];
};
// ============ TASK GENERATION ============

export interface Task {
  id: string;
  subModuleId: string;
  questionType: string;
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export const generateTasksFromSubModule = (subModule: any): Task[] => {
  const tasks: Task[] = [];
  
  for (let i = 0; i < subModule.totalItems; i++) {
    tasks.push({
      id: `${subModule.id}-task-${i + 1}`,
      subModuleId: subModule.id,
      questionType: subModule.questionType,
      question: `Question ${i + 1} for ${subModule.title}`,
      options: subModule.questionType === 'multiple-choice' 
        ? ['Option A', 'Option B', 'Option C', 'Option D']
        : undefined,
      correctAnswer: subModule.questionType === 'multiple-choice' 
        ? 'Option A' 
        : 'Sample answer',
      explanation: 'This is a placeholder explanation.',
      difficulty: i < subModule.totalItems / 3 ? 'easy' : i < 2 * subModule.totalItems / 3 ? 'medium' : 'hard',
    });
  }
  
  return tasks;
};