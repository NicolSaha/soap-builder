import React from 'react';
import Header from '../components/layout/Header'
import {Link, useHistory} from "react-router-dom";


const HomeScreen = () => {

    let history = useHistory();

    function handleBtnStepOne() {
        history.push("/step1");
    }

    return (
        <>
        <Header />

            <div className="relative bg-white">
                <div className="h-56 bg-gradient-to-b from-mainGreen to-subGreen sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 rounded-br-full">
                    <img className="w-full h-full object-cover rounded-tl-full rounded-br-full"
                         src="./images/soapbuilder_main.jpg"
                         alt=""/>
                </div>
                <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:ml-auto md:w-1/2 md:pl-10">
                        <div className="table w-full">
                            <div className="table-row-group">
                                <div className="table-row">
                                    <h3 className="px-6 table-cell font-body text-subGreen text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">1</h3>
                                    <div className="table-cell">
                                        <p className="font-body text-base leading-6 font-semibold uppercase tracking-wider text-mainGreen">
                                            CHOOSE YOUR TYPE
                                        </p>
                                        <p className="mb-4 text-lg leading-7 font-body text-mainGreen ">
                                            Body, hair, face, or shave
                                        </p>
                                    </div>
                                </div>

                                <div className="table-row">
                                    <h3 className="px-6 table-cell font-body text-subGreen text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">2</h3>
                                    <div className="table-cell">
                                        <p className="font-body text-base leading-6 font-semibold uppercase tracking-wider text-mainGreen">
                                            CHOOSE YOUR BASE
                                        </p>
                                        <p className="mb-4 text-lg leading-7 font-body text-mainGreen ">
                                            Dry, neutral, oily
                                        </p>
                                    </div>
                                </div>

                                <div className="table-row">
                                    <h3 className="px-6 table-cell font-body text-subGreen text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">3</h3>
                                    <div className="table-cell">
                                        <p className="font-body text-base leading-6 font-semibold uppercase tracking-wider text-mainGreen">
                                            CHOOSE YOUR MAGIC EFFECTS
                                        </p>
                                        <p className="mb-4 text-lg leading-7 font-body text-mainGreen ">
                                            A variety of options from Mother Nature’s goodness
                                        </p>
                                    </div>
                                </div>

                                <div className="table-row">
                                    <h3 className="px-6 table-cell font-body text-subGreen text-3xl leading-9 font-extrabold sm:text-4xl sm:leading-10">4</h3>
                                    <div className="table-cell">
                                        <p className="font-body text-base leading-6 font-semibold uppercase tracking-wider text-mainGreen">
                                            CHOOSE YOUR SCENT
                                        </p>
                                        <p className="mb-4 text-lg leading-7 font-body text-mainGreen ">
                                            Organic essential oils
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-8 ml-32">
                            <button onClick={handleBtnStepOne} className="inline-flex rounded-md shadow">
                                <Link to={'/step1'}
                                    className="font-body inline-flex items-center justify-center bg-gradient-to-r from-mainLavender to-subLavender hover:from-mainGreen hover:to-subGreen text-white font-semibold px-4 py-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                        GET STARTED 	&rarr;
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomeScreen;
