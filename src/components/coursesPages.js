import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../actions/courseActions';

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            course:{title: ""}
        };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClicksSave = this.onClicksSave.bind(this);
        this.props.dispatch(courseActions.createCourse({title: "First course"}));
        this.props.dispatch(courseActions.createCourse({title: "Second course"}));
    }
    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;  
        this.setState({course: course});
    }
    onClicksSave(){
        this.props.dispatch(courseActions.createCourse(this.state.course));
        this.setState({course : {title: ""}});
    }

    courseRow(course, index){
        return (<div key={index}>{course.title}</div>)
    }
    render(){
        return(
            <div>
                <h2>Courses</h2>
                {this.props.courses.map(this.courseRow)}
                <h3>Add course</h3>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="ADD" onClick={this.onClicksSave} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        courses: state.courses
    }
}
export default connect(mapStateToProps)(CoursesPage);