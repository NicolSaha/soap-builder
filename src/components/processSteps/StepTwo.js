import React from 'react';
import { Link } from "react-router-dom";

const StepTwo = () => {
    return (

        <nav className="flex items-center justify-center space-x-8 pr-4">
            <p className="font-body text-subGreen text-sm leading-5 font-medium">Step <strong>2</strong> of 4</p>
            <ul className="flex items-center space-x-5">

                <li>
                    <Link to={"/step1"}
                       className="block w-2.5 h-2.5 bg-mainLavender rounded-full hover:bg-subGreen"></Link>
                </li>

                <li>
                    <div className="relative flex items-center justify-center">
                        <span className="absolute w-5 h-5 p-px flex">
                            <span className="w-full h-full rounded-full bg-subLavender"></span>
                        </span>
                        <span className="relative block w-2.5 h-2.5 bg-mainLavender rounded-full"></span>
                    </div>
                </li>

                <li>
                    <Link to={"/step3"}
                       className="block w-2.5 h-2.5 bg-subLavender rounded-full hover:bg-subGreen"></Link>
                </li>

                <li>
                    <Link to={"/step4"}
                       className="block w-2.5 h-2.5 bg-subLavender rounded-full hover:bg-subGreen"></Link>
                </li>
            </ul>
        </nav>

    );
};

export default StepTwo;