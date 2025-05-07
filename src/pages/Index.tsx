
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';
import PersonalInfoStep from '@/components/PersonalInfoStep';
import ExamSelectionStep from '@/components/ExamSelectionStep';
import PaymentStep from '@/components/PaymentStep';
import ConfirmationStep from '@/components/ConfirmationStep';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import SuccessMessage from '@/components/SuccessMessage';

// Define exam data
const exams = [
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

const Index = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState('');

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'credit' as 'credit' | 'paypal',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [selectedExamId, setSelectedExamId] = useState<number | null>(null);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePaymentMethodChange = (value: 'credit' | 'paypal') => {
    setFormData({
      ...formData,
      paymentMethod: value,
    });
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Submit registration
  const handleSubmitRegistration = () => {
    setIsDialogOpen(true);
  };

  const confirmRegistration = () => {
    // In a real application, you would send the data to your server here
    setIsDialogOpen(false);
    
    // Generate a random registration ID for demonstration
    const randomId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setRegistrationId(randomId);
    
    // Show success
    setIsSubmitted(true);
    
    // Show toast notification
    toast({
      title: "Registration Successful!",
      description: "Your exam registration has been submitted.",
    });
  };

  // Get selected exam details
  const selectedExam = exams.find(exam => exam.id === selectedExamId);

  // Render the current step
  const renderStep = () => {
    if (isSubmitted) {
      return <SuccessMessage registrationId={registrationId} email={formData.email} />;
    }

    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            onChange={handleInputChange}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ExamSelectionStep
            onPrevious={prevStep}
            onNext={nextStep}
            selectedExamId={selectedExamId}
            onSelectExam={setSelectedExamId}
          />
        );
      case 3:
        return (
          <PaymentStep
            formData={formData}
            onChange={handleInputChange}
            onMethodChange={handlePaymentMethodChange}
            onPrevious={prevStep}
            onSubmit={nextStep}
          />
        );
      case 4:
        return (
          <ConfirmationStep
            formData={formData}
            selectedExamName={selectedExam?.name || 'No exam selected'}
            examFee={selectedExam?.fee || 0}
            onPrevious={prevStep}
            onConfirm={handleSubmitRegistration}
          />
        );
      default:
        return <div>Error: Invalid step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {!isSubmitted && <ProgressBar currentStep={currentStep} />}
      
      <div className="container mx-auto px-4 pb-12">
        {renderStep()}
      </div>

      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={confirmRegistration}
      />
    </div>
  );
};

export default Index;
