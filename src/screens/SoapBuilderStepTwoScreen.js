import React from 'react';
import { Link } from "react-router-dom";
import StepTwo from '../components/processSteps/StepTwo'
import Soap from '../components/soap/Soap'


const SoapBuilderStepTwoScreen = ({ inputBase, setInputBase }) => {

    function inputBaseHandler(e) {
        setInputBase(e.target.value);
    }
    function clearBaseHandler() {
        setInputBase();
    }

    const selectNeutral = document.getElementById("selectNeutral");
    const selectDry = document.getElementById("selectDry");
    const selectOily = document.getElementById("selectOily");
    if(inputBase === 'neutral skin'){
        selectNeutral.classList.remove("opacity-0");
        selectDry.classList.add("opacity-0");
        selectOily.classList.add("opacity-0");
    } else if(inputBase === 'dry skin') {
        selectDry.classList.remove("opacity-0");
        selectNeutral.classList.add("opacity-0");
        selectOily.classList.add("opacity-0");
    } else if(inputBase === 'oily skin') {
        selectOily.classList.remove("opacity-0");
        selectDry.classList.add("opacity-0");
        selectNeutral.classList.add("opacity-0");
    }

    return (
        <>

            <div className="md:flex md:items-center md:justify-between py-12 px-8">
                <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-mainLavender font-body leading-7 sm:text-4xl sm:leading-9 sm:truncate">
                        CHOOSE YOUR BASE
                    </h2>
                </div>
                <StepTwo />
            </div>

            <div className="overflow-hidden">
                <div className="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <svg className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4" width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
                    </svg>

                    <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                        <div className="mt-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:col-span-2 lg:mt-0">
                            <div className="mt-10 sm:mt-0 col-span-2 m-auto">
                                <svg id="selectNeutral" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 -mb-16"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-48 w-40">
                                    <img className="-mb-14" src="./images/neutral_skin.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="neutral skin" onClick={inputBaseHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-mainGreen text-lg leading-6 font-medium text-gray-900">NEUTRAL</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Perfect for normal skin.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <svg id="selectDry" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 -mb-4"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-40 w-40">
                                    <img src="./images/dry_skin.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="dry skin" onClick={inputBaseHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-subGreen">DRY</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Perfect for dry skin.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <svg id="selectOily" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 -mb-4"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-40 w-40">
                                    <img src="./images/oily_skin.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="oily skin" onClick={inputBaseHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-subGreen">OILY</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Perfect for cleansing oily skin.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>


                        </div>

                        <div className="lg:col-span-1">
                            <div>
                                <p className="text-center font-body capitalize" >{inputBase}</p>
                                <Soap />
                            </div>
                            <div className="flex mt-8">
                                <button onClick={clearBaseHandler} className="inline-flex ">
                                    <p className="text-sm font-body inline-flex items-center justify-center bg-transparent border border-transparent text-mainLavender hover:underline">
                                        CLEAR SELECTIONS
                                    </p>
                                </button>
                                <button className="inline-flex rounded-3xl shadow ml-4">
                                    <Link to={'/step3'}>
                                    <p className="text-sm font-body inline-flex items-center justify-center bg-mainLavender hover:bg-subLavender text-white hover:font-semibold px-8 py-3 text-white rounded-3xl transition duration-100 ease-in-out">
                                        CHOOSE MAGIC 	&rarr;
                                    </p>
                                    </Link>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SoapBuilderStepTwoScreen;
