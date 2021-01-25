import General from "./components/General.js"
import Educational from "./components/Educational.js"
import Practical from "./components/Practical.js"
import Skills from "./components/Skills.js"
import React, { Component } from 'react';
import { MdLibraryAdd } from 'react-icons/md';

import './styles/App.css';

// Responsible for rendering input form
class App extends Component {
	constructor() {
		super();
		this.state = {
			practicalArr: [],
			skillsArr: []
		}
		this.appendPractical = this.appendPractical.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
	}

	appendPractical(type) {
		//    practicalArr.push((<Practical classname="sectionCard" />))
		let tempArr = (type === "practical") ? this.state.practicalArr : this.state.skillsArr;
		let key = new window.Date();
		tempArr.push(key.getTime());
		if (type === "practical") {
			this.setState({
				practicalArr: tempArr
			});
		}
		else if (type === "skills") {
			this.setState({
				skillsArr: tempArr
			});
		}
	}
	handleRemove(val, type) {
		const tempArr = (type === "practical") ? this.state.practicalArr : this.state.skillsArr;
		let index = tempArr.indexOf(val);
		tempArr.splice(index, 1);
		if (type === "practical") {
			this.setState({
				practicalArr: tempArr
			});
		}
		else if (type === "skills") {
			this.setState({
				skillsArr: tempArr
			});
		}
	}

	render() {
		const { practicalArr, skillsArr } = this.state;
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
					<h2>Work Experience <MdLibraryAdd className="buttons" onClick={() => this.appendPractical("practical")} /></h2>
					<div className="sideButton"></div>
					{practicalArr.map(practical => {
						return (
							<Practical classname="sectionCard" key={practical} itemId={practical} handleRemove={() => this.handleRemove(practical, "practical")} />
						);
					})
					}
					<hr style={{ width: "75%" }} />
					<h2>Skills <MdLibraryAdd className="buttons" onClick={() => this.appendPractical("skills")} /></h2>
					{skillsArr.map(skill => {
						return (
							<Skills classname="sectionCard" key={skill} itemId={skill} handleRemove={() => this.handleRemove(skill, "skills")} />
						);
					})
					}
				</div>
			</div>

		);
	}
}

export default App;