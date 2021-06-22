import React,{useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import './customModal.scss';

export const CustomModal=({showHide, showHideRef})=> {
    return (
      <div className="modalContainer">
        <Modal show={showHide} onHide={()=>showHideRef()} id="errorModal">
        <Modal.Header closeButton>
          <Modal.Title>
              <p>Sorry,</p>
              <h5>You are not eligible for this project since you are not involved in the whitelist.</h5>
          </Modal.Title>
        </Modal.Header>
      </Modal>
      </div>
    );
  }