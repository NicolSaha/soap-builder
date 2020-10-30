import React from 'react';
import {Link} from "react-router-dom";
import RenderProducts from './components/checkout/RenderProducts';
import RenderCart from './components/checkout/RenderCart';


const CheckoutScreen = ({ cart, setCart, page, setPage} ) => {

    const PAGE_PRODUCTS = 'products';
    const PAGE_CART = 'cart';

    //DEEP COPY
    function jsonCopy(src) {
        return JSON.parse(JSON.stringify(src));
    }

    function removeFromCart(productToRemove) {
        setCart(
            cart.filter((product) => product !== productToRemove)
        )
    }

    function incrementAmount(index) {
        const newItems = jsonCopy([...cart]);

        newItems[index].amount++;

        setCart(newItems);
    }

    function decrementAmount(index) {
        const newItems = jsonCopy([...cart]);

        newItems[index].amount--;

        setCart(newItems);
    }

    function navigateTo(nextPage) {
        setPage(nextPage)
    }

    let qtyInCart = cart.reduce(function(prev, current) {
        return prev + +current.amount
    }, 0);


    return (
        <div>
            <header>
                <button onClick={ () => navigateTo(PAGE_CART) }>Go to Cart ({qtyInCart})</button>
            </header>
            <main>
                {page === PAGE_PRODUCTS ? <RenderProducts products={products} addToCart={addToCart}/> : null}
                {page === PAGE_CART ? <RenderCart products={products} cart={cart} removeFromCart={removeFromCart} incrementAmount={incrementAmount} decrementAmount={decrementAmount} navigateTo={navigateTo} PAGE_PRODUCTS={PAGE_PRODUCTS}/> : null}
            </main>
        </div>
    );
};

export default CheckoutScreen;
