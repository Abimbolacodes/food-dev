import React from 'react';

const SalesChart = () => {
  const data = [
    { month: 'Jan', online: 400, delivery: 300 },
    { month: 'Feb', online: 350, delivery: 400 },
    { month: 'Mar', online: 500, delivery: 350 },
    { month: 'Apr', online: 900, delivery: 450 },
    { month: 'May', online: 450, delivery: 500 },
    { month: 'Jun', online: 500, delivery: 400 },
    { month: 'Jul', online: 800, delivery: 450 },
    { month: 'Aug', online: 500, delivery: 550 },
    { month: 'Sep', online: 450, delivery: 500 },
    { month: 'Oct', online: 600, delivery: 550 },
    { month: 'Nov', online: 500, delivery: 600 },
    { month: 'Dec', online: 550, delivery: 450 }
  ];

  const maxValue = 1000;

  return (
    <div className="bg-white rounded-lg shadow p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Sales Report</h2>
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-orange-400 rounded-full mr-1"></div>
            <span className="text-gray-600">Online Delivered</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-teal-400 rounded-full mr-1"></div>
            <span className="text-gray-600">Delivery Service</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-gray-400">
          <span>1000</span>
          <span>750</span>
          <span>500</span>
          <span>250</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex items-end justify-center gap-0.5 mb-2" style={{ height: '170px' }}>
                {/* Online bar */}
                <div 
                  className="w-2 bg-orange-400 rounded-t"
                  style={{ height: `${(item.online / maxValue) * 100}%` }}
                ></div>
                {/* Delivery bar */}
                <div 
                  className="w-2 bg-teal-400 rounded-t"
                  style={{ height: `${(item.delivery / maxValue) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-gray-400">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
