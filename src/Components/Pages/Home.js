import React, { Component } from 'react';
import Header from '../Common/Header';

import HomeItem from './HomeItem';



const home = [
    {
        title: 'Welcome',
        description: 'Berkeley Business Institute is dedicated to giving you the tools, inspiration, and experience you will need to get started in the business and management industry',
        icon: 'fas fa-shopping-cart fa-stack-1x fa-inverse',
        image: 'img/home/home-box-1.jpg',
        link:'About the college'
    },
    {
        title: 'Courses Offered',
        description: 'Courses at Berkeley Business Institute are catered to those looking to work in any field that utilises business acumen. We offer diploma and advanced diploma courses..',
        icon: 'fas fa-laptop fa-stack-1x fa-inverse',
        image: 'img/home/home-box-2.jpg',
        link:'Download course guide'
    },
    {
        title: 'New Student',
        description: 'We accept both international and domestic students offering a range of intake dates, so you don’t have to wait long to get started. Plan your future with us and apply today.',
        icon: 'fas fa-lock fa-stack-1x fa-inverse',
        image: 'img/home/home-box-3.jpg',
        link:'Apply now'
    }
]


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Flexible intake dates all year round",
            subtitle: "START YOUR BUSINESS EDUCATION",
            buttonText: "APPLY NOW",
            link: "/",
            showButton: true,
            image: "url('img/header.jpg')"
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
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Welcome to </h2>
                                <h3 className="section-subheading text-muted"> Berkeley Business Institute where your future starts.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            {home.map((home, index) => {
                                return <HomeItem {...home} key={index} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }



}

export default Home;
