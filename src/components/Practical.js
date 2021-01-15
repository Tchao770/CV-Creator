import React, { Component } from 'react';

class PracticalInfo extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {classname} =  this.props;
        return(<div className={classname}>
            <h2>Practical Experience</h2>
            <input type="text" placeholder="Company"/><br/>
            <input type="text" placeholder="Position"/><br/>
            <input type="text" placeholder="Years worked"/><br/>
        </div>
    );
    }
}

export default PracticalInfo;