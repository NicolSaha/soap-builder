import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (

        <footer className="bg-white">
            <div className="max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8">
                <nav className="-mx-5 -my-2 flex flex-wrap justify-center font-body">
                    <div className="px-5 py-2">
                        <Link to={"/"} className="text-base leading-6 text-subGreen hover:text-mainGreen hover:underline">
                            HOME
                        </Link>
                    </div>
                    <div className="px-5 py-2">
                        <p className="text-base leading-6 text-subGreen hover:text-mainGreen hover:underline">
                            PRODUCTS
                        </p>
                    </div>
                    <div className="px-5 py-2">
                        <p className="text-base leading-6 text-subGreen hover:text-mainGreen hover:underline">
                           ABOUT
                        </p>
                    </div>
                    <div className="px-5 py-2">
                        <p className="text-base leading-6 text-subGreen hover:text-mainGreen hover:underline">
                            CONTACT
                        </p>
                    </div>
                    <div className="px-5 py-2">
                        <p className="text-base leading-6 text-subGreen hover:text-mainGreen hover:underline">
                           FAQ
                        </p>
                    </div>
                </nav>
                <p className="mt-8 text-center text-base leading-6 text-subGreen font-body">
                    &copy; 2020 Soap Builder, Inc. All rights reserved.
                </p>
            </div>
        </footer>

    );
};

export default Footer;