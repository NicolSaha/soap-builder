import React, {useState} from 'react';
import { Link } from "react-router-dom";
import StepThree from '../components/processSteps/StepThree'
import Soap from '../components/soap/Soap'


const SoapBuilderStepThreeScreen = ({ totalPrice, setTotalPrice, inputMagicEffects, setInputMagicEffects, inputSoapItem, setInputSoapItem }) => {

    function inputMagicEffectsHandler(e) {
        setInputMagicEffects([ ...inputMagicEffects, e.target.value]);
        setTotalPrice(totalPrice + 0.50);
    }

    let rosemaryEffect = inputMagicEffects.find(effect => effect === 'rosemary');
    const selectRosemary = document.getElementById("rosemary");
    if(rosemaryEffect === 'rosemary'){
        selectRosemary.classList.remove("hidden");
    } else if (rosemaryEffect === null){
        selectRosemary.classList.add("hidden");
    }

    let poppyEffect = inputMagicEffects.find(effect => effect === 'poppyseeds');
    const selectPoppy = document.getElementById("poppyseeds");
    if(poppyEffect === 'poppyseeds'){
        selectPoppy.classList.remove("hidden");
    } else if (poppyEffect === null){
        selectPoppy.classList.add("hidden");
    }

    let oatsEffect = inputMagicEffects.find(effect => effect === 'oats');
    const selectOats = document.getElementById("oats");
    if(oatsEffect === 'oats'){
        selectOats.classList.remove("hidden");
    } else if (oatsEffect === null){
        selectOats.classList.add("hidden");
    }

    let coalEffect = inputMagicEffects.find(effect => effect === 'charcoal');
    const selectCoal = document.getElementById("charcoal");
    if(coalEffect === 'charcoal'){
        selectCoal.classList.remove("hidden");
    } else if (coalEffect === null){
        selectCoal.classList.add("hidden");
    }

    let clayEffect = inputMagicEffects.find(effect => effect === 'redclay');
    const selectClay = document.getElementById("redclay");
    if(clayEffect === 'redclay'){
        selectClay.classList.remove("hidden");
    } else if (clayEffect === null){
        selectClay.classList.add("hidden");
    }

    let spirulinaEffect = inputMagicEffects.find(effect => effect === 'spirulina');
    const selectSpirulina = document.getElementById("spirulina");
    if(spirulinaEffect === 'spirulina'){
        selectSpirulina.classList.remove("hidden");
    } else if (coalEffect === null){
        selectSpirulina.classList.add("hidden");
    }

    return (
        <>

            <div className="md:flex md:items-center md:justify-between py-12 px-8">
                <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-mainLavender font-body leading-7 sm:text-4xl sm:leading-9 sm:truncate">
                        CHOOSE YOUR MAGIC EFFECTS
                    </h2>
                </div>
                <StepThree />
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
                                    <img src="./images/rosemary_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="rosemary" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-mainGreen text-lg leading-6 font-medium text-subGreen">ROSEMARY</h4>
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
                                    <img src="./images/poppyseeds_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="poppyseeds" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">POPPY SEEDS</h4>
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
                                    <img src="./images/oats_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="oats" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-subGreen">ROLLED OATS</h4>
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
                                    <img src="./images/charchoal_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="charcoal" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-mainGreen text-lg leading-6 font-medium">CHARCOAL</h4>
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
                                    <img src="./images/redclay_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="redclay" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="font-body text-subGreen text-lg leading-6 font-medium">RED CLAY</h4>
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
                                    <img src="./images/spirulina_effect.svg" alt=""/>
                                </div>
                                <button
                                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-subLavender text-mainGreen" value="spirulina" onClick={inputMagicEffectsHandler}>Add
                                </button>
                                <div className="mt-5">
                                    <h4 className="text-lg leading-6 font-medium text-mainGreen">SPIRULINA</h4>
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
                                <img id="rosemary" src="./images/rosemary_effect.svg" height="150px" width="150px" style={{marginTop: -150, marginLeft: -45}} className="hidden"/>
                                <img id="poppyseeds" src="./images/poppyseeds_effect.svg" height="125px" width="125px" style={{marginTop: -300, marginLeft: -45}} className="hidden"/>
                                <img id="oats" src="./images/oats_effect.svg" height="150px" width="150px" style={{marginTop: -300, marginLeft: -45}}  className="hidden"/>
                                <img id="charcoal" src="./images/charchoal_effect.svg" height="150px" width="150px" style={{marginTop: -150, marginLeft: 125}}  className="hidden"/>
                                <img id="redclay" src="./images/redclay_effect.svg" height="125px" width="125px" style={{marginTop: 20, marginLeft: 150}}  className="hidden"/>
                                <img id="spirulina" src="./images/spirulina_effect.svg" height="150px" width="150px" style={{marginTop: 20, marginLeft: 150}}  className="hidden"/>

                            </div>
                        </div>

                        <div className="flex mt-8 lg:col-span-4 justify-end items-end mr-0 mt-4">
                            <button className="inline-flex">
                                <p className="text-sm font-body inline-flex items-center justify-center bg-transparent border border-transparent text-mainLavender hover:underline">
                                    CLEAR SELECTIONS
                                </p>
                            </button>
                            <button className="inline-flex rounded-md shadow ml-4">
                                <Link to={'/step4'}>
                                    <p className="text-sm font-body inline-flex items-center justify-center bg-gradient-to-r from-mainLavender to-subLavender hover:from-mainGreen hover:to-subGreen text-white font-semibold px-4 py-2 rounded transition duration-150 ease-in-out">
                                        CHOOSE SCENT 	&rarr;
                                    </p>
                                </Link>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SoapBuilderStepThreeScreen;
