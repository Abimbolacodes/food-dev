import { useState } from 'react';
import { assets } from '../assets/assets';

const Notifications = ({ onClose }) => {
  const [showAllNotifications, setShowAllNotifications] = useState(false);

  const recentNotifications = [
    {
      id: 1,
      user: 'Wilder Scott',
      message: 'Order not delivered',
      time: '1 min ago',
      image: assets.AB,
      unread: true
    },
    {
      id: 2,
      user: 'Tatum Lewis',
      message: 'Late delivery',
      time: '12 min ago',
      image: assets.AB,
      unread: true
    },
    {
      id: 3,
      user: 'Fletcher Trey',
      message: 'Wrong order',
      time: '15 min ago',
      image: assets.AB,
      unread: false
    }
  ];

  const allNotifications = [
    ...recentNotifications,
    {
      id: 4,
      user: 'Michael Brown',
      message: 'Payment issue',
      time: '1 hour ago',
      image: assets.AB,
      unread: false
    },
    {
      id: 5,
      user: 'Sarah Wilson',
      message: 'Order cancelled',
      time: '2 hours ago',
      image: assets.AB,
      unread: false
    },
    {
      id: 6,
      user: 'David Lee',
      message: 'Refund requested',
      time: '3 hours ago',
      image: assets.AB,
      unread: false
    },
    {
      id: 7,
      user: 'Emma Davis',
      message: 'Order delivered',
      time: '5 hours ago',
      image: assets.AB,
      unread: false
    },
    {
      id: 8,
      user: 'James Taylor',
      message: 'New order placed',
      time: '6 hours ago',
      image: assets.AB,
      unread: false
    }
  ];

  const chatProfiles = [
    { name: 'Tatum Lewis', message: 'VIEW MESSAGE', time: '10 min ago', image: assets.AB, online: true },
    { name: 'Fletcher Trey', message: 'VIEW MESSAGE', time: '25 min ago', image: assets.AB, online: false },
    { name: 'Kingsley Alvin', message: 'VIEW MESSAGE', time: '1 day ago', image: assets.AB, online: false }
  ];

  const displayNotifications = showAllNotifications ? allNotifications : recentNotifications;

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 flex items-center justify-between">
        <h3 className="font-bold text-white text-lg">Notifications</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200 text-2xl">
          ✕
        </button>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Recent</h4>
          {displayNotifications.map((notif) => (
            <div key={notif.id} className="flex items-start space-x-3 mb-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
              <img src={notif.image} alt={notif.user} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm text-gray-800">{notif.user}</p>
                  {notif.unread && <span className="w-2 h-2 bg-red-500 rounded-full"></span>}
                </div>
                <p className="text-sm text-gray-600">{notif.message}</p>
                <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="px-4 pb-4">
          <button
            onClick={() => setShowAllNotifications(!showAllNotifications)}
            className="w-full text-center text-orange-600 hover:text-orange-700 font-medium text-sm py-2 border border-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
          >
            {showAllNotifications ? 'Show Less' : 'View all'}
          </button>
        </div>

        {/* Chat Section */}
        <div className="border-t p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-800">Hi, Michael</h4>
          </div>

          {chatProfiles.map((profile, index) => (
            <div key={index} className="flex items-center justify-between mb-4 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={profile.image} alt={profile.name} className="w-10 h-10 rounded-full object-cover" />
                  {profile.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-800">{profile.name}</p>
                  <p className="text-xs text-gray-500">{profile.time}</p>
                </div>
              </div>
              <button className="text-xs text-red-500 font-medium hover:text-red-600">
                {profile.message}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
