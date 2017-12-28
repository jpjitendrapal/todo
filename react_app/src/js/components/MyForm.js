import React from 'react';

export default class MyForm extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="my-form">
                <div>Hello from</div>
                <input type="text" />
            </div>
        );
    }
}