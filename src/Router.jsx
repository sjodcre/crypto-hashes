import { Routes, Route } from 'react-router-dom';
import App from './App';
import AlgoPage from './pages/AlgoPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/algo/:id" element={<AlgoPage />} />
    </Routes>
  );
}

export default Router;
