import React, { Component } from 'react';
//import Header from '../Common/Header';
//import image from '../Assets/Img/PreEnrolment.jpg';
import Header from '../Common/Header';


class PreEnrolment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "SYDNEY AUSTRALIA",
            subtitle: "Great Places To Live and Study",
            buttonText: "JIng Love me",
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
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/preenrolment/1.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">

                                                <h4 className="subheading">Choose course</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Check out our course outline and entry requirements for each course on our website or request for our course booklet. If you are not sure, please feel free to contact us for more details. Please check here for Pre-Enrolment information</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li >
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/preenrolment/2.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                
                                                <h4 className="subheading">Complete the enrolment form</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Read the terms & conditions and the Student Handbook available from our website then complete the enrolment form online or request a paper enrolment form.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/preenrolment/3.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                
                                                <h4 className="subheading">Provide relevant documentation</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Attach all relevant documents including:
    
                                                <br />A copy of Enrolment Form
                                                <br />A copy of your passport
                                                <br />A copy of your current visa (if applying onshore)
                                                <br />Certified True copy of qualifications (Must be translated in English)
                                                <br /> English Test results (IELTS, TOEFL or PTE Academic)
                                                <br />Any working experience (if relevant)
                                                <br />RPL application (if relevant)
                                                <br />LLN Need Assessment form</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li >
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/preenrolment/4.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                
                                                <h4 className="subheading">Submit your application</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">Return your application form and the necessary documents to:
                                                <br />Berkeley Business Institute
                                                <br />Level 1, 338 Pitt St. Sydney NSW 2000
                                                <br />OR email to: info@berkeley.edu.au</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <img className="rounded-circle img-fluid" src="img/preenrolment/4.jpg" alt="" />
                                        </div>
                                        <div className="timeline-panel">
                                            <div className="timeline-heading">
                                                
                                                <h4 className="subheading">Receive an offer letter</h4>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">If your application is successful you will receive a letter of offer for you nominated course along with a written agreement. When we receive your signed student agreement and fees, we will send you an electronic Confirmation of Enrolment (eCoE). This eCoE is used to apply for your student visa.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-inverted">
                                        <div className="timeline-image">
                                            <h4>The Visa
                  <br />is
                  <br />Granted!</h4>
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
