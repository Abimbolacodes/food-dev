import { useState } from 'react';
import { food_list } from '../assets/assets';

const RecentOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: '#25896',
      customer: 'Jefferson Clay',
      phone: '+99 256 896 8855',
      food: food_list[0],
      quantity: 2,
      price: '$11.00',
      payment: 'Paid',
      date: '2025-07-10',
      time: '11:00 AM',
      status: 'Accepted'
    },
    {
      id: '#27856',
      customer: 'Langston Lee',
      phone: '+99 256 896 8856',
      food: food_list[4],
      quantity: 1,
      price: '$12.00',
      payment: 'Pending',
      date: '2025-07-10',
      time: '10:45 AM',
      status: 'Pending'
    },
    {
      id: '#27638',
      customer: 'Blossom Jones',
      phone: '+99 256 896 8857',
      food: food_list[2],
      quantity: 3,
      price: '$10.50',
      payment: 'Paid',
      date: '2025-07-10',
      time: '10:30 AM',
      status: 'Accepted'
    },
    {
      id: '#26421',
      customer: 'Michael Brown',
      phone: '+99 256 896 8858',
      food: food_list[5],
      quantity: 1,
      price: '$15.20',
      payment: 'Paid',
      date: '2025-07-10',
      time: '10:15 AM',
      status: 'Accepted'
    },
    {
      id: '#25312',
      customer: 'Sarah Wilson',
      phone: '+99 256 896 8859',
      food: food_list[7],
      quantity: 2,
      price: '$9.50',
      payment: 'Pending',
      date: '2025-07-10',
      time: '10:00 AM',
      status: 'Pending'
    },
    {
      id: '#24201',
      customer: 'David Lee',
      phone: '+99 256 896 8860',
      food: food_list[9],
      quantity: 1,
      price: '$13.80',
      payment: 'Paid',
      date: '2025-07-10',
      time: '09:45 AM',
      status: 'Accepted'
    },
    {
      id: '#23190',
      customer: 'Emma Davis',
      phone: '+99 256 896 8861',
      food: food_list[11],
      quantity: 4,
      price: '$16.40',
      payment: 'Paid',
      date: '2025-07-10',
      time: '09:30 AM',
      status: 'Accepted'
    },
    {
      id: '#22089',
      customer: 'James Taylor',
      phone: '+99 256 896 8862',
      food: food_list[13],
      quantity: 2,
      price: '$8.90',
      payment: 'Pending',
      date: '2025-07-10',
      time: '09:15 AM',
      status: 'Pending'
    },
    {
      id: '#21978',
      customer: 'Olivia Martinez',
      phone: '+99 256 896 8863',
      food: food_list[15],
      quantity: 1,
      price: '$14.30',
      payment: 'Paid',
      date: '2025-07-09',
      time: '11:50 PM',
      status: 'Accepted'
    },
    {
      id: '#20867',
      customer: 'William Garcia',
      phone: '+99 256 896 8864',
      food: food_list[17],
      quantity: 3,
      price: '$11.20',
      payment: 'Paid',
      date: '2025-07-09',
      time: '11:30 PM',
      status: 'Accepted'
    },
    {
      id: '#19756',
      customer: 'Sophia Rodriguez',
      phone: '+99 256 896 8865',
      food: food_list[19],
      quantity: 2,
      price: '$12.70',
      payment: 'Pending',
      date: '2025-07-09',
      time: '11:00 PM',
      status: 'Pending'
    },
    {
      id: '#18645',
      customer: 'Benjamin Lopez',
      phone: '+99 256 896 8866',
      food: food_list[21],
      quantity: 1,
      price: '$10.90',
      payment: 'Paid',
      date: '2025-07-09',
      time: '10:45 PM',
      status: 'Accepted'
    },
    {
      id: '#17534',
      customer: 'Isabella Hernandez',
      phone: '+99 256 896 8867',
      food: food_list[23],
      quantity: 2,
      price: '$17.50',
      payment: 'Pending',
      date: '2025-07-09',
      time: '10:30 PM',
      status: 'Pending'
    },
    {
      id: '#16423',
      customer: 'Lucas Gonzalez',
      phone: '+99 256 896 8868',
      food: food_list[25],
      quantity: 1,
      price: '$13.40',
      payment: 'Paid',
      date: '2025-07-09',
      time: '10:15 PM',
      status: 'Accepted'
    },
    {
      id: '#15312',
      customer: 'Mia Perez',
      phone: '+99 256 896 8869',
      food: food_list[27],
      quantity: 3,
      price: '$9.80',
      payment: 'Paid',
      date: '2025-07-09',
      time: '10:00 PM',
      status: 'Accepted'
    },
    {
      id: '#14201',
      customer: 'Henry Wilson',
      phone: '+99 256 896 8870',
      food: food_list[1],
      quantity: 2,
      price: '$15.60',
      payment: 'Pending',
      date: '2025-07-09',
      time: '09:45 PM',
      status: 'Pending'
    },
    {
      id: '#13190',
      customer: 'Charlotte Moore',
      phone: '+99 256 896 8871',
      food: food_list[3],
      quantity: 1,
      price: '$11.90',
      payment: 'Paid',
      date: '2025-07-09',
      time: '09:30 PM',
      status: 'Accepted'
    },
    {
      id: '#12089',
      customer: 'Alexander Taylor',
      phone: '+99 256 896 8872',
      food: food_list[6],
      quantity: 4,
      price: '$14.20',
      payment: 'Pending',
      date: '2025-07-09',
      time: '09:15 PM',
      status: 'Pending'
    },
    {
      id: '#11978',
      customer: 'Amelia Anderson',
      phone: '+99 256 896 8873',
      food: food_list[8],
      quantity: 2,
      price: '$12.30',
      payment: 'Paid',
      date: '2025-07-09',
      time: '09:00 PM',
      status: 'Accepted'
    },
    {
      id: '#10867',
      customer: 'Daniel Thomas',
      phone: '+99 256 896 8874',
      food: food_list[10],
      quantity: 1,
      price: '$16.80',
      payment: 'Paid',
      date: '2025-07-09',
      time: '08:45 PM',
      status: 'Accepted'
    }
  ];

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">Recent Online Orders</h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide" style={{ maxHeight: '500px' }}>
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white">
            <tr className="border-b text-gray-600">
              <th className="text-left py-3 px-3 font-medium">Order Id</th>
              <th className="text-left py-3 px-3 font-medium">Customer</th>
              <th className="text-left py-3 px-3 font-medium">Phone</th>
              <th className="text-left py-3 px-3 font-medium">Food</th>
              <th className="text-left py-3 px-3 font-medium">Quantity</th>
              <th className="text-left py-3 px-3 font-medium">Price</th>
              <th className="text-left py-3 px-3 font-medium">Payment</th>
              <th className="text-left py-3 px-3 font-medium">Date</th>
              <th className="text-left py-3 px-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-3 font-medium text-gray-800">{order.id}</td>
                <td className="py-3 px-3 text-gray-700">{order.customer}</td>
                <td className="py-3 px-3 text-gray-600 text-xs">{order.phone}</td>
                <td className="py-3 px-3">
                  <img
                    src={order.food.image}
                    alt={order.food.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                </td>
                <td className="py-3 px-3 text-gray-700">{order.quantity}</td>
                <td className="py-3 px-3 font-medium text-gray-800">{order.price}</td>
                <td className="py-3 px-3">
                  <span className={`inline-block px-3 py-1 rounded text-white text-xs ${order.payment === 'Paid' ? 'bg-green-500' : 'bg-orange-500'
                    }`}>
                    {order.payment}
                  </span>
                </td>
                <td className="py-3 px-3 text-gray-600 text-xs">
                  <div>{order.date}</div>
                  <div>{order.time}</div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex gap-1">
                    <button className="px-2 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600">
                      Accept
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600">
                      Decline
                    </button>
                    <button
                      onClick={() => handleViewDetails(order)}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600"
                    >
                      Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">Order Details</h3>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-2xl">
                ×
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={selectedOrder.food.image}
                  alt={selectedOrder.food.name}
                  className="w-20 h-20 rounded object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800">{selectedOrder.food.name}</p>
                  <p className="text-sm text-gray-500">{selectedOrder.food.category}</p>
                </div>
              </div>

              <div className="border-t pt-3 space-y-2">
                <p><span className="font-medium">Order ID:</span> {selectedOrder.id}</p>
                <p><span className="font-medium">Customer:</span> {selectedOrder.customer}</p>
                <p><span className="font-medium">Phone:</span> {selectedOrder.phone}</p>
                <p><span className="font-medium">Quantity:</span> {selectedOrder.quantity}</p>
                <p><span className="font-medium">Price:</span> {selectedOrder.price}</p>
                <p><span className="font-medium">Status:</span> <span className={selectedOrder.status === 'Accepted' ? 'text-green-600' : 'text-orange-600'}>{selectedOrder.status}</span></p>
                <p><span className="font-medium">Payment:</span> <span className={selectedOrder.payment === 'Paid' ? 'text-green-600' : 'text-orange-600'}>{selectedOrder.payment}</span></p>
                <p><span className="font-medium">Date:</span> {selectedOrder.date}</p>
                <p><span className="font-medium">Time:</span> {selectedOrder.time}</p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentOrders;
