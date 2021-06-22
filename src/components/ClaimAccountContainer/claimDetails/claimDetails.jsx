import React from 'react';
import './claimDetails.scss';

export const ClaimDetails = () =>{
    return(
        <>
        <div className="claimDetails">

                {/* 1st row */}
                <div className="claimTable">
                <div className="eachRow">
                    <div className="label">
                        Contract Address
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
            </div>
            <div className="allocations">
                <div className="allocation1">
                    <p>ETH Allocation</p>
                    <p> 70 ETH</p>
                </div>
                <div className="allocation2">
                    <p>EETH Allocation</p>
                    <p> 3 500 500</p>
                </div>
                <div className="allocation3">
                    <p>Remaining Balance</p>
                    <p> 3 200 000</p>
                </div>
            </div>
            <div className="buttonsContainer">
                <div className="claimableBalance">
                    Claimable balance: 300 300 300
                </div>
                <button className="sendButton">SEND</button>
            </div>
            
            
        </div>
        
        </>

    )
}