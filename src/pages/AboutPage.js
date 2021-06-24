import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../styles/Layouts';
import Title from '../components/Title';

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyle>
        <Title title={'About Me'} span={'About Me'} />
      </AboutStyle>
    </MainLayout>
  )
}

const AboutStyle = styled.section``;

export default AboutPage;