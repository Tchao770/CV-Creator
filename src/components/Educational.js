import React, { Component } from 'react';

class EducationalInfos extends Component {
    render() {
        return (
            <div>
                <h1 id="fullName">Tommy Chao</h1>
                <p>tchao770@gmail.com</p>
                <p>(209)123-4567</p>
            </div>
        );
    }
}

class EducationalInfo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {classname} = this.props;
        return (
            <div className={classname}>
                <h2>Education</h2>
                <input type="text" placeholder="Institution" /><br />
                <input type="text" placeholder="Major" /><br />
                <input type="text" placeholder="Graduation Date" /><br />
            </div>
        );
    }
}

export default EducationalInfo;