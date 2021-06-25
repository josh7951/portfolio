import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../img/profilepic.jpg'
import reactLogo from '../img/react.png';

function Navigation() {
  return (
    <NavigationStyle>
      <div className="avatar">
        <img src={avatar} alt="Yoo, it be me"/>
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active" exact>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active" exact>Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" activeClassName="active" exact>Projects</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active" exact>Contact Me</NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src={reactLogo} alt="React Logo" />Built with React</a></p>
      </footer>
    </NavigationStyle>
  )
}

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img{
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;

    .active {
      background-color: var(--primary-color-light);
      color: white;
    }

    li {
      display: block;
      a {
        display: block;
        padding: .45rem 0;
        position: relative;
        transition: all 0.4s ease-in-out;
        z-index: 10;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(1,-0.2,.25,.95);
          opacity: 0.20;
          z-index: -1;
        }
      }

      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 0.8rem;
      display: block;
      text-align: center;
      img {
        display: inline-block;
        width: 10%;
        height: auto;
        transform: translate(0, .4rem);
        margin-right: 5px;
      }
    }
  }

`;
export default Navigation;