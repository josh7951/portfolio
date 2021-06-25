import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';
import ImageSection from '../components/ImageSection';
import ServicesSection from '../components/ServicesSection';

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyle>
        <Title title={'About Me'} span={'About Me'} />
        <ImageSection />
        <ServicesSection />
      </AboutStyle>
    </MainLayout>
  )
}

const AboutStyle = styled.section``;

export default AboutPage;