import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ApplyButtonProps {
  href: string;
}

export function ApplyButton({ href }: ApplyButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-dark-900 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-500/20"
    >
      Apply Now
      <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}