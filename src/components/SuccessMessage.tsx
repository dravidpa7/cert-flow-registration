
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SuccessMessageProps {
  registrationId: string;
  email: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ registrationId, email }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md text-center">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-3 rounded-full">
          <Check className="h-12 w-12 text-green-600" />
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Registration Successful!</h2>
      <p className="text-gray-600 mb-6">
        Your exam registration has been submitted successfully.
      </p>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6 text-left">
        <p className="mb-2"><span className="font-medium">Registration ID:</span> {registrationId}</p>
        <p><span className="font-medium">Confirmation sent to:</span> {email}</p>
      </div>
      
      <p className="text-sm text-gray-500 mb-6">
        A confirmation email has been sent to your email address with all the details.
        Please keep this information for your records.
      </p>
      
      <div className="flex justify-center">
        <Link to="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
