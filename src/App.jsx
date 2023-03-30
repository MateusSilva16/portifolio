import { Conatainer } from './styles/appStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/template/Home';
import Project from './components/template/Project/project';
import Info from './components/template/Info/info';
import NavigationDesktop from './components/Navigation/NavigationDesktop';

function App() {
  return (
    <Router>
      <Conatainer>
        <NavigationDesktop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Conatainer>
    </Router>
  );
}

export default App;
