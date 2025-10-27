import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import SalesChart from './SalesChart';
import FoodGrid from './FoodGrid';
import RecentOrders from './RecentOrders';
import RecentComplaints from './RecentComplaints';
import Notifications from './Notifications';
// import Layout from './Layout';

const Dashboard = () => {
    const [showNotifications, setShowNotifications] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header
                    showNotifications={showNotifications}
                    setShowNotifications={setShowNotifications}
                />
                <main className="flex-1 overflow-y-auto p-6">
                    <StatsCards />
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                        <div className="lg:col-span-2">
                            <SalesChart />
                        </div>
                        <div>
                            <RecentComplaints />
                        </div>
                    </div>
                    <FoodGrid />
                    <RecentOrders />
                </main>
            </div>
            {showNotifications && <Notifications onClose={() => setShowNotifications(false)} />}
        </div>
    );
};

export default Dashboard;
