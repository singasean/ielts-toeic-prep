'use client';

import React, { useState } from 'react';
import { useExam } from '@/contexts/ExamContext';
import { HSK_LEVELS, getHskSubModulesByLevel } from '@/data/examData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const HSKLevelSelector: React.FC = () => {
  const { examType } = useExam();
  const [selectedLevel, setSelectedLevel] = useState<number>(1);

  // Only show for HSK exam type
  if (examType !== 'hsk') {
    return null;
  }

  const currentLevel = HSK_LEVELS.find(l => l.level === selectedLevel);

  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-semibold text-lg">HSK Level Selection</h3>
          <p className="text-purple-100 text-sm mt-1">Choose your HSK proficiency level</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-semibold">Level:</span>
          <Select value={String(selectedLevel)} onValueChange={(val) => { setSelectedLevel(Number(val)); onLevelChange?.(Number(val)); }}>
                    <SelectTrigger className="w-32 bg-white border-0">
                                  <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {HSK_LEVELS.map((level) => (
                <SelectItem key={level.level} value={String(level.level)}>
                  <span className="font-semibold">HSK {level.level}</span>
                </SelectItem>
            ))
                    </SelectContent>

          </Select>
        </div>
      </div>
      {currentLevel && (
        <div className="mt-3 text-white text-sm">
          <p>📚 {currentLevel.title} - {currentLevel.skills.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default HSKLevelSelector;
