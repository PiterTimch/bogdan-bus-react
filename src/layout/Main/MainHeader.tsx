import { Link } from "react-router";

export const MainHeader = () => {
    return (
        <>
            <nav className="
                bg-neutral-primary dark:bg-gray-900
                w-full border-b border-default dark:border-gray-700
                transition-colors
            ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-7"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl text-heading dark:text-gray-100 font-semibold whitespace-nowrap">
                            Bogdan-bus
                        </span>
                    </Link>

                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="
                            inline-flex items-center p-2 w-10 h-10 justify-center text-sm
                            text-body dark:text-gray-300
                            rounded-base md:hidden
                            hover:bg-neutral-secondary-soft dark:hover:bg-gray-800
                            hover:text-heading dark:hover:text-white
                            focus:outline-none focus:ring-2
                            focus:ring-neutral-tertiary dark:focus:ring-gray-600
                            transition
                        "
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="2"
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="
                            font-medium flex flex-col p-4 md:p-0 mt-4
                            border border-default dark:border-gray-700
                            rounded-base
                            bg-neutral-secondary-soft dark:bg-gray-800
                            md:flex-row md:space-x-8 rtl:space-x-reverse
                            md:mt-0 md:border-0
                            md:bg-neutral-primary dark:md:bg-gray-900
                            transition-colors
                        ">
                            <li>
                                <Link
                                    to={"/register"}
                                    className="
                                        block py-2 px-3
                                        bg-brand md:bg-transparent
                                        text-white md:text-fg-brand
                                        dark:text-blue-400
                                        rounded md:p-0
                                        transition
                                    "
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default MainHeader;
