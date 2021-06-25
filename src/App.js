import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import { Route, Switch as NavSwitch } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    }
    else {
      setTheme('light-theme')
      setChecked(true);
    }
  }
  return (
    <div className="App">
      <Sidebar navToggle={navToggle}/>

      <div className="theme">
        <div className="theme-toggle">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              onClick={themeToggler}
              inputProps={{ 'aria-label' : '' }}
              size="medium"
            /> 
          </div>
        </div>
      </div>

      <div className="burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <NavSwitch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>

          <Route path="/resume" exact>
            <ResumePage />
          </Route>

          <Route path="/projects" exact>
            <ProjectsPage />
          </Route>

          <Route path="/contact" exact>
            <ContactPage />
          </Route>
        </NavSwitch>

      </MainStyle>
    </div>
  );
}

const MainStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }  
`;

export default App;
