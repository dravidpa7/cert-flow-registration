
import React from 'react';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const steps = [
    { number: 1, name: 'Personal Info' },
    { number: 2, name: 'Exam Selection' },
    { number: 3, name: 'Payment' },
    { number: 4, name: 'Confirmation' },
  ];

  return (
    <div className="container mx-auto mt-8 mb-6 grid grid-cols-4 gap-4">
      {steps.map((step) => (
        <div 
          key={step.number}
          className={cn(
            "py-3 px-4 text-center rounded-md transition-colors duration-300",
            currentStep === step.number 
              ? "bg-portal-primary text-white" 
              : "bg-gray-200 text-gray-600"
          )}
        >
          {step.number}. {step.name}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
