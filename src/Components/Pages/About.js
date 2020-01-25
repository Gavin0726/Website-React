import React, { Component } from 'react';
import Header from '../Common/Header';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "this is about",
            subtitle: "You are a beatiful girl",
            buttonText: "JIng Love me",
            link: "/about",
            showButton: true,
            image: "url('img/about.jpg')"
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
                                <h2 className="section-heading text-uppercase">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit</p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


export default About;
