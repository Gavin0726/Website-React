import React, { Component } from 'react';
import TeamNumber from './TeamNumber';


const TeamNumbers= [
    {title:'Kay Garland', subtitle:'Lead Designer',img:'img/team/1.jpg'},
    {title:'Larry Parker', subtitle:'Lead Marketer',img:'img/team/2.jpg'},
    {title:'Diana Pertersen', subtitle:'Lead Developer',img:'img/team/3.jpg'}
]


class Team extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="team">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        
                        {TeamNumbers.map((number,index) => {
                            return <TeamNumber {...number} key={index}/>
                        })}
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center">
                            <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Team;