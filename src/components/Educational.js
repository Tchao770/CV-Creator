import React, { Component } from 'react';

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