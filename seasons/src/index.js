import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

	state = { lat: null, errorMessage: '' };

	// FIRST TO BE INVOKED.
	// Good practice :- do not do data loading on constructor
	// constructor(props) {
		// Must do it with super
		// super(props);
		// this.state = { lat: null, errorMessage: '' };
	//}

	// Method will be called ONE TIME when the component first rendered on the screen
	// Good Practice :- do data loading on ComponentDidMount()
	componentDidMount() {
		console.log("My Component was rendered on the screen");
		window.navigator.geolocation.getCurrentPosition(
			position => {
				console.log(position);
				// Never ever do direct assignment
				// Whenever you call setState it will re-invoke render method
				this.setState({ lat: position.coords.latitude });
			},
			err => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// Anytime the component gets update :- everytime the component gets updated
	// Do more data loading whenever there is a change in the current state/props
	componentDidUpdate() {
		console.log("My Component was re-rendered");
	}

	// Remove the component from the App
	// Do a cleanup process :- whenever using non-react library 
	// componentWillUnmount() {}

	renderContent = () => {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error : {this.state.errorMessage} </div>;
		} else if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat}/>;
		} else {
			return <Spinner text="Please accept location request."/>;
		}
	}


	// MUST HAVE FOR ALL REACT Object
	// Try not to have too many return stmt on render method.
	render() {
		return (
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	};
}


ReactDOM.render(<App />, document.querySelector('#root'));