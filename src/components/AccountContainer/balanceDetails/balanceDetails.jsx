import React from 'react';
import './balanceDetails.scss';

export const BalanceDetails = ({myBalance}) =>{
    return(
        <div className="balanceDetails">
            <div className="balanceContainer">
                <h4>My Balance:</h4>
                <span>{myBalance}</span>
            </div>
            <div className="priceContainer">
                <h4>Price</h4>
                <div className="priceImage">
                    <div className="image">
                        <img src="./coin.png"></img>
                    </div>
                    <div className="textBox">
                        <div>1</div>
                        <div>ETH</div>
                    </div>
                </div>
                <div className="priceImage">
                    <div className="image">
                        <img src="./Foil.png"></img>
                    </div>
                    <div className="textBox">
                        <div>50,000 FOIL</div>
                    </div>
                </div>
            </div>
        </div>
    )
}