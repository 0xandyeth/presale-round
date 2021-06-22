import React from 'react';
import './footer.scss';
import { FaFacebookF, FaYoutube, FaTwitter, FaGithub, FaLinkedinIn, FaPaperPlane, FaCcMastercard, FaBitcoin, FaRedditAlien } from "react-icons/fa";
import {BsFillChatSquareQuoteFill} from "react-icons/bs";

export const Footer = () =>{
    return(
        <div className="footer">
            <div className="imageFooter">
                <img src="./Foil_White.png"/>
            </div>
            <div className="footerLinks">
                <FaFacebookF/>
                <FaYoutube/>
                <FaTwitter/>
                <FaGithub/>
                <BsFillChatSquareQuoteFill/>
                <FaPaperPlane/>
                <FaCcMastercard/>
                <FaLinkedinIn/>
                <FaBitcoin/>
                <FaRedditAlien/>
            </div>
        </div>
    )
}