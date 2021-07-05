import React from 'react';
import styled from 'styled-components';
import AboutImage from '../img/coding-glasses.jpg';
import PrimaryButton from '../components/PrimaryButton';
import resume from '../files/jmejia-resume.docx';

function ImageSection() { 
  return(
    <ImageSectionStyle>
      <div className="left-content">      
        <img src={ AboutImage } alt="Glasses forefront with desktop code background"/>
      </div>

      <div className="right-content">
        <h4>Biography</h4>
        <p className="description">
          I am an alumni of California State University, Northridge with a Bachelor of Science degree in Computer Science. I currently work full time as a Front End Developer for a small e-commerce company and do Freelance Full Stack Development on the side!
        </p>
      
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Spoken Languages</p>
            <p>Location</p>
          </div>
          <div className="info">
            <p>: Joshua Mejia</p>
            <p>: 26</p>
            <p>: English, Tagalog</p>
            <p>: California, United States</p>
          </div>
        </div>
        <PrimaryButton title='Download Resume' link={ resume } fileName="jmejia-resume.pdf"/>
      </div>
    </ImageSectionStyle>
  )
}

const ImageSectionStyle = styled.div`
  display: flex;
  margin-top: 4rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    .left-content{
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    height: 50vh;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
  }

  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
    }
    .description {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title, .info {
        p {
          padding: 0.3em 0;
        }
      }
    }
  }
`;

export default ImageSection;