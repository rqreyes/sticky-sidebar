import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { flatten, times } from 'lodash';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		const contentAmount = 20;
		const content = flatten(times(contentAmount, (index) =>
			(<div key={index}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at augue iaculis augue finibus ullamcorper. Cras consectetur vestibulum iaculis. Pellentesque posuere lacus felis, et blandit orci tincidunt in. Morbi eget sem vel felis volutpat lacinia eget quis dolor. Nulla porttitor, sem quis placerat porttitor, nisi dui porttitor sem, non hendrerit justo felis et nunc.</p>
				<p>Mauris sodales ornare elementum. Mauris suscipit lectus vitae imperdiet egestas. Nulla facilisi. Ut consectetur, massa ac vehicula placerat, est enim fringilla ligula, quis vulputate massa quam at justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer pharetra aliquet posuere.</p>
			</div>)
		));

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<div className="App-intro">
					<Grid>
						<Row className="show-grid">
							<Col lg={8}>
								{content.map(content => content)}
							</Col>
							<Col lg={4}><p>lorem ipsum</p></Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default App;
