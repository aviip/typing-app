import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/components/pages/HomePage';
import PlayGamePage from '@/components/pages/PlayGamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play-game" element={<PlayGamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
