import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import FavouritesPage from "./pages/FavouritesPage";
import Navigation from "./components/Navigation";

const App = () => {
    return (
        <>
            <Navigation/>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/favourites' element={<FavouritesPage/>}/>
                </Routes>
            </div>
        </>

    );
};

export default App;

