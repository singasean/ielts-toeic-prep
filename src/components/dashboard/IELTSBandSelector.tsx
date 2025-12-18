import { useExam } from '@/contexts/ExamContext';
import { IELTS_LEVELS, getIeltsBandLabel } from '@/data/examData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface IELTSBandSelectorProps {
  selectedBand?: number;  // Add this
  onBandChange: (band: number) => void;
}

export const IELTSBandSelector = ({ selectedBand = 1.0, onBandChange }: IELTSBandSelectorProps) => {
  const { examType } = useExam();

  if (examType !== 'ielts') return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            IELTS Band Selection
          </h3>
          <p className="text-purple-100">Choose your target IELTS band score</p>
          <div className="mt-2 text-purple-100">
            📚 Band {selectedBand.toFixed(1)} - listening, reading, writing, speaking
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-white font-medium">Band:</span>
          <Select
            value={selectedBand.toString()}
            onValueChange={(value) => onBandChange(parseFloat(value))}
          >
            <SelectTrigger className="w-[180px] bg-white">
              <SelectValue placeholder="Select band" />
            </SelectTrigger>
            <SelectContent>
              {IELTS_LEVELS.map((level) => (
                <SelectItem key={level.band} value={level.band.toString()}>
                  {getIeltsBandLabel(level.band)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
