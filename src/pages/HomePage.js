import React from 'react';
import styled from 'styled-components';
import Particle from '../components/Particle';
import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

function HomePage() {
  return (
    <HomePageStyle>
      <div className="particle-container">
        <Particle />
      </div>
      <div className="home-container">
        <h1>Hello World! My name is <span>Joshua Mejia</span></h1>
        <p>
          I am a recent graduate of California State University, Northridge with a Bachelor of Science degree in Computer Science. I currently work full time as a Front End Developer for a small e-commerce business and do Freelance Full Stack Development on the side! Welcome to my site! :)
        </p>
        <div class="links-container">
          <a href="https://github.com/josh7951" className="icon i-github">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/jmejia7951/" className="icon i-linkedin">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/josh7951/" className="icon i-instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/josh7951" className="icon i-facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </HomePageStyle>
  )
}

const HomePageStyle = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .home-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .links-container {
      display: flex;
      justify-content: center;
      margin-top: 1rem;

      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: all .4 ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }

        svg {
          margin: .5rem;
        }
      }

      .i-github {
        &:hover {
          border: 2px solid #6E5494;
          color: #6E5494;
        }
      }

      .i-linkedin {
        &:hover {
          border: 2px solid #0E76A8;
          color: #0E76A8;
        }
      }

      .i-instagram {
        &:hover {
          border: 2px solid #833AB4;
          color: white;
          background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

    }
  }

`;

export default HomePage;