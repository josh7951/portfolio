import React from 'react';
import styled from 'styled-components';

function ResumeItem({year, title, subtitle, list}) {
  return (
    <ResumeItemStyle>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
        <ul className="key-points">{list}</ul> 
      </div>
    </ResumeItemStyle>
  )
}

const ResumeItemStyle = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      background-color: var(--background-dark-color);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    padding-left: 5rem;
    position: relative;
    width: 85%;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background-color: var(--border-color);
    }
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: .4rem;
    }
    h6 {
      padding-bottom: .6rem;
      font-size: 1.5rem;
    }
    .key-points {
      padding-left: 1.25rem;
      li {
        list-style-type: circle;
      }
    }
  }
`;
export default ResumeItem;