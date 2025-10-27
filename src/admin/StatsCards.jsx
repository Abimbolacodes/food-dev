import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      value: '1520',
      subtitle: 'Saved 32%',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      icon: '📦'
    },
    {
      value: '1428',
      subtitle: 'Increased 12%',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      icon: '✓'
    },
    {
      value: '30',
      subtitle: 'Pending',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      icon: '⏱'
    },
    {
      value: '$105',
      subtitle: 'Income',
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-600',
      icon: '💰'
    },
    {
      value: '36',
      subtitle: 'Expenses',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      icon: '📊'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className={`${stat.bgColor} rounded-lg p-4`}>
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className={`text-2xl font-bold ${stat.textColor}`}>{stat.value}</h3>
              <p className="text-xs text-gray-600 mt-1">{stat.subtitle}</p>
            </div>
            <span className="text-xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
