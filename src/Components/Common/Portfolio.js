import React, {Component} from 'react';


import PortfolioItem from './PortfolioItem';
//import img1 from '../Assets/Img/01-thumbnail.jpg';

const portfolioes = [
    { herf: '#portfolioModal1', title: 'Threads', image: 'img/portfolio/01-thumbnail.jpg', description: 'Illustration' },
    { herf: '#portfolioModal2', title: 'Explore', image: 'img/portfolio/02-thumbnail.jpg', description: 'Graphic Design' },
    { herf: '#portfolioModal3', title: 'Finish', image: 'img/portfolio/03-thumbnail.jpg', description: 'Identity' },
    { herf: '#portfolioModal4', title: 'Lines', image: 'img/portfolio/04-thumbnail.jpg', description: 'Branding' },
    { herf: '#portfolioModal5', title: 'Southwest', image: 'img/portfolio/05-thumbnail.jpg', description: 'Website Design' },
    { herf: '#portfolioModal6', title: 'Window', image: 'img/portfolio/06-thumbnail.jpg', description: 'Photography' }
];

class Portfolio extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        {portfolioes.map((portfolio, index) => {
                            return <PortfolioItem {...portfolio} key={index}></PortfolioItem>

                        })}


                    </div>
                </div>
            </section>
        )
    }
}


export default Portfolio;