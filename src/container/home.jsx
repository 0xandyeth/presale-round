import React, { useState } from 'react';
import { TranscationList } from '../components/TranscationList/transcationList';
import { AccountContainer } from '../components/AccountContainer/accountContainer';
import './home.scss';
import {useHistory} from 'react-router-dom';
import { CustomModal } from '../components/Modal/customModal';

export const Home = () =>{
    const history = useHistory();
    const [activeMetaClass,setActiveMetaClass] = useState("");
    const [activeTrustClass,setActiveTrustClass] = useState("");
    const [metaActive,setMetaActive] = useState(false);
    const [trustActive,setTrustActive] = useState(false);
    const [metaActive2,setMetaActive2] = useState(true);
    const [trustActive2,setTrustActive2] = useState(true);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const gotoTokenDetailsPage = ()=>{
        history.push('./tokenDetails');
    }

    const addMetaCSS = (activeClass)=>{
        setActiveMetaClass(activeClass);
        setMetaActive(true);
        setTrustActive(false);
        setActiveTrustClass("");
        setShowErrorModal(true);
        setTrustActive2(false);
        setMetaActive2(true);
    }
    const addTrustCSS = (activeClass)=>{
        setActiveTrustClass(activeClass);
        setTrustActive(true);
        setMetaActive(false);
        setActiveMetaClass("");
        setShowErrorModal(true);
        setMetaActive2(false);
        setTrustActive2(true);
    }

    const openErrorModal = ()=>{
        setShowErrorModal(!showErrorModal)
      }

    return(
        <div className="mainHome">
            <div className="doggyImage">
                <img src="./doggy.png" />
            </div>
            <div className="parachuteImage">
                <img src="./parachute_1.png" />
            </div>
            <div className="satelliteImage">
                <img src="./satellite.png" />
            </div>
           
            <div className="homeData">
                <div className="ethereumImage">
                    <img src="./ethereum-logo.png" width="130" height="30" />
                </div>
               

                <div className="homeHeader">
                    <p>SEED ROUND</p>
                    <h4>PRIVATE SALE</h4>
                </div>
                <div className="tilesContainer">
                    <div className={`metaTile ${activeMetaClass}`} onClick={()=>addMetaCSS("metaTileActive")}>
                        <div style={{ visibility: metaActive ? "visible" : "hidden" }} className="tickMark1">
                        </div>
                        <img src="./MetaMask_fox.png"  style={{filter: !metaActive2 ? "grayscale(108%)" : ""}}/>
                        <p>MetaMask</p>
                    </div>
                    <div className={`trustTile ${activeTrustClass}`} onClick={()=>addTrustCSS("trustTileActive")}>
                        <div style={{ visibility: trustActive ? "visible" : "hidden" }} className="tickMark1">
                        </div>
                        <img src="./Trust_Wallet.png" style={{filter: !trustActive2 ? "grayscale(108%)" : ""}}/> 
                        <p>Trust Wallet</p>
                    </div>
                </div>

                <CustomModal showHide={false} showHideRef={openErrorModal}/>

                <div className="walletMainContainer">
                    <button className="walletButton" onClick={()=>gotoTokenDetailsPage()}>CONNECT WALLET</button>
                </div>
                <div className="parachuteImageBottom">
                <img src="./par_bottom.png" />
            </div>
                <div className="priceMainContainer">
                    <h5>Price</h5>
                    <div className="imageContainer">
                        <div className="image1">
                            <div className="image">
                                <img src="./coin.png"></img>
                            </div>
                            <div className="textBox">
                                1 ETH
                            </div>
                        </div>
                        <div className="image2">
                            <span className="equalTwo">=</span>
                            <span className="image">
                                
                                <img src="./Foil.png"></img>
                            </span>
                            <span className="textBox">
                                50 000 FOIL
                            </span>
                        </div>
                    </div> 
                </div>
               
            </div>

            </div>
    )
}