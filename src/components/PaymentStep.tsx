
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, CreditCard } from 'lucide-react';

interface PaymentStepProps {
  formData: {
    paymentMethod: 'credit' | 'paypal';
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMethodChange: (value: 'credit' | 'paypal') => void;
  onPrevious: () => void;
  onSubmit: () => void;
}

const PaymentStep: React.FC<PaymentStepProps> = ({
  formData,
  onChange,
  onMethodChange,
  onPrevious,
  onSubmit
}) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <div className="flex items-center mb-6">
        <span className="text-2xl mr-2">💳</span>
        <h2 className="text-xl font-semibold">Payment Information</h2>
      </div>
      
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <RadioGroup 
          value={formData.paymentMethod} 
          onValueChange={(value) => onMethodChange(value as 'credit' | 'paypal')}
          className="space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit" id="credit" />
            <Label htmlFor="credit">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal">PayPal</Label>
          </div>
        </RadioGroup>

        {formData.paymentMethod === 'credit' && (
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={onChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={onChange}
                  placeholder="MM/YYYY"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  value={formData.cvv}
                  onChange={onChange}
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>
          </div>
        )}
        
        {formData.paymentMethod === 'paypal' && (
          <div className="bg-gray-50 p-4 rounded-md text-center">
            <p>You will be redirected to PayPal to complete your payment after submission.</p>
          </div>
        )}
        
        <div className="flex justify-between mt-6">
          <Button type="button" variant="secondary" onClick={onPrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Submit Registration
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentStep;
