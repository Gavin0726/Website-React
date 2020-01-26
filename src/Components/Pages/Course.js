import React, { Component } from 'react';


import CourseItem from './CourseItem';
import Header from '../Common/Header';
//import img1 from '../Assets/Img/01-thumbnail.jpg';

const Courses = [
    {
        herf: '#CourseModal4',
        title: 'Diploma of Project Management',
        image: 'img/course/course-4.jpg',
        description: 'This business qualification is designed for individuals aspiring to careers requiring project plan, task analysis, quality measurement; Individuals wanting to master project management skills to become a project leader'
    },
    {
        herf: '#CourseModal5',
        title: 'Certificate IV in Marketing and Communication',
        image: 'img/course/course-5.jpg',
        description: 'This qualification is suitable for those who use well-developed marketing and communication skills and a broad knowledge base in a wide variety of contexts.'
    },

    {
        herf: '#CourseModal2',
        title: 'Diploma of Business Administration',
        image: 'img/course/course-2.jpg',
        description: 'Students in this course should have an introductory knowledge in the overall management skills of administering a business and help you develop your understanding of theoretical aspects and specific technical skills'
    },
    {
        herf: '#CourseModal3',
        title: 'Advanced Diploma of Business',
        image: 'img/course/course-3.jpg',
        description: 'This course is for students who have had experience in a senior administrative role and is looking to further their skills in operating a busines'
    },
    {
        herf: '#CourseModal1',
        title: 'Certificate IV in Business Administration',
        image: 'img/course/course-1.jpg',
        description: 'This qualification reflects the role of individuals who use well-developed administrative skills  base in a wide variety of administrative contexts.'
    },

    {
        herf: '#CourseModal6',
        title: 'Advanced Diploma of Program Management',
        image: 'img/course/course-6.png',
        description: 'This qualification applies to individuals with knowledge base in marketing and communication to ensure that functions are effectively conducted in an organisation or business area.'
    }
];

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "See what does your future hold",
            subtitle: "FIND YOUR ANSWER",
            buttonText: "JIng Love me",
            link: "/about",
            showButton: false,
            image: "url('img/course.jpg')"
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
                                <h2 className="section-heading text-uppercase">Business Course We Offer</h2>
                                <h3 className="section-subheading text-muted">Find out more about each course.</h3>
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
