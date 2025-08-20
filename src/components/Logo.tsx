import React from 'react';

interface LogoProps {
  type: string;
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  type, 
  size = 60, 
  primaryColor = '#FF6B6B',
  secondaryColor = '#4ECDC4',
  accentColor = '#FFE66D'
}) => {
  const typeKey = type.toLowerCase();

  if (typeKey === 'after school program for kids') {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <circle cx="50" cy="35" r="28" fill={accentColor} opacity="0.3" />
        
        <rect x="35" y="25" width="30" height="22" fill={primaryColor} rx="2" />
        <rect x="35" y="20" width="30" height="5" fill={primaryColor} rx="2" />
        
        <rect x="15" y="55" width="15" height="30" fill={secondaryColor} rx="2" />
        <rect x="35" y="55" width="15" height="30" fill={primaryColor} rx="2" />
        <rect x="55" y="55" width="15" height="30" fill={accentColor} rx="2" />
        <rect x="75" y="55" width="10" height="30" fill={secondaryColor} rx="2" />
        
        <circle cx="22.5" cy="70" r="3" fill="white" />
        <circle cx="42.5" cy="70" r="3" fill="white" />
        <circle cx="62.5" cy="70" r="3" fill="white" />
        <circle cx="80" cy="70" r="2.5" fill="white" />
        
        <path 
          d="M 40 35 L 45 40 L 55 30" 
          stroke="white" 
          strokeWidth="3" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        <rect x="10" y="85" width="80" height="3" fill="#E0E0E0" rx="1.5" />
      </svg>
    );
  }

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="45" fill={primaryColor} />
      <circle cx="50" cy="50" r="35" fill="white" />
      <circle cx="50" cy="50" r="25" fill={secondaryColor} />
    </svg>
  );
};

export default Logo;