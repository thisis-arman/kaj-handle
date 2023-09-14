

import { useContext, } from 'react';
import DashHeader from './DashboardComponents/DashHeader';
import DashSideMenu from './DashboardComponents/DashSideMenu';
import { AuthContext } from '../../Provider/UserProvider';
import DashContent from './DashboardComponents/DashContent';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex z-0  flex-col justify-center">
                    {/* Page content here */}<label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <DashHeader user={user} />

                    <p className='p-6'>
                        <DashContent />

                    </p>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu   min-h-full  text-base-content">

                        {/* Sidebar content here */}
                        <DashSideMenu user={user} />
                    </ul>

                </div>
            </div >

        </div >
    );
};

export default Dashboard;