import { Routes, Route } from 'react-router-dom';
import './App.css';
import Menu from './Components/NavbarMenu/Menu';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {  

  return (
    <div className="mainSocialNetwork">
      <HeaderContainer />
      <Menu />
      <div className="content">
        <Routes>
          <Route path="/profile/:userId?" element={
          <ProfileContainer/>} 
          />
          <Route path="/messages/*" element={
          <MessagesContainer />}
          />
           <Route path="/users" element={
           <UsersContainer/> }
           />
            <Route path="/login" element={
           <Login/> }
           />
           
        </Routes>
      </div>
    </div>
  );
}

export default App;
