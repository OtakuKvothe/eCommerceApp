import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItem = (item) => {
        setCartItems([...cartItems, item]);
        console.log('added');
        console.log(cartItems.length);
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    const getCart = () => {
        return cartItems;
    };

    return (
        <Context.Provider value={{
            addItem,
            emptyCart,
            getCart
        }}
        >
            {children}
        </Context.Provider>
    );
};

export { ContextProvider, Context };