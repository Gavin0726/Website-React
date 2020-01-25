import React, { Component } from 'react';
//import Header from '../Common/Header';
//import image from '../Assets/Img/PreEnrolment.jpg';
import Header from '../Common/Header';


class PreEnrolment extends Component {
  constructor(props){
      super(props);
      this.state={
          title: "this is about",
          subtitle:"You are a beatiful girl",
          buttonText:"JIng Love me",
          link:"/about",
          showButton:true,
          image:"url('img/about.jpg')"
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
                <section className="page-section" id="PreEnrolment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Pre-Enrolment</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/preenrolment/1.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>2009-2011</h4>
                                            <h4 className="subheading">Our Humble Beginnings</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/preenrolment/2.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>March 2011</h4>
                                            <h4 className="subheading">An Agency is Born</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/preenrolment/3.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>December 2012</h4>
                                            <h4 className="subheading">Transition to Full Service</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <img className="rounded-circle img-fluid" src="img/preenrolment/4.jpg" alt="" />
                                    </div>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>July 2014</h4>
                                            <h4 className="subheading">Phase Two Expansion</h4>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                  <br />Of Our
                  <br />Story!</h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
           </div>





        )

    }
}

export default PreEnrolment;
