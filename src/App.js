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

    const [inputType, setInputType] = useState('');
    const [inputBase, setInputBase] = useState("");
    const [purchased, setPurchased] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [inputMagicEffects, setInputMagicEffects] = useState([]);
    const [inputScent, setInputScent] = useState([]);
    const [chosenItems, setChosenItems] = useState(false);
    const [inputSoapItem, setInputSoapItem] = useState('');

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState('products');

    const [products] = useState([
        {name: 'Custom Soap 1',
            price: '9.99',
            image: './assets/soap1.jpg',
            amount: 1,
            id: 1,
        },
        {name: 'Custom Soap 2',
            price: '8.99',
            image: './assets/soap2.jpg',
            amount: 1,
            id: 2,
        }
    ])


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
                                                                                  inputType={inputType} setInputType={setInputType}
                                                                                  inputBase={inputBase} setInputBase={setInputBase}
                                                                                  purchased={purchased} setPurchased={setPurchased}
                                                                                  inputMagicEffects={inputMagicEffects} setInputMagicEffects={setInputMagicEffects}
                                                                                  inputScent={inputScent} setInputScent={setInputScent}
                                                                                  totalPrice={totalPrice} setTotalPrice={setTotalPrice}
              />)}
              />
                  <Route path='/checkout' render={(props) => (<CheckoutScreen {...props}
                                                                                      cart={cart} setCart={setCart}
                                                                                      page={page} setPage={setPage}
                  />)}
                  />
              <Footer />
              </>
          </div>
      </Router>
  );

}

export default App;
