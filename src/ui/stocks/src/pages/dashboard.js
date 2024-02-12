import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import tata from './Images/tata-logo.png';
import airtel from './Images/Airtel1.png';
import coalindia from './Images/Coal-India.png';
import IOCL from './Images/IOCL.png';
import jfs from './Images/jfs.svg';
import maruthi from './Images/maruthi.png';
import nykaa from './Images/Nykaa.svg';
import sbi from './Images/SBI.png';
import shree from './Images/shree.png';
import UPL from './Images/UPL.png';

const Dashboard = () => {
    return (
        <>
            <div>
                <p>Stock</p>
                <hr />
            </div>
            <div class="container">

                <div class="row">
                    <div class="col">
                        <h5 class="mt-3">Index</h5>
                        <Row className="header"> 
                            <Col>
                                <Card className="cards">
                                    <Card.Body>
                                        <Card.Title>Nifty 50</Card.Title>
                                        <Card.Text>
                                            450948  76.85(0.35%)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </Col>

                            <Col>
                                <Card className="cards">
                                    <Card.Body>
                                        <Card.Title>Sensex</Card.Title>
                                        <Card.Text>
                                            72237.13   150.15(0.21%)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className='index'>
                                <Card className="cards">
                                    <Card.Body>
                                        <Card.Title>Bank Nifty</Card.Title>
                                        <Card.Text>
                                            45959.29   -11.25(0.03%)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div class="col-md-auto">
                        <h6>All Watchlists</h6>
                    </div>
                    <div class="col col-lg-2">
                        <Link>View All</Link>
                    </div>
                </div>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        <div className="coln">
                            <h5>Top Gainers</h5>
                            <Row className="mt-3"> 
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={jfs} alt="jio" />
                                        <Card.Body>
                                            <Card.Title>JIO Financial Serv</Card.Title>
                                            <Card.Text>
                                                282.15  28.35(11.35%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={IOCL} alt="IOCL" />
                                        <Card.Body>
                                            <Card.Title>IOCL</Card.Title>
                                            <Card.Text>
                                                175.75   12.85(7.89%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={tata} alt="tata logo" />
                                        <Card.Body>
                                            <Card.Title>Tata Motors</Card.Title>
                                            <Card.Text>
                                                938.00   59.25(6.74%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={coalindia} alt="Coal-India" />
                                        <Card.Body>
                                            <Card.Title>Coal India</Card.Title>
                                            <Card.Text>
                                                444.45   25.65(6.11%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        <div className="coln">
                            <h5>Stocks In News</h5>
                            <Row>
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={maruthi} alt="suzuki" />
                                        <Card.Body>
                                            <Card.Title>Maruti Suzuki</Card.Title>
                                            <Card.Text>
                                                10529.60  -128.35(1.35%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={sbi} alt="SBI" />
                                        <Card.Body>
                                            <Card.Title>SBI</Card.Title>
                                            <Card.Text>
                                                647.75   1.85(0.39%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={tata} alt="tata" />
                                        <Card.Body>
                                            <Card.Title>Tata Motors</Card.Title>
                                            <Card.Text>
                                                938.00   59.25(6.74%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={IOCL} alt="IOCL" />
                                        <Card.Body>
                                            <Card.Title>IOCL</Card.Title>
                                            <Card.Text>
                                                175.75   12.85(7.89%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        <div className="coln">
                            <h5>Top Loser</h5>
                            <Row>
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={UPL} alt="upl" />
                                        <Card.Body>
                                            <Card.Title>UPL</Card.Title>
                                            <Card.Text>
                                                487.30  -48.35(8.35%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={shree} alt="shree cement" />
                                        <Card.Body>
                                            <Card.Title>Shree Cement</Card.Title>
                                            <Card.Text>
                                                27647.75   -872.85(3.39%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={airtel} alt="airtel" />
                                        <Card.Body>
                                            <Card.Title>Bharati Airtel</Card.Title>
                                            <Card.Text>
                                                1118.00   -32.25(2.74%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="stocks">
                                    <Card.Img src={nykaa} alt="nykaa" />
                                        <Card.Body>
                                            <Card.Title>Nykaa</Card.Title>
                                            <Card.Text>
                                                160.75   -3.85(1.89%)
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;