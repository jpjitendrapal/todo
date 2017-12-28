import React,{PropTypes} from 'react';
// import Header from './common/header';
import CoursePage from './coursesPages';
class App extends React.Component{
    render(){
        var courses = [
            {
                title: "First Course"
            },
            {
                title: "Second Course"
            }
        ];
        return (
            <div className="container">
                <CoursePage {...courses} />   
            </div>
        )
    }   
}

// App.PropTypes = {
//     children: PropTypes.object.isRequired
// };

export default App;