import { assets } from '../assets/assets';

const RecentComplaints = () => {
  const complaints = [
    {
      name: 'Joshua Scott',
      issue: 'My order Delay',
      time: '10 min ago',
      image: assets.AB
    },
    {
      name: 'Tohen Lewis',
      issue: 'No one Quiet',
      time: '2 min ago',
      image: assets.AB
    },
    {
      name: 'Fletcher Trey',
      issue: 'My order Delay',
      time: '3 hour ago',
      image: assets.AB
    },
    {
      name: 'Michael Brown',
      issue: 'Wrong order delivered',
      time: '5 hours ago',
      image: assets.AB
    },
    {
      name: 'Sarah Wilson',
      issue: 'Food was cold',
      time: '6 hours ago',
      image: assets.AB
    },
    {
      name: 'David Lee',
      issue: 'Missing items',
      time: '8 hours ago',
      image: assets.AB
    },
    {
      name: 'Emma Davis',
      issue: 'Late delivery',
      time: '1 day ago',
      image: assets.AB
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 h-full flex flex-col">
      <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Complaints</h2>
      
      <div className="space-y-3 overflow-y-auto flex-1 pr-2 scrollbar-hide" style={{ maxHeight: '300px' }}>
        {complaints.map((complaint, index) => (
          <div key={index} className="hover:bg-gray-50 p-2 rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                <img 
                  src={complaint.image} 
                  alt={complaint.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-medium text-sm text-gray-800">{complaint.name}</p>
                  <p className="text-xs text-gray-400">{complaint.time}</p>
                </div>
              </div>
               <span className="text-xs text-gray-400 flex-shrink-0">
              <button className="text-sm text-red-500 font-medium hover:text-red-600 hover:underline">
                VIEW MESSAGE
              </button>
            </span>
              {/* <span className="text-xs text-gray-400 flex-shrink-0">{complaint.time}</span> */}
            </div>
            {/* <span className="text-xs text-gray-400 flex-shrink-0">
              <button className="text-xs text-red-500 font-medium hover:text-red-600 hover:underline">
                VIEW MESSAGE
              </button>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentComplaints;
