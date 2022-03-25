import React, { useCallback, useState } from 'react';

import Navbar from "./components/Navbar"
import Page from "./components/Page"

import { 
    Route, useLocation,
} from 'wouter';
import { onMouseMove } from './scripts/cursor';

const pages = require("./pages.json");

export default function App(){

    //Which in menu is bold (change on click and on scroll)
    const [bold, setBold] = useState("");

    //Number of times wheel has scrolled, need 3 to change page for a better UX
    const [scrolls, setScrolls] = useState(0);
    const [location, setLocation] = useLocation();


    const scrollPage = useCallback((e) => {
        
        if(scrolls > 4){ //Wheel has to go 3 times before scrolling

            const pagesName = Object.keys(pages);
            const offset = e.deltaY > 0 ? +1 : -1; //if scrolled down or up

            const current = location.substring(1) != "" ? location.substring(1) : "home"; //home case
            const next = pagesName[(pagesName.indexOf(current) + offset)] || current; //If is in home or about it will stay there

            //reset and change page
            setScrolls(0);
            setBold(next);
            setLocation(`/${next}`);
        }
        else{
            setScrolls(scrolls+1);
        }
   })

    return(
        <div id="fullPage" onWheel = {(e) => scrollPage(e)} onMouseMove={onMouseMove}>
            <Navbar bold={bold} setBold={setBold}/>

            <Route path="/">
                <Page {...pages.home}/>
            </Route>
            <Route path="/home">
                <Page {...pages.home}/>
            </Route>

            <Route path="/code">
                <Page {...pages.code}/>
            </Route>

            <Route path="/design">
                <Page {...pages.design}/>
            </Route>
            
            <Route path="/about">
                <Page {...pages.about}/>
            </Route>

        </div>
    );


}