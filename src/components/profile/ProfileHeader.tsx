import React from 'react';
import { Logo } from '../layout/Logo';
import { BackButton } from '../ui/BackButton';

interface ProfileHeaderProps {
  title: string;
  subtitle: string;
}

export function ProfileHeader({ title, subtitle }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-between">
        <Logo />
        <BackButton />
      </div>

      <div className="text-center">
        <h1 className="text-4xl font-display font-semibold tracking-tight text-white mb-2">
          {title}
        </h1>
        <p className="text-base text-gold-500/80">
          {subtitle}
        </p>
      </div>
    </div>
  );
}