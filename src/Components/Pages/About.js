import React, { Component } from 'react';
import Header from '../Common/Header';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "We specialises in Business",
            buttonText: "",
            link: "/about",
            showButton: false,
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
                                <h2 className="section-heading text-uppercase"></h2>
                                <h3 className="section-subheading text-muted">We offer first-rate courses leading to Diplomas and Advanced Diplomas.</h3>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-6">
                            <h4 className="service-heading ">About Our College</h4>
                              <p className="text-muted text-left">Founded in 2012, Berkley Business Institute (BBI) is a leading Registered Training Organisation (RTO) under the Times Education Group. We specialise in Business offering first-rate courses leading to Diplomas and Advanced Diplomas.

<p className="text-muted">Located in the heart of Sydney, BBI’s campus gives its students unparalleled access to famous attractions, restaurants, beaches, parks, museums and countless other cultural experiences. We enrol students from all over the world, so we understand that experiencing a new culture is just one of the many possible benefits of studying at BBI. Our teachers and staff are dedicated to providing you with the best possible educational experience whilst in Sydney.</p>
</p>
                            </div>
                              <div className="col-md-6">
                            <img className="img-fluid" src="img/about/about1.jpg" alt="" />
                            </div>
                        <div className="row ">

                            <div className="col-md-6">
                                <img className="img-fluid" src="img/about/about2.jpg" alt="" />
                            </div>
                            <div className="col-md-6">
                                <h4 className="service-heading text-left">About Our facilities</h4>
                                  <p className="text-muted text-left">Located near World Square shopping centre, Berkeley Business Institutes boasts a newly renovated modern campus. Students can easily access the campus by train, bus, or light rail. We offer state-of-the-art facilities with a brand new library, student lounge, kitchen, classrooms, etc.</p>
<p className="text-muted text-left">
Our library offers a wide range of reference texts and computers for self-study. Students can also choose to hang out in the student lounge to eat or relax with friends in between classes. Our kitchen is fully equipped with microwaves and a vending machine. Wifi is also offered in all areas of the campus.</p>
                            </div>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}


export default About;
