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
                        description={"Experienced in creating Multi-page and Single-page applications as a Full Stack Developer following industry best practices using current langauges and modern frameworks, libraries and APIs."}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={app} 
                            alt={"Mobile App"}
                            title={'Android App Development'} 
                            description={"Experienced in developing mobile applications for Android Systems using Java. Also knowledgable in using Google's FireBase Realtime Database and Google FireStore"}
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
        justify-content: space-evenly;
    }

    .mid-card {
        margin: 0 1.2rem;
    }
`;

export default ServicesSection;