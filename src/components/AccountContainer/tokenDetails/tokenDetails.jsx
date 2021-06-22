import React from 'react';
import { useHistory } from 'react-router';
import './tokenDetails.scss';

export const TokenDetails = () =>{
    const history = useHistory();
    const redirectToClaims = ()=>{
        history.push("/claim");
    }
    return(
        <>
        <div className="tokenDetails">

            {/* 1st row */}
            <div className="tokenTable">
            <div className="eachRow">
                <div className="label">
                    Token
                </div>
                <div className="values">
                    0x636f18ae81188a00bed283ed70c114e7502
                </div>
            </div>

            {/* 2nd row */}
            <div className="eachRow">
                <div className="label">
                    Presale Round
                </div>
                <div className="values">
                    Seed
                </div>
            </div>

            {/* 3rd row */}
            <div className="eachRow">
                <div className="label">
                    Investor's Address
                </div>
                <div className="values">
                    0x636f18ae81188a00bed283ed70c114e7502
                </div>
            </div>

            {/* 4th row */}
            <div className="eachRow">
                <div className="label">
                    Lockup Address
                </div>
                <div className="values">
                    0x636f18ae81188a00bed283ed70c114e7502
                </div>
            </div>

            {/* 5th row */}
            <div className="eachRow">
                <div className="label">
                    Amount
                </div>
                <div className="values">
                    Fixed amount from the White List
                </div>
            </div>
            </div>
            <button onClick={()=>redirectToClaims()}className="sendButton">SEND</button>
            
        </div>
        
        </>

    )
}