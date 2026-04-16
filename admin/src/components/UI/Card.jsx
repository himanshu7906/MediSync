import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-soft transition-all duration-300 ${hover ? 'hover:shadow-premium hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

export const DashboardStatCard = ({ icon, label, value, color = 'primary' }) => {
  const iconColors = {
    primary: 'bg-indigo-50 text-primary',
    secondary: 'bg-emerald-50 text-secondary',
    accent: 'bg-amber-50 text-accent',
  };

  return (
    <Card className="flex items-center gap-4 min-w-[240px]">
      <div className={`p-4 rounded-xl ${iconColors[color] || iconColors.primary}`}>
        <img className="w-8 h-8" src={icon} alt={label} />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-gray-500 font-medium">{label}</p>
      </div>
    </Card>
  );
};

export default Card;
