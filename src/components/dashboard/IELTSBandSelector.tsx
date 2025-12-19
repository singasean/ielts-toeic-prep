import { useExam, CEFRLevel } from '@/contexts/ExamContext';
import { CEFR_LEVELS, getCEFRBandRange } from '@/data/examData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const IELTSBandSelector = () => {
  const { examType, cefrLevel, setCefrLevel } = useExam();

  if (examType !== 'ielts') return null;

  const currentRange = getCEFRBandRange(cefrLevel);

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            IELTS Band Selection
          </h3>
          <p className="text-purple-100">Choose your target CEFR level</p>
          <div className="mt-2 text-purple-100">
            📚 {cefrLevel} Level (Band {currentRange.min} - {currentRange.max}) - listening, reading, writing, speaking
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Level:</span>
          <Select
            value={cefrLevel}
            onValueChange={(value) => setCefrLevel(value as CEFRLevel)}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {CEFR_LEVELS.map((level) => (
                <SelectItem key={level.code} value={level.code}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
