import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface LoadingOverlayProps {
  isVisible: boolean;
  message?: string;
}

export function LoadingOverlay({ isVisible, message = 'Getting Recommendations...' }: LoadingOverlayProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-dark-800 border border-gold-500/20 rounded-lg p-8 flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-gold-500">{message}</p>
      </div>
    </div>
  );
}