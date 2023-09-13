

import { useContext, } from 'react';
import DashHeader from './DashboardComponents/DashHeader';
import DashSideMenu from './DashboardComponents/DashSideMenu';
import { AuthContext } from '../../Provider/UserProvider';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex z-0  flex-col justify-center">
                    {/* Page content here */}
                    <DashHeader user={user} />
                    <p section className='p-6'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure praesentium excepturi animi corrupti laboriosam est enim voluptate totam vel voluptatem velit provident ipsam ipsum tenetur, corporis, porro voluptatum ad blanditiis dolorum incidunt laudantium. Ratione sunt temporibus nesciunt, dolore iusto consectetur dolores perspiciatis doloribus, magnam provident officiis dolorem, mollitia dicta. Quae, dolores quos veniam assumenda sequi labore quam voluptatum tempore sint iure recusandae, debitis nesciunt nostrum quibusdam! Totam eveniet reiciendis libero, ea itaque sed odit harum. Aperiam voluptas asperiores unde obcaecati tempora, officia explicabo sunt iure labore culpa quisquam? Modi deleniti, quia enim voluptates vel adipisci. Voluptatum, sit! Velit, vitae incidunt! Reprehenderit labore adipisci esse? Blanditiis facilis, quam, tempora porro architecto culpa laborum, assumenda aperiam amet tempore vero sint natus? Aliquam, accusantium. Tempora nulla architecto recusandae temporibus, blanditiis exercitationem voluptas doloremque necessitatibus adipisci nobis omnis vero maiores nihil quibusdam suscipit odit sit earum neque soluta consectetur id in molestias ipsum? Voluptatum delectus dolorum a fugiat! Ullam, voluptatem commodi? Corrupti totam eum natus sed libero, sint illum fuga eaque placeat, facilis vel, quaerat cumque earum voluptate deserunt ad rem inventore corporis praesentium? Quos sint sed voluptatibus molestias? Officia autem possimus pariatur perspiciatis ut nisi tenetur accusantium porro. Perferendis accusamus aliquid, molestias iste veniam excepturi, iure deleniti quidem delectus sequi assumenda possimus consectetur culpa at ut atque dolor maiores sed est voluptatibus! Fuga deleniti rerum eius incidunt aliquam labore explicabo quidem fugit quaerat quam iste cum autem reiciendis minus voluptas dolore officia ex itaque esse illo, vero qui magnam. Porro, eos neque voluptas enim, quas a reiciendis velit adipisci exercitationem quidem ducimus tempore ratione aut officiis voluptatum unde sint animi perspiciatis quisquam reprehenderit ab! Voluptatum nesciunt vitae est exercitationem, reprehenderit voluptates pariatur fugiat laudantium eius temporibus quia odio consequuntur quaerat tempore minus id ut beatae laborum, laboriosam illum ipsa, ad perferendis earum.</p>
                    </p>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

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