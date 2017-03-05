import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					<Grid>
						<Row className="show-grid">
							<Col lg={8}><p>lorem ipsum</p></Col>
							<Col lg={4}><p>lorem ipsum</p></Col>
						</Row>
					</Grid>
				</p>
			</div>
		);
	}
}

export default App;
