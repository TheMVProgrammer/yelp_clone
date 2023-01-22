import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props => {
    const [restaurants, setRestaurants] = useState([]);

    const AddRestaurants = restaurant => {
        setRestaurants([...restaurants, restaurant])
    }

    return (
        <RestaurantsContext.Provider value={{restaurants, setRestaurants, AddRestaurants}}>
            {props.children}
        </RestaurantsContext.Provider>
    )
}