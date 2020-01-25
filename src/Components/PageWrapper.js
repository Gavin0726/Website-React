import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PageWrapper extends Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink " id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">Berkeley Business Institute</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav text-uppercase ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/Home" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/Course">Course</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/PreEnrolment" >Pre-Enrolment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link js-scroll-trigger" to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }

}

export default PageWrapper;
