import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import Menu from './Components/NavbarMenu/Menu';
import Profile from './Components/Profile/Profile';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  return (
    <BrowserRouter>
      <div className="mainSocialNetwork">
        <Header />
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
