import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';


class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if (e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });
  }

  render() {
    const value = this.state.value;

    return (
      <div className="App">
        <div>
          <h3 className='stock-search'>Stock Search</h3>
          <SearchBar value={value}
            onChange={this.handleChange}
            onClick={this.handleClick} />
        </div>
        <div>
          <p>Stock</p>
          <hr />
        </div>
        <div className="container">

          <div className="row">
            <div className="col">
              <h5>Index</h5>
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Nifty 50</Card.Title>
                      <Card.Text>
                        450948
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </div>
            <div className="col-md-auto">
              <h6>All Watchlists</h6>
            </div>
            <div className="col col-lg-2">
              <Link>View All</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;