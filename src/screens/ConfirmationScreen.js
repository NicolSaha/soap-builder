import React from 'react';
import {Link} from "react-router-dom";

const ConfirmationScreen = ({ inputName, inputType, inputBase, inputMagicEffects, inputScent, totalPrice, qtyInCart, setInputName, cart, setCart }) => {

    function inputNameHandler(e) {
        setInputName(e.target.value);
     }

     function addToCart() {
        setCart([...cart, { name: inputName, image: './images/soap1.jpg', price: totalPrice, amount: 1 }]);
    }

    return (
        <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-subGreen opacity-50"></div>
                    </div>
                    <div
                        className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                        role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div>
                            <div
                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                            </div>
                            <div className="mt-3 text-center sm:mt-5">
                                <h3 className="text-lg font-title leading-6 font-medium text-mainGreen"
                                    id="modal-headline">
                                    Amazing, your potion is ready!
                                </h3>

                                <div className="mt-2">
                                    <p className="text-sm leading-5 text-mainGreen">
                                        IT ‘S TIME TO NAME IT</p>
                                </div>
                            </div>
                            <br/>
                            <div className="mt-2">
                                <div className=" ml-16">
                                    <label htmlFor="nameIt"
                                           className="mr-1 text-sm font-medium leading-5 text-mainLavender">Name
                                        it: </label>
                                    <div className="inline-flex mt-1 relative rounded-md shadow-sm w-3/4">
                                        <input id="nameIt" value={ inputName } onChange={ inputNameHandler } className=" form-input w-3/4 sm:text-sm sm:leading-5"
                                               placeholder="My Beauty Potion"/>
                                    </div>
                                </div>
                                <br/>
                                <p className="font-body text-md leading-8 text-mainGreen text-left mx-10 tracking-wide">
                                    <i className="text-mainLavender">TYPE:</i> <span
                                    className="text-subLavender"> {inputType} </span>
                                    <br/>
                                    <i className="text-mainLavender">BASE:</i> <span
                                    className="text-subLavender"> {inputBase} </span>
                                    <br/>
                                    <i id="magicEffects" className="text-mainLavender">MAGIC EFFECTS:</i> <span
                                    className="text-subLavender">
                                    { inputMagicEffects.map((effect) => <span>{`${effect}`} </span>) } </span>
                                    <br/>
                                    <i className="text-mainLavender">SCENT:</i> <span
                                    className="text-subLavender"> {inputScent} </span>
                                    <br/>
                                    <i className="text-mainLavender">Price:</i> <span
                                    className="text-subLavender"> €{totalPrice} </span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                        <span className="flex w-full rounded-3xl shadow-sm sm:col-start-2">
                            <button type="button"
                                    onClick={ addToCart }
                                    className="font-body inline-flex justify-center w-full rounded-3xl border border-white bg-mainLavender hover:bg-subLavender text-white hover:font-semibold px-8 py-3 text-white rounded-3xl hover:text-white focus:outline-none transition ease-in-out duration-100 sm:text-sm sm:leading-5">
                                  <Link to={'/cart'}>
                                <p> GO TO CHECKOUT ({qtyInCart})</p>
                                       </Link>
                            </button>
                        </span>
                            <span className="mt-3 flex w-full rounded-3xl shadow-sm sm:mt-0 sm:col-start-1">
                            <button  type="button"
                                    className="font-body inline-flex justify-center w-full rounded-3xl border border-white bg-subGreen hover:bg-subLavender text-white hover:font-semibold px-8 py-3 text-white rounded-3xl hover:text-white focus:outline-none transition ease-in-out duration-100 sm:text-sm sm:leading-5">
                                  <Link to={'/step4'}>
                                      <p>GO BACK</p>
                                  </Link>
                            </button>

                        </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ConfirmationScreen;
