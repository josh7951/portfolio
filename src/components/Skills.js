import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import ProgressBar from '../components/ProgressBar';
import { InnerLayout } from '../styles/Layouts';

function Skills(){
  return (
    <SkillsStyle>
        <Title title={'Skills'} span={'Skills'}/>
        <InnerLayout>
          <div className="skills">
            <ProgressBar 
              title={'HTML'}
              width={'100%'}
              text={'Expert'}
            />
            <ProgressBar 
              title={'CSS'}
              width={'75%'}
              text={'Advanced'}
            />
            <ProgressBar 
              title={'JavaScript'}
              width={'75%'}
              text={'Advanced'}
            />
            <ProgressBar 
              title={'PHP'}
              width={'75%'}
              text={'Advanced'}
            />
            <ProgressBar 
              title={'Vue.js'}
              width={'50%'}
              text={'Intermediate'}
            />
            <ProgressBar 
              title={'Laravel'}
              width={'50%'}
              text={'Intermediate'}
            />
          </div>
        </InnerLayout>
    </SkillsStyle>
  )
}

const SkillsStyle = styled.div`
  .skills{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;