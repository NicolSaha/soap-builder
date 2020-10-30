import React from 'react';

const Header = () => {
    return (
        <div className="bg-mainGreen">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl leading-9 font-extrabold text-subGreen sm:text-4xl sm:leading-10">
                    <span className="block font-title">Build Your Own Soap Bar</span>
                </h2>
                <p className="text-body mt-4 text-lg leading-6 text-white italic">Be in charge of what goes into your body care products!
                    <br/>
                    Let’s brew a little beauty potion.</p>
            </div>
        </div>

    );
};

export default Header;