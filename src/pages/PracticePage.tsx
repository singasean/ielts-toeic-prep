import { useParams } from 'react-router-dom';
import { QuestionScreen } from '@/components/practice/QuestionScreen';

const PracticePage = () => {
  const { examType, skill, subModuleId, taskId } = useParams<{
    examType: string;
    skill: string;
    subModuleId: string;
    taskId: string;
  }>();

  return (
    <QuestionScreen
      examType={examType || 'ielts'}
      skill={skill || 'listening'}
      questionType="multiple-choice"
      currentQuestion={0}
      totalQuestions={10}
    />
  );
};

export default PracticePage;
