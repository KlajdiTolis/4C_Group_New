import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export const Logo4C: React.FC<LogoProps> = ({ className = "w-12 h-12", color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stylized 4 */}
    <path d="M80 40 L40 120 H110" stroke={color} strokeWidth="12" strokeLinecap="square" />
    <path d="M100 80 L100 160" stroke={color} strokeWidth="12" strokeLinecap="square" />
    {/* Stylized C */}
    <path d="M130 60 C 170 60 180 90 180 110 C 180 150 150 170 110 170 C 70 170 60 140 60 140" stroke={color} strokeWidth="12" strokeLinecap="round" />
  </svg>
);

export const LogoMuseum: React.FC<LogoProps> = ({ className = "w-32 h-32", color = "currentColor" }) => (
  <svg viewBox="0 0 300 200" className={className} xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="30" fontSize="10" fontFamily="serif" textAnchor="middle" fill={color} letterSpacing="2">BOUTIQUE MUSEUM</text>
    <text x="50%" y="42" fontSize="10" fontFamily="serif" textAnchor="middle" fill={color} letterSpacing="2" fontWeight="bold">HOTEL</text>
    <text x="50%" y="54" fontSize="10" fontFamily="serif" textAnchor="middle" fill={color} letterSpacing="2">TIRANA</text>
    
    {/* The big m */}
    <text x="50%" y="180" fontSize="180" fontFamily="serif" textAnchor="middle" fill={color} fontWeight="bold">m</text>
    
    {/* Abstract representation of dancers overlaying the m */}
    <path d="M130 140 L140 120 L150 130 L160 120 L170 140" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
    <circle cx="140" cy="115" r="5" fill="white" opacity="0.5" />
    <circle cx="160" cy="115" r="5" fill="white" opacity="0.5" />
  </svg>
);

export const LogoValamar: React.FC<LogoProps> = ({ className = "w-32 h-32", color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Circular text path */}
    <path id="curve" d="M 20 100 A 80 80 0 1 1 180 100" fill="none" />
    <text width="200" fontSize="14" fontFamily="serif" letterSpacing="2" fill={color}>
      <textPath href="#curve" startOffset="50%" textAnchor="middle">
        VALAMAR PROPERTIES
      </textPath>
    </text>
    
    <text x="50%" y="120" fontSize="12" fontFamily="cursive" textAnchor="middle" fill={color}>by Four C</text>

    {/* Landscape/House Icon */}
    <path d="M60 140 L140 140" stroke={color} strokeWidth="2" />
    <path d="M70 140 L100 100 L130 140" fill="none" stroke={color} strokeWidth="2" />
    <rect x="90" y="120" width="20" height="20" fill="none" stroke={color} strokeWidth="2" />
    <path d="M90 120 L100 110 L110 120" fill="none" stroke={color} strokeWidth="2" />
    
    {/* Trees */}
    <path d="M50 140 L60 110 L70 140" fill={color} opacity="0.5" />
    <path d="M130 140 L140 110 L150 140" fill={color} opacity="0.5" />
  </svg>
);
