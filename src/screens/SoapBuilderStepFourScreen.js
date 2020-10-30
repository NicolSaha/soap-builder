import React, {useState} from 'react';
import {Link} from "react-router-dom";
import StepFour from '../components/processSteps/StepFour'
import Soap from '../components/soap/Soap'

const SoapBuilderStepFourScreen = ({ inputScent, setInputScent }) => {

    function inputScentHandler(e) {
        setInputScent(e.target.value)
    }


    const selectLavender = document.getElementById("lavender");
    if(inputScent === 'lavender'){
        selectLavender.classList.remove("hidden");
    } else if (inputScent === null){
        selectLavender.classList.add("hidden");
    }

    const selectCitrus = document.getElementById("citrus");
    if(inputScent === 'citrus'){
        selectCitrus.classList.remove("hidden");
    } else if (inputScent === null){
        selectCitrus.classList.add("hidden");
    }


    const selectNettle = document.getElementById("nettle");
    if(inputScent === 'nettle'){
        selectNettle.classList.remove("hidden");
    } else if (inputScent === null){
        selectNettle.classList.add("hidden");
    }

    const selectVanilla = document.getElementById("vanilla");
    if(inputScent === 'vanilla'){
        selectVanilla.classList.remove("hidden");
    } else if (inputScent === null){
        selectVanilla.classList.add("hidden");
    }

    const selectCamomille = document.getElementById("camomille");
    if(inputScent === 'camomille'){
        selectCamomille.classList.remove("hidden");
    } else if (inputScent === null){
        selectCamomille.classList.add("hidden");
    }

    const selectHoney = document.getElementById("honey");
    if(inputScent === 'honey'){
        selectHoney.classList.remove("hidden");
    } else if (inputScent === null){
        selectHoney.classList.add("hidden");
    }


    return (
        <>
            <div className="md:flex md:items-center md:justify-between py-12 px-8">
                <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-mainLavender font-body leading-7 sm:text-4xl sm:leading-9 sm:truncate">
                        CHOOSE YOUR SCENT
                    </h2>
                </div>
                <StepFour />
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

                    <div className="relative lg:grid lg:grid-cols-4 lg:gap-x-8">
                        <div className="mt-10 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:col-span-3 lg:mt-0">
                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/lavender_smell.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="lavender" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-mainGreen text-lg leading-6 font-medium text-subGreen">LAVENDER</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Clearing
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/citrus_smell.svg" alt="" />
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="citrus" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">CITRUS</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Exfoliating
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/nettle_smell.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="nettle" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-subGreen">NETTLE</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Exfoliating
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/vanilla_smell.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="vanilla" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-mainGreen text-lg leading-6 font-medium">VANILLA</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Cleansing
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>

                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/camomille_smell.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="camomille" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-subGreen text-lg leading-6 font-medium">CAMOMILLE</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-mainGreen">
                                        Nourishing
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>
                            <div className="mt-10 sm:mt-0">
                                <div className="flex items-center h-20 w-20">
                                    <img src="./images/honey_smell.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="honey" onClick={inputScentHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">HONEY</h4>
                                    <p className="font-body mt-2 text-base leading-6 text-subGreen">
                                        Boosting
                                    </p>
                                    <p className="font-body mt-2 text-base leading-6 text-subLavender hover:underline">
                                        Ingredients
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div>
                                <Soap />
                                <img id="lavender" src="./images/lavender_smell.svg" height="150px" width="150px" style={{marginTop: -125, marginLeft: -45}} className="hidden"/>
                                <img id="citrus" src="./images/citrus_smell.svg" height="125px" width="125px" style={{marginTop: -300, marginLeft: -45}} className="hidden"/>
                                <img id="nettle" src="./images/nettle_smell.svg" height="150px" width="150px" style={{marginTop: -300, marginLeft: -45}}  className="hidden"/>
                                <img id="vanilla" src="./images/vanilla_smell.svg" height="150px" width="150px" style={{marginTop: -130, marginLeft: 125}}  className="hidden"/>
                                <img id="camomille" src="./images/camomille_smell.svg" height="125px" width="125px" style={{marginTop: 20, marginLeft: 150}}  className="hidden"/>
                                <img id="honey" src="./images/honey_smell.svg" height="150px" width="150px" style={{marginTop: 20, marginLeft: 150}}  className="hidden"/>
                            </div>
                    </div>

                        <div className="flex ml-8 lg:col-span-4 justify-end items-end mr-0 mt-4">
                            <button className="inline-flex rounded-md shadow ml-4">
                                <p className="text-lg font-body inline-flex items-center justify-center bg-subGreen bg-gradient-to-r hover:from-mainGreen hover:to-subGreen text-white px-4 py-2 rounded transition duration-150 ease-in-out">
                                    ADD TO LIKED
                                </p>
                            </button>
                            <button id="addToCart_btn" className="inline-flex rounded-md shadow ml-4">
                                <Link to={'/confirmation'}>
                                    <p
                                        className="text-lg font-body inline-flex items-center justify-center bg-gradient-to-r from-mainLavender to-subLavender hover:from-mainGreen hover:to-subGreen text-white font-semibold px-4 py-2 rounded transition duration-150 ease-in-out">
                                        ADD TO CART
                                    </p>
                                </Link>
                            </button>
                        </div>
                        <button  className="ml-16 lg:col-span-4 justify-end items-end mr-0 float-right">
                            <p className="text-sm font-body inline-flex items-center justify-center bg-transparent border border-transparent text-mainLavender hover:underline">
                                CLEAR SELECTIONS
                            </p>
                        </button>

                    </div>

                </div>
            </div>

        </>
    );
};

export default SoapBuilderStepFourScreen;
