import React from 'react';
import { Select } from '../../ui/Select';
import { creditCards } from './constants';

interface CreditCardSelectProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function CreditCardSelect({ value, onChange, error }: CreditCardSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gold-500/80">
        Current Credit Card
      </label>
      <Select
        value={value}
        onChange={onChange}
        error={error}
        options={creditCards}
        placeholder="Select your current credit card"
      />
    </div>
  );
}