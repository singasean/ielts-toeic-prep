import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

type ExamType = 'ielts' | 'toeic';

const CalculatorPage = () => {
  const [examType, setExamType] = useState<ExamType>('ielts');
  
  // IELTS scores
  const [listening, setListening] = useState([6.5]);
  const [reading, setReading] = useState([6.5]);
  const [writing, setWriting] = useState([6.5]);
  const [speaking, setSpeaking] = useState([6.5]);

  // TOEIC scores
  const [toeicListening, setToeicListening] = useState([400]);
  const [toeicReading, setToeicReading] = useState([400]);

  const ieltsOverall = ((listening[0] + reading[0] + writing[0] + speaking[0]) / 4).toFixed(1);
  const toeicTotal = toeicListening[0] + toeicReading[0];

  const getBandDescription = (score: number) => {
    if (score >= 8.5) return 'Expert';
    if (score >= 7.5) return 'Very Good';
    if (score >= 6.5) return 'Competent';
    if (score >= 5.5) return 'Modest';
    if (score >= 4.5) return 'Limited';
    return 'Basic';
  };

  const getToeicLevel = (score: number) => {
    if (score >= 905) return 'Proficient';
    if (score >= 785) return 'Advanced';
    if (score >= 605) return 'Intermediate';
    if (score >= 405) return 'Elementary';
    return 'Beginner';
  };

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Score Calculator</h1>
          <p className="text-muted-foreground mt-1">
            Calculate your estimated band score
          </p>
        </div>

        {/* Exam Type Toggle */}
        <div className="inline-flex items-center gap-1 p-1 bg-secondary rounded-lg">
          {(['ielts', 'toeic'] as ExamType[]).map((type) => (
            <button
              key={type}
              onClick={() => setExamType(type)}
              className={cn(
                "px-6 py-2 rounded-md text-sm font-medium transition-all duration-200",
                examType === type
                  ? "gradient-bg text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              )}
            >
              {type.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Score Inputs */}
        <div className="lg:col-span-2 space-y-4">
          {examType === 'ielts' ? (
            <>
              <ScoreSlider 
                label="Listening" 
                value={listening} 
                onChange={setListening}
                min={0}
                max={9}
                step={0.5}
              />
              <ScoreSlider 
                label="Reading" 
                value={reading} 
                onChange={setReading}
                min={0}
                max={9}
                step={0.5}
              />
              <ScoreSlider 
                label="Writing" 
                value={writing} 
                onChange={setWriting}
                min={0}
                max={9}
                step={0.5}
              />
              <ScoreSlider 
                label="Speaking" 
                value={speaking} 
                onChange={setSpeaking}
                min={0}
                max={9}
                step={0.5}
              />
            </>
          ) : (
            <>
              <ScoreSlider 
                label="Listening" 
                value={toeicListening} 
                onChange={setToeicListening}
                min={5}
                max={495}
                step={5}
              />
              <ScoreSlider 
                label="Reading" 
                value={toeicReading} 
                onChange={setToeicReading}
                min={5}
                max={495}
                step={5}
              />
            </>
          )}
        </div>

        {/* Result Card */}
        <div>
          <Card className="sticky top-24">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg">
                {examType === 'ielts' ? 'Overall Band Score' : 'Total Score'}
              </CardTitle>
              <CardDescription>
                {examType === 'ielts' 
                  ? getBandDescription(parseFloat(ieltsOverall))
                  : getToeicLevel(toeicTotal)
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative inline-flex items-center justify-center">
                <div className="h-32 w-32 rounded-full gradient-bg flex items-center justify-center shadow-glow">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {examType === 'ielts' ? ieltsOverall : toeicTotal}
                  </span>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                {examType === 'ielts' ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Listening</span>
                      <span className="font-medium">{listening[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reading</span>
                      <span className="font-medium">{reading[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Writing</span>
                      <span className="font-medium">{writing[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Speaking</span>
                      <span className="font-medium">{speaking[0]}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Listening</span>
                      <span className="font-medium">{toeicListening[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reading</span>
                      <span className="font-medium">{toeicReading[0]}</span>
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

interface ScoreSliderProps {
  label: string;
  value: number[];
  onChange: (value: number[]) => void;
  min: number;
  max: number;
  step: number;
}

const ScoreSlider = ({ label, value, onChange, min, max, step }: ScoreSliderProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-medium text-foreground">{label}</span>
          <span className="text-2xl font-bold gradient-text">{value[0]}</span>
        </div>
        <Slider
          value={value}
          onValueChange={onChange}
          min={min}
          max={max}
          step={step}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
          <span>{min}</span>
          <span>{max}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalculatorPage;
