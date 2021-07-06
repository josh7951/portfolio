import React from 'react';
import styled from 'styled-components';

function SkillIcon({title, image, alt, link}) {
  return (
    <SkillsGridStyle>
      <h6>{title}</h6>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="skill-image" src={image} alt={alt} />
      </a>
    </SkillsGridStyle>
  )
}

const SkillsGridStyle = styled.div`
  display: inline-block;
  text-align: center;
  .skill-image {
    display: block;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: auto;
  }
`;

export default SkillIcon;