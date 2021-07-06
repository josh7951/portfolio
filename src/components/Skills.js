import React from 'react';
import styled from 'styled-components';
import Title from '../components/Title';
import SkillIcon from '../components/SkillIcon';
import { InnerLayout } from '../styles/Layouts';
import html from '../img/skills/html-icon.png';
import css from '../img/skills/css-icon.png';
import js from '../img/skills/js-icon.png';
import jQuery from '../img/skills/jquery-icon.png';
import react from '../img/skills/reactjs-icon.png';
import php from '../img/skills/php-icon.png';
import vuejs from '../img/skills/vuejs-icon.png';
import mysql from '../img/skills/mysql-icon.png';
import laravel from '../img/skills/laravel-icon.png';
import aws from '../img/skills/aws-icon.png';
import java from '../img/skills/java-icon.png';
import photoshop from '../img/skills/photoshop-icon.png';
import illustrator from '../img/skills/illustrator-icon.png';
import androidstudio from '../img/skills/androidstudio-icon.png';
import firebase from '../img/skills/firebase-icon.png';
import python from '../img/skills/python-icon.png';
import git from '../img/skills/git-icon.png';
import github from '../img/skills/github-icon.png';

function Skills(){
  return (
    <SkillsStyle>
        <Title title={'Skills'} span={'Skills'}/>
        <InnerLayout>
          <div className="skills">
            {/* Icons used from https://icon-icons.com/ */}
            <SkillIcon 
              title={'HTML'}
              image={html}
              alt={'HTML 5 Icon'}
              link={'https://html.spec.whatwg.org/'}
            />
            <SkillIcon 
              title={'CSS'}
              image={css}
              alt={'CSS 3 Icon'}
              link={'https://developer.mozilla.org/en-US/docs/Web/CSS'}
            />
            <SkillIcon 
              title={'JavaScript'}
              image={js}
              alt={'JavaScript Icon'}
              link={'https://www.javascript.com/'}
            />
            <SkillIcon 
              title={'jQuery'}
              image={jQuery}
              alt={'jQuery Icon'}
              link={'https://jquery.com/'}
            />
            <SkillIcon 
              title={'Vue.js'}
              image={vuejs}
              text={'VueJS Icon'}
              link={'https://vuejs.org/'}
            />
            <SkillIcon 
              title={'React'}
              image={react}
              text={'React Icon'}
              link={'https://reactjs.org/'}
            />
            <SkillIcon 
              title={'PHP'}
              image={php}
              alt={'PHP Icon'}
              link={'https://www.php.net/'}
            />
            <SkillIcon 
              title={'Laravel'}
              image={laravel}
              alt={'Laravel Icon'}
              link={'https://laravel.com/'}
            />
            <SkillIcon 
              title={'MySQL'}
              image={mysql}
              alt={'MySQL Icon'}
              link={'https://www.mysql.com/'}
            />            
            <SkillIcon 
              title={'AWS'}
              image={aws}
              alt={'AWS Icon'}
              link={'https://aws.amazon.com/'}
            />            
            <SkillIcon 
              title={'Adobe Photoshop'}
              image={photoshop}
              alt={'Adobe Photoshop Icon'}
              link={'https://www.adobe.com/products/photoshop.html'}
            />
            <SkillIcon 
              title={'Adobe Illustrator'}
              image={illustrator}
              alt={'Adobe Illustrator Icon'}
              link={'https://www.adobe.com/products/illustrator.html'}
            />
            <SkillIcon 
              title={'Java'}
              image={java}
              alt={'Java Icon'}
              link={'https://www.java.com/en/'}
            />
            <SkillIcon 
              title={'Android Studio'}
              image={androidstudio}
              alt={'Android Studio Icon'}
              link={'https://developer.android.com/studio'}
            />
            <SkillIcon 
              title={'Google Firebase'}
              image={firebase}
              alt={'Google Firebase Icon'}
              link={'https://firebase.google.com/'}
            />
            <SkillIcon 
              title={'Python'}
              image={python}
              alt={'Python Icon'}
              link={'https://www.python.org/'}
            />
            <SkillIcon 
              title={'Git'}
              image={git}
              alt={'Git Icon'}
              link={'https://git-scm.com/'}
            />
            <SkillIcon 
              title={'Github'}
              image={github}
              alt={'Github Icon'}
              link={'https://github.com/'}
            />
          </div>
        </InnerLayout>
    </SkillsStyle>
  )
}

const SkillsStyle = styled.div`
  .skills{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1.8rem;
    @media screen and (max-width: 700px){
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default Skills;