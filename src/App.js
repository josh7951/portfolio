import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import { Route, Switch } from 'react-router';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainStyle>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <Switch>
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
        </Switch>

      </MainStyle>
    </div>
  );
}

const MainStyle = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

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
