import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoldButton } from '../../ui/GoldButton';

export function HeroButtons() {
  const navigate = useNavigate();

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      <GoldButton onClick={() => navigate('/profile')}>
        New Credit Card User
      </GoldButton>

      <GoldButton onClick={() => navigate('/profile/existing')}>
        Existing Credit Card User
      </GoldButton>
    </div>
  );
}