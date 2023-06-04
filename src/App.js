import './App.css';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import Menu from './Components/NavbarMenu/Menu';
import Profile from './Components/Profile/Profile';


<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  return (
    <div className="mainSocialNetwork">
      <Header />
      <Menu />
      <div className='content'>
       {/* <Profile />  */}
      <Messages />
      </div>
    </div>
  );
}

export default App;
