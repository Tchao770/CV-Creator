import General from "./components/General.js"
import Educational from "./components/Educational.js"
import Practical from "./components/Practical.js"
import React, { Component } from 'react';


import './styles/App.css';

// Responsible for rendering input form
class App extends Component {
	constructor() {
		super();
		this.state = {
			practicalArr: []
		}
		this.appendPractical = this.appendPractical.bind(this);
	}

	appendPractical() {
		//    practicalArr.push((<Practical classname="sectionCard" />))
		let tempArr = this.state.practicalArr;
		tempArr.push((<Practical classname="sectionCard" key={tempArr.length} />));
		this.setState({
			practicalArr: tempArr
		});
	}
	render() {
		const { practicalArr } = this.state
		return (
			<div>
				<div className="container">
					<div className="sideButton"></div>
					<General classname="sectionCard" fullName="fullName" />
					<hr style={{ width: "75%" }} />
					<h2>Education</h2>
					<div className="sideButton"></div>
					<Educational classname="sectionCard" />
					<hr style={{ width: "75%" }} />
					<h2>Work Experience<button onClick={this.appendPractical}>Add</button></h2>
					<div className="sideButton"></div>
					{practicalArr.map(practical => {
						return (
							practical
						);
					})

					}
				</div>
			</div>

		);
	}
}

export default App;