import React, { Component } from 'react';
import Header from '../Common/Header';

import HomeItem from './HomeItem';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';


const services = [
    {title: 'E-Commerce',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit', icon:'fas fa-shopping-cart fa-stack-1x fa-inverse'},
    {title: 'Responsive Design',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fas fa-laptop fa-stack-1x fa-inverse'},
    {title: 'Web Security',description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.', icon:'fas fa-lock fa-stack-1x fa-inverse'}
]


class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "this is Home",
            subtitle:"You are a beatiful girl",
            buttonText:"Love me",
            link:"/about",
            showButton:true,
            image:"url('img/header.jpg')"
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
                            {services.map((service,index) => {
                                return <HomeItem {...service} key={index}/>
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }



}

export default Home;
