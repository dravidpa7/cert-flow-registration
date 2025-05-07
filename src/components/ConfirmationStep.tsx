
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check } from 'lucide-react';

interface ConfirmationStepProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: 'credit' | 'paypal';
  };
  selectedExamName: string;
  examFee: number;
  onPrevious: () => void;
  onConfirm: () => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({
  formData,
  selectedExamName,
  examFee,
  onPrevious,
  onConfirm
}) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">✅</span>
        <h2 className="text-xl font-semibold">Registration Summary</h2>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-600">Name:</span> {formData.fullName}
            </div>
            <div>
              <span className="text-gray-600">Email:</span> {formData.email}
            </div>
            <div>
              <span className="text-gray-600">Phone:</span> {formData.phone}
            </div>
          </div>
          <div className="mt-2 text-sm">
            <span className="text-gray-600">Address:</span> {formData.address}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Exam Details</h3>
          <div className="text-sm">
            <div><span className="text-gray-600">Selected Exam:</span> {selectedExamName}</div>
            <div><span className="text-gray-600">Fee:</span> ${examFee}</div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-900 mb-2">Payment Details</h3>
          <div className="text-sm">
            <div>
              <span className="text-gray-600">Payment Method:</span> 
              {formData.paymentMethod === 'credit' ? 'Credit Card' : 'PayPal'}
            </div>
          </div>
        </div>
        
        <div className="border border-gray-200 rounded-md p-4 bg-blue-50">
          <p className="text-center text-sm font-medium text-blue-700">
            Please confirm your registration details before submitting.
          </p>
        </div>
        
        <div className="flex justify-between mt-6">
          <Button type="button" variant="secondary" onClick={onPrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button 
            onClick={onConfirm}
            className="bg-green-600 hover:bg-green-700"
          >
            <Check className="mr-2 h-4 w-4" /> Confirm Registration
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationStep;
