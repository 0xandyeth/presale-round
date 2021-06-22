import React from 'react';
import './claimAccountContainer.scss';
import {ClaimDetails} from './claimDetails/claimDetails';
import {BalanceDetails} from '../../components/AccountContainer/balanceDetails/balanceDetails';

export const ClaimAccountContainer = () =>{
    return(
        <div className="claimAccountContainer">
            <h3>Investor account Information</h3>
            <div className="subClaimAccountContainer">
                <ClaimDetails/>
                <BalanceDetails myBalance="200 200 200"/>
            </div>
        </div>
    )
}