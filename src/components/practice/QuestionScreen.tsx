import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  CheckCircle,
  XCircle,
  Volume2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { QuestionType } from '@/types/exam';
import { cn } from '@/lib/utils';

interface QuestionScreenProps {
  examType: string;
  skill: string;
  questionType: QuestionType;
  currentQuestion: number;
  totalQuestions: number;
}

const sampleQuestions = [
  {
    id: '1',
    instruction: 'Choose the correct answer based on the audio recording.',
    passage: 'The speaker discusses the importance of renewable energy sources in modern society. According to the recording, which of the following statements is true about solar energy adoption?',
    options: [
      'Solar energy is too expensive for residential use',
      'Solar panel efficiency has improved significantly over the past decade',
      'Solar energy can only be used in tropical regions',
      'Solar installations require minimal maintenance'
    ],
  },
  {
    id: '2',
    instruction: 'Listen to the conversation and answer the question.',
    passage: 'In the dialogue between the two colleagues, what is the main concern expressed about the upcoming project deadline?',
    options: [
      'Lack of team members',
      'Insufficient budget allocation',
      'Time constraints for testing',
      'Missing client requirements'
    ],
  },
];

export const QuestionScreen = ({
  examType,
  skill,
  questionType,
  currentQuestion,
  totalQuestions,
}: QuestionScreenProps) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [textAnswer, setTextAnswer] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = sampleQuestions[currentQuestion % sampleQuestions.length];
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setSelectedAnswer('');
      setTextAnswer('');
      setIsSubmitted(false);
      // In a real app, this would navigate to the next question
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setSelectedAnswer('');
      setTextAnswer('');
      setIsSubmitted(false);
      // In a real app, this would navigate to the previous question
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(-1)}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Exit
              </Button>
              <div className="hidden sm:block">
                <span className="text-sm font-medium text-foreground">
                  {examType.toUpperCase()} {skill.charAt(0).toUpperCase() + skill.slice(1)}
                </span>
                <span className="text-muted-foreground mx-2">•</span>
                <span className="text-sm text-muted-foreground capitalize">
                  {questionType.replace('-', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>15:00</span>
              </div>
              <div className="text-sm font-medium">
                Question {currentQuestion + 1} of {totalQuestions}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="pb-2">
            <Progress value={progressPercent} className="h-1" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left: Question Content */}
            <div className="space-y-4">
              {/* Audio Player Placeholder */}
              {skill === 'listening' && (
                <div className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center gap-4">
                    <Button variant="gradient" size="icon" className="h-12 w-12 rounded-full">
                      <Volume2 className="h-5 w-5" />
                    </Button>
                    <div className="flex-1">
                      <div className="h-2 bg-progress-bg rounded-full overflow-hidden">
                        <div className="h-full w-1/3 progress-gradient rounded-full" />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1:23</span>
                        <span>4:15</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Instruction */}
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-sm font-medium text-foreground">
                  {question.instruction}
                </p>
              </div>

              {/* Passage/Content */}
              <div className="bg-card rounded-xl border border-border p-6">
                <p className="text-foreground leading-relaxed">
                  {question.passage}
                </p>
              </div>
            </div>

            {/* Right: Answer Area */}
            <div className="space-y-4">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-medium text-foreground mb-4">Select your answer:</h3>

                {(questionType === 'multiple-choice') && (
                  <RadioGroup 
                    value={selectedAnswer} 
                    onValueChange={setSelectedAnswer}
                    className="space-y-3"
                    disabled={isSubmitted}
                  >
                    {question.options?.map((option, idx) => (
                      <div 
                        key={idx}
                        className={cn(
                          "flex items-start gap-3 p-4 rounded-lg border transition-all cursor-pointer",
                          selectedAnswer === option 
                            ? "border-primary bg-primary/5" 
                            : "border-border hover:border-primary/30",
                          isSubmitted && idx === 1 && "border-status-success bg-status-success/5",
                          isSubmitted && selectedAnswer === option && idx !== 1 && "border-destructive bg-destructive/5"
                        )}
                      >
                        <RadioGroupItem value={option} id={`option-${idx}`} className="mt-1" />
                        <Label 
                          htmlFor={`option-${idx}`} 
                          className="text-sm text-foreground cursor-pointer flex-1"
                        >
                          <span className="font-medium text-primary mr-2">
                            {String.fromCharCode(65 + idx)}.
                          </span>
                          {option}
                        </Label>
                        {isSubmitted && idx === 1 && (
                          <CheckCircle className="h-5 w-5 text-status-success flex-shrink-0" />
                        )}
                        {isSubmitted && selectedAnswer === option && idx !== 1 && (
                          <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {(questionType === 'sentence-completion' || questionType === 'form-completion') && (
                  <div className="space-y-3">
                    <Input 
                      placeholder="Type your answer here..."
                      value={textAnswer}
                      onChange={(e) => setTextAnswer(e.target.value)}
                      disabled={isSubmitted}
                    />
                  </div>
                )}

                {questionType === 'short-answer' && (
                  <Textarea 
                    placeholder="Write your answer here (no more than 3 words)..."
                    value={textAnswer}
                    onChange={(e) => setTextAnswer(e.target.value)}
                    rows={4}
                    disabled={isSubmitted}
                  />
                )}

                {isSubmitted && (
                  <div className="mt-4 p-4 rounded-lg bg-secondary/50">
                    <h4 className="font-medium text-foreground mb-2">Explanation</h4>
                    <p className="text-sm text-muted-foreground">
                      The correct answer is B. The audio mentions that solar panel efficiency has improved by over 40% in the last decade, making it a more viable option for both residential and commercial use.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            {!isSubmitted ? (
              <Button 
                variant="gradient"
                onClick={handleSubmit}
                disabled={!selectedAnswer && !textAnswer}
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                variant="gradient"
                onClick={handleNext}
                className="gap-2"
              >
                {currentQuestion < totalQuestions - 1 ? (
                  <>
                    Next Question
                    <ArrowRight className="h-4 w-4" />
                  </>
                ) : (
                  'Finish Test'
                )}
              </Button>
            )}

            <Button 
              variant="outline" 
              onClick={handleNext}
              disabled={currentQuestion === totalQuestions - 1}
              className="gap-2"
            >
              Skip
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
