import { MdOutlineDashboardCustomize } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex p-8 flex-col items-center justify-center">
                    {/* Page content here */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure praesentium excepturi animi corrupti laboriosam est enim voluptate totam vel voluptatem velit provident ipsam ipsum tenetur, corporis, porro voluptatum ad blanditiis dolorum incidunt laudantium. Ratione sunt temporibus nesciunt, dolore iusto consectetur dolores perspiciatis doloribus, magnam provident officiis dolorem, mollitia dicta. Quae, dolores quos veniam assumenda sequi labore quam voluptatum tempore sint iure recusandae, debitis nesciunt nostrum quibusdam! Totam eveniet reiciendis libero, ea itaque sed odit harum. Aperiam voluptas asperiores unde obcaecati tempora, officia explicabo sunt iure labore culpa quisquam? Modi deleniti, quia enim voluptates vel adipisci. Voluptatum, sit! Velit, vitae incidunt! Reprehenderit labore adipisci esse? Blanditiis facilis, quam, tempora porro architecto culpa laborum, assumenda aperiam amet tempore vero sint natus? Aliquam, accusantium. Tempora nulla architecto recusandae temporibus, blanditiis exercitationem voluptas doloremque necessitatibus adipisci nobis omnis vero maiores nihil quibusdam suscipit odit sit earum neque soluta consectetur id in molestias ipsum? Voluptatum delectus dolorum a fugiat! Ullam, voluptatem commodi? Corrupti totam eum natus sed libero, sint illum fuga eaque placeat, facilis vel, quaerat cumque earum voluptate deserunt ad rem inventore corporis praesentium? Quos sint sed voluptatibus molestias? Officia autem possimus pariatur perspiciatis ut nisi tenetur accusantium porro. Perferendis accusamus aliquid, molestias iste veniam excepturi, iure deleniti quidem delectus sequi assumenda possimus consectetur culpa at ut atque dolor maiores sed est voluptatibus! Fuga deleniti rerum eius incidunt aliquam labore explicabo quidem fugit quaerat quam iste cum autem reiciendis minus voluptas dolore officia ex itaque esse illo, vero qui magnam. Porro, eos neque voluptas enim, quas a reiciendis velit adipisci exercitationem quidem ducimus tempore ratione aut officiis voluptatum unde sint animi perspiciatis quisquam reprehenderit ab! Voluptatum nesciunt vitae est exercitationem, reprehenderit voluptates pariatur fugiat laudantium eius temporibus quia odio consequuntur quaerat tempore minus id ut beatae laborum, laboriosam illum ipsa, ad perferendis earum.</p>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  w-40 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <div className="flex h-screen w-16  flex-col justify-between border-e bg-white">
                            <div>
                                <div className="inline-flex h-16 w-16 items-center justify-center">
                                    <span
                                        className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                                    >
                                        Logo
                                    </span>
                                </div>

                                <div className="border-t border-gray-100">
                                    <div className="px-2">
                                        <div className="py-4">
                                            <Link
                                                to="/dashboard"
                                                className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                                            >
                                                <MdOutlineDashboardCustomize />

                                                <span
                                                    className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                >
                                                    Tasks
                                                </span>
                                            </Link>
                                        </div>

                                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                                            <li>
                                                <a
                                                    href=""
                                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 opacity-75"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                        />
                                                    </svg>

                                                    <span
                                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                    >
                                                        Teams
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href=""
                                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 opacity-75"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                                        />
                                                    </svg>

                                                    <span
                                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                    >
                                                        Billing
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href=""
                                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 opacity-75"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                                        />
                                                    </svg>

                                                    <span
                                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                    >
                                                        Invoices
                                                    </span>
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href=""
                                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 opacity-75"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                        />
                                                    </svg>

                                                    <span
                                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                                    >
                                                        Account
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                                <form action="/logout">
                                    <button
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 opacity-75"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>

                                        <span
                                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                        >
                                            Logout
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </ul>

                </div>
            </div >

        </div >
    );
};

export default Dashboard;