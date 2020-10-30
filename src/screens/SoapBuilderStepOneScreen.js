import React from 'react';
import { Link } from "react-router-dom";
import StepOne from '../components/processSteps/StepOne'
import Soap from '../components/soap/Soap'


const SoapBuilderStepOneScreen = ({ inputType, setInputType, setTotalPrice }) => {


    function inputTypeHandler(e) {
       setInputType(e.target.value);
       setTotalPrice( + 5);
    }

    function clearTypeHandler() {
        setInputType();
    }

    const selectBody = document.getElementById("selectBody");
    const selectHair = document.getElementById("selectHair");
    const selectFace = document.getElementById("selectFace");
    const selectShave = document.getElementById("selectShave");
    if(inputType === 'body'){
        selectBody.classList.remove("opacity-0");
        selectHair.classList.add("opacity-0");
        selectFace.classList.add("opacity-0");
        selectShave.classList.add("opacity-0");
    } else if(inputType === 'hair') {
        selectHair.classList.remove("opacity-0");
        selectFace.classList.add("opacity-0");
        selectShave.classList.add("opacity-0");
        selectBody.classList.add("opacity-0");
    } else if(inputType === 'face') {
        selectFace.classList.remove("opacity-0");
        selectHair.classList.add("opacity-0");
        selectShave.classList.add("opacity-0");
        selectBody.classList.add("opacity-0");
    } else if(inputType === 'shave') {
        selectShave.classList.remove("opacity-0");
        selectFace.classList.add("opacity-0");
        selectHair.classList.add("opacity-0");
        selectBody.classList.add("opacity-0");
    }

    return (
        <>
            <div className="md:flex md:items-center md:justify-between py-12 px-8">
                <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-mainLavender font-body leading-7 sm:text-4xl sm:leading-9 sm:truncate">
                        CHOOSE YOUR TYPE
                    </h2>
                </div>
                <StepOne />
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
                            <div className="mt-10 sm:mt-0">
                                <svg id="selectBody" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 ml-32"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-32 w-32 ">
                                    <img src="./images/body_vector.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="body" onClick={inputTypeHandler} >Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-subGreen text-lg leading-6 font-medium text-gray-900">BODY</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Perfect for daily body care.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <svg id="selectHair" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 ml-32"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-32 w-32">
                                    <img src="./images/hair_vector.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="hair" onClick={inputTypeHandler} >Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">HAIR</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Perfect for washing hair.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <svg id="selectFace" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 ml-32"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-32 w-32">
                                    <img src="./images/face_vector.svg"alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="face" onClick={inputTypeHandler} >Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">FACE</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Perfect for cleansing face daily.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <svg id="selectShave" className="opacity-0 flex-shrink-0 mr-1.5 h-5 w-5 text-green-400 ml-32"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clip-rule="evenodd"/>
                                </svg>
                                <div className="flex items-center h-32 w-32">
                                    <img src="./images/shave_vector.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="shave" onClick={inputTypeHandler} >Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-subGreen text-lg leading-6 font-medium text-gray-900">SHAVE</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Perfect for shaving duties.
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="lg:col-span-1">
                            <div>
                                <p className="text-center font-body capitalize" >{inputType}</p>
                                <Soap />
                            </div>

                                <div className="flex mt-8">
                                        <button onClick={clearTypeHandler} className="inline-flex">
                                            <p className="text-sm font-body inline-flex items-center justify-center bg-transparent border border-transparent text-mainLavender hover:underline">
                                        CLEAR SELECTIONS
                                    </p>
                                </button>
                                <button className="inline-flex rounded-3xl shadow ml-4">
                                    <Link to={'/step2'}>
                                    <p className="text-sm font-body inline-flex items-center justify-center bg-mainLavender hover:bg-subLavender text-white hover:font-semibold px-8 py-3 text-white rounded-3xl transition duration-100 ease-in-out">
                                        CHOOSE BASE 	&rarr;
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

export default SoapBuilderStepOneScreen;
