import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/NavbarMenu/Menu';
import Profile from './Components/Profile/Profile';
import MessagesContainer from './Components/Messages/MessagesContainer';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {  

  return (
    <div className="mainSocialNetwork">
      <Header />
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/profile" element={
          <Profile/>} 
          />
          <Route path="/messages/*" element={
          <MessagesContainer/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
