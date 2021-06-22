import React from 'react';
import './transcationList.scss';
import { Table, Accordion, Card } from 'react-bootstrap';

export const TranscationList = () =>{

    const handleKey = (e)=>{
        debugger
    }
    return(
        <div className="transcationList">
            <h3>Transcations List Of the Seed Round</h3>
            <Table responsive striped hover variant="dark" bordered={false} className="desktopIpadOnly">
                <thead>
                    <tr>
                    <th>Tax Hash</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Quantity</th>
                    <th>Method</th>
                    <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0x636f18afe81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                    <tr>
                        <td>0x636f18ae81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                    <tr>
                        <td>0x636f18ae81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                    <tr>
                        <td>0x636f18ae81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                    <tr>
                        <td>0x636f18ae81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                    <tr>
                        <td>0x636f18ae81188a00bed283ed70c114e7502</td>
                        <td>0x00000000000000000000000000000000000</td>
                        <td>Foil Network: Deployer</td>
                        <td>100 000 000</td>
                        <td>0x78393923</td>
                        <td>137 days 23 hrs ago</td>
                    </tr>
                </tbody>
            </Table>


            <Accordion defaultActiveKey="0" className="mobileOnly"> 
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        0x636f18afe81188a00bed283ed70c114e7500
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className="dataContainer">
                            <div className="label">
                                <p>From</p>
                                <p>To</p>
                                <p>Quantity</p>
                                <p>Method</p>
                                <p>Age</p>
                            </div>
                            <div className="value">
                                <p>0x00000000000000000000000000000000000</p>
                                <p>Foil Network: Deployer</p>
                                <p>100 000 000</p>
                                <p>0x78393923</p>
                                <p>137 days 23 hrs ago</p>
                            </div>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        1x636f18afe81188a00bed283ed70c114e7501
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <div className="dataContainer">
                            <div className="label">
                                <p>From</p>
                                <p>To</p>
                                <p>Quantity</p>
                                <p>Method</p>
                                <p>Age</p>
                            </div>
                            <div className="value">
                                <p>0x00000000000000000000000000000000000</p>
                                <p>Foil Network: Deployer</p>
                                <p>100 000 000</p>
                                <p>0x78393923</p>
                                <p>137 days 23 hrs ago</p>
                            </div>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="2">
                        2x636f18afe81188a00bed283ed70c114e7502
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <div className="dataContainer">
                            <div className="label">
                                <p>From</p>
                                <p>To</p>
                                <p>Quantity</p>
                                <p>Method</p>
                                <p>Age</p>
                            </div>
                            <div className="value">
                                <p>0x00000000000000000000000000000000000</p>
                                <p>Foil Network: Deployer</p>
                                <p>100 000 000</p>
                                <p>0x78393923</p>
                                <p>137 days 23 hrs ago</p>
                            </div>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="3">
                        3x636f18afe81188a00bed283ed70c114e7503
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <div className="dataContainer">
                            <div className="label">
                                <p>From</p>
                                <p>To</p>
                                <p>Quantity</p>
                                <p>Method</p>
                                <p>Age</p>
                            </div>
                            <div className="value">
                                <p>0x00000000000000000000000000000000000</p>
                                <p>Foil Network: Deployer</p>
                                <p>100 000 000</p>
                                <p>0x78393923</p>
                                <p>137 days 23 hrs ago</p>
                            </div>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="4" onClick = {(e)=>handleKey(e)} >
                        4x636f18afe81188a00bed283ed70c114e7504<span></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <div className="dataContainer">
                            <div className="label">
                                <p>From</p>
                                <p>To</p>
                                <p>Quantity</p>
                                <p>Method</p>
                                <p>Age</p>
                            </div>
                            <div className="value">
                                <p>0x00000000000000000000000000000000000</p>
                                <p>Foil Network: Deployer</p>
                                <p>100 000 000</p>
                                <p>0x78393923</p>
                                <p>137 days 23 hrs ago</p>
                            </div>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <a className="etherScanLink"> GO TO ETHERSCAN</a>
        </div>
    )
}