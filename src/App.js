import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import Footer from './components/layout/Footer'
import SoapBuilderStepOneScreen from "./screens/SoapBuilderStepOneScreen";
import SoapBuilderStepTwoScreen from "./screens/SoapBuilderStepTwoScreen";
import SoapBuilderStepThreeScreen from "./screens/SoapBuilderStepThreeScreen";
import SoapBuilderStepFourScreen from "./screens/SoapBuilderStepFourScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import CheckoutScreen from "./screens/CheckoutScreen";

import './styles/cart.css';

function App() {

    const [inputName, setInputName] = useState('');
    const [inputType, setInputType] = useState('');
    const [inputBase, setInputBase] = useState("");
    const [purchased, setPurchased] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputMagicEffects, setInputMagicEffects] = useState([]);
    const [inputScent, setInputScent] = useState([]);
    const [chosenItems, setChosenItems] = useState(false);
    const [inputSoapItem, setInputSoapItem] = useState('');

    const PAGE_PRODUCTS = 'products';

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);

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


    let qtyInCart = cart.reduce(function(prev, current) {
        return prev + +current.amount
    }, 0);

    return (
      <Router>
          <div className="App">
              <>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/step1'
                     render={(props) => (<SoapBuilderStepOneScreen {...props}
                                                                   inputType={inputType} setInputType={setInputType}
                                                                   purchased={purchased} setPurchased={setPurchased}
                                                                   totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                                                                   chosenItems={chosenItems} setChosenItems={setChosenItems}
                     />)}
              />
              <Route path='/step2' render={(props) => (<SoapBuilderStepTwoScreen {...props} inputBase={inputBase} setInputBase={setInputBase} />)}
              />
              <Route path='/step3'  render={(props) => (<SoapBuilderStepThreeScreen {...props}
                                                                                  totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                                                                                  inputMagicEffects={inputMagicEffects} setInputMagicEffects={setInputMagicEffects}
                                                                                  inputSoapItem={inputSoapItem} setInputSoapItem={setInputSoapItem}
              />)}
              />
              <Route path='/step4' render={(props) => (<SoapBuilderStepFourScreen {...props}
                                                                                 totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                                                                                 inputScent={inputScent} setInputScent={setInputScent}
              />)}
              />
              <Route path='/confirmation' render={(props) => (<ConfirmationScreen {...props}
                                                                                  inputName={inputName} setInputName={setInputName}
                                                                                  inputType={inputType} setInputType={setInputType}
                                                                                  inputBase={inputBase} setInputBase={setInputBase}
                                                                                  purchased={purchased} setPurchased={setPurchased}
                                                                                  inputMagicEffects={inputMagicEffects} setInputMagicEffects={setInputMagicEffects}
                                                                                  inputScent={inputScent} setInputScent={setInputScent}
                                                                                  totalPrice={totalPrice} setTotalPrice={setTotalPrice}
                                                                                  qtyInCart={qtyInCart}
                                                                                  cart={cart} setCart={setCart}
              />)}
              />
              <Route path='/cart' render={(props) => (<CheckoutScreen {...props}
                                                                                      cart={cart} setCart={setCart}
                                                                                      page={page} setPage={setPage}
                                                                                      qtyInCart={qtyInCart}
                                                                                      removeFromCart={removeFromCart}
                                                                                      incrementAmount={incrementAmount}
                                                                                      decrementAmount={decrementAmount}


              />)}
              />
              <Footer />
              </>
          </div>
      </Router>
  );

}

export default App;
