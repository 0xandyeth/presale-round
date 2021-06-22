import React from 'react';
import { TranscationList } from '../components/TranscationList/transcationList';
import { ClaimAccountContainer } from '../components/ClaimAccountContainer/claimAccountContainer';
import { SubHeaderImage } from '../components/SubHeader/subHeader';

export const Claim = () =>{
    return(
        <>
            <SubHeaderImage/>
            <div className="claimImage">
                <ClaimAccountContainer/>
                <TranscationList/>
            </div>
        </>
    )
}