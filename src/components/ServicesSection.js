import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ServiceCard from '../components/ServiceCard';
import web from '../img/web.svg';
import app from '../img/mobile-app.svg'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyles>
                <Title title={'Services'} span={'Services'}/>
                <div className="service-container">
                    <ServiceCard 
                        image={web} 
                        alt={"Site Map"}
                        title={'Web Development'} 
                        description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam consequuntur. Placeat, quod. Cum temporibus rem, molestias nobis assumenda quas quidem incidunt esse saepe velit aut eveniet ea fugiat nam!'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={app} 
                            alt={"Mobile App"}
                            title={'Android App Development'} 
                            description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, quam consequuntur. Placeat, quod. Cum temporibus rem, molestias nobis assumenda quas quidem incidunt esse saepe velit aut eveniet ea fugiat nam!'}
                        />  
                    </div>
                </div>
            </ServicesSectionStyles>  
        </InnerLayout>
    )
}

const ServicesSectionStyles = styled.section`
    .service-container {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
    }

    .mid-card {
        margin: 0 1.2rem;
    }
`;

export default ServicesSection;