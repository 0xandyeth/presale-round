import React from 'react';
import { TranscationList } from '../components/TranscationList/transcationList';
import { AccountContainer } from '../components/AccountContainer/accountContainer';
import { SubHeaderImage } from '../components/SubHeader/subHeader';

export const TokenDetailContainer = () =>{
    return(
        <>
            <SubHeaderImage/>
            <div className="tokenImage">
                <AccountContainer/>
                <TranscationList/>
            </div>
        </>
    )
}