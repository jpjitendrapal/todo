import React from "react";
import Task from "./task";

export default class TasksList extends React.Component{
    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        console.log("life-methods");
        debugger;
    }
    componentDidMount(){
        console.log("life-methods");
        debugger;
    }
    
    render(){
        debugger;
        return (
            <div>
                <Task name="this is the first task" >Hello There</Task>
                <Task name="this is the second task"  />
                <Task name="this is the second task"  />
                <Task name="ok"/>
            </div>
        )
    }
}