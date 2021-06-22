import React from 'react';
import './header.scss';
import { useHistory } from 'react-router';

export const Header = () =>{
    const history = useHistory();

    const redirectToHomePage = ()=>{
        history.push("/");
    }
    return(
        <div className="header">
            <div className="imageContainer" onClick={redirectToHomePage}>
                <img src="./Foil_logo.png"/>
            </div>
            <div className="blockContainer">
                FOIL | Block explorer
            </div>
        </div>
    )
}