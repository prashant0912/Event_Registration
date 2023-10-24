import logo from './logo.svg';
import './App.css';
import { RegistrationForm } from './components/RegistrationForm';
import { Routes, Route } from 'react-router';
import { UserDetail } from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/:id" element={<UserDetail/>} />
      </Routes>

    </div>
  );
}

export default App;
