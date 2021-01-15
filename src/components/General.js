import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classname } = this.props;
        return (
            <div className={classname}>
                <h2>General</h2>
                <input type="text" placeholder="Full Name" /><br />
                <input type="email" placeholder="E-mail" /><br />
                <input placeholder="Phone Number" /><br />
            </div>
        );
    }
}

export default GeneralInfo;