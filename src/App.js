import './App.css';
import Header from './Header';
import Menu from './Menu';
import Profile from './Profile';
import PostsProfile from './PostsProfile';

function App() {
  return (
    <div className="mainSocialNetwork">
      <Header />
      <Menu />
      <Profile />
      <PostsProfile />
      <div className='Nothing'></div>
    </div>
  );
}

export default App;
