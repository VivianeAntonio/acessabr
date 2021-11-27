import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home"
import { LocationContext } from "../contexts/LocationContext";
import { useState } from 'react';
import Header from '../components/Header'
import { FilterContext } from '../contexts/FilterContext';
import Places from '../components/Places';
import CuratorItem from '../components/Curator';
import { Fragment } from 'react/cjs/react.production.min';

const Routes = () => {
    const [city, setCity] = React.useState ('')
    const [state, setState] = React.useState ('')
    const [ filteredPlaces, setFilteredPlaces] = useState('')
    return (
        <FilterContext.Provider value={{filteredPlaces, setFilteredPlaces}}>
            <LocationContext.Provider value={{city, setCity, state, setState}}>
                <Header/>
                
                    <Switch>
                        <Route path= "/:state/:city" element={
                            <Fragment>
                                <Home/>
                                <Places/>
                                <CuratorItem/>
                            </Fragment>
                        }
                        />                    
                    </Switch>
                
            </LocationContext.Provider>
        </FilterContext.Provider>
    )


}

export default Routes;