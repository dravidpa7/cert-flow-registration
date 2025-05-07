
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

interface Exam {
  id: number;
  name: string;
  date: string;
  fee: number;
}

interface ExamSelectionStepProps {
  onPrevious: () => void;
  onNext: () => void;
  selectedExamId: number | null;
  onSelectExam: (examId: number) => void;
}

const ExamSelectionStep: React.FC<ExamSelectionStepProps> = ({
  onPrevious,
  onNext,
  selectedExamId,
  onSelectExam
}) => {
  const exams: Exam[] = [
    {
      id: 1,
      name: 'Mathematics Certification',
      date: 'March 15, 2024',
      fee: 50,
    },
    {
      id: 2,
      name: 'Science Advancement Exam',
      date: 'April 10, 2024',
      fee: 65,
    },
    {
      id: 3,
      name: 'Computer Programming Assessment',
      date: 'May 5, 2024',
      fee: 75,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">📖</span>
        <h2 className="text-xl font-semibold">Exam Selection</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {exams.map((exam) => (
          <div 
            key={exam.id}
            className={`border rounded-lg p-4 text-center cursor-pointer transition-all
              ${selectedExamId === exam.id 
                ? 'border-portal-primary border-2 shadow-md' 
                : 'border-gray-200 hover:border-gray-300'}`}
            onClick={() => onSelectExam(exam.id)}
          >
            <h3 className="font-semibold text-lg">{exam.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{exam.date}</p>
            <p className="font-medium mt-2">Fee: ${exam.fee}</p>
            <div className="mt-2">
              {selectedExamId === exam.id ? (
                <Button 
                  variant="outline"
                  className="bg-gray-100 text-portal-primary border-portal-primary"
                  disabled
                >
                  <Check className="h-4 w-4 mr-1" /> Selected
                </Button>
              ) : (
                <Button 
                  variant="secondary"
                  size="sm"
                  onClick={() => onSelectExam(exam.id)}
                >
                  Select
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button 
          variant="secondary" 
          onClick={onPrevious}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button 
          className="bg-portal-primary hover:bg-blue-600"
          onClick={onNext}
          disabled={!selectedExamId}
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ExamSelectionStep;
