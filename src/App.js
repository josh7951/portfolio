import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

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

          <HomePage />

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
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
  }
  
  .line-1, .line-2, .line-3, .line-4 {
    width: 1px;
    min-height: 100vh;
    background-color: var(--border-color);
  }
`;

export default App;
