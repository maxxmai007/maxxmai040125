export function formatIncomeBracket(incomeBracket: string): string {
  const bracketMap: Record<string, string> = {
    'below_300000': 'Below ₹3 Lakh',
    '300000_600000': '₹3 Lakh to ₹6 Lakh',
    '600000_1200000': '₹6 Lakh to ₹12 Lakh', 
    '1200000_2500000': '₹12 Lakh to ₹25 Lakh',
    'above_2500000': 'Above ₹25 Lakh'
  };

  return bracketMap[incomeBracket] || 'Income not specified';
}