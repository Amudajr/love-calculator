import { Routes, Route } from 'react-router-dom';
import BackFormPage from './pages/BackForm';
import Logic from './pages/Logic';



function App() {
  return (
    <Routes>
      <Route path='/' element={<BackFormPage />} />
      <Route path='/calculate' element={<Logic />} />
    </Routes>
  );
}

export default App;
