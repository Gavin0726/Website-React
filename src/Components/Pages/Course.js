import React, {Component} from 'react';


import CourseItem from './CourseItem';
import Header from '../Common/Header';
//import img1 from '../Assets/Img/01-thumbnail.jpg';

const Courses = [
    { herf: '#CourseModal1', title: 'Threads', image: 'img/course/01-thumbnail.jpg', description: 'Illustration' },
    { herf: '#CourseModal2', title: 'Explore', image: 'img/course/02-thumbnail.jpg', description: 'Graphic Design' },
    { herf: '#CourseModal3', title: 'Finish', image: 'img/course/03-thumbnail.jpg', description: 'Identity' },
    { herf: '#CourseModal4', title: 'Lines', image: 'img/course/04-thumbnail.jpg', description: 'Branding' },
    { herf: '#CourseModal5', title: 'Southwest', image: 'img/course/05-thumbnail.jpg', description: 'Website Design' },
    { herf: '#CourseModal6', title: 'Window', image: 'img/course/06-thumbnail.jpg', description: 'Photography' }
];

class Course extends Component {
  constructor(props){
      super(props);
      this.state={
          title: "this is about",
          subtitle:"You are a beatiful girl",
          buttonText:"JIng Love me",
          link:"/about",
          showButton:true,
          image:"url('img/course.png')"
      }
  }
    render() {
        return (
          <div>
          <Header
              title={this.state.title}
              subtitle={this.state.subtitle}
              buttonText={this.state.buttonText}
              link={this.state.link}
              showButton={this.state.showButton}
              image={this.state.image}
          />
            <section className="bg-light page-section" id="Course">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Course</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {Courses.map((Course, index) => {
                            return <CourseItem {...Course} key={index}></CourseItem>

                        })}


                    </div>
                </div>
            </section>
            </div>
        )
    }
}


export default Course;
