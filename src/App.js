import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import MessagesAll from './Components/Messages/MessagesAll';
import Menu from './Components/NavbarMenu/Menu';
import Profile from './Components/Profile/Profile';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App(props) {  
  return (
    <div className="mainSocialNetwork">
      <Header />
      <Menu />
      <div className="content">
        <Routes>
          <Route
            path="/profile"
            element={<Profile post={props.state.profilePage.postDataBase} addPost={props.addPost} newPost={props.state.profilePage.newPostText}
            NewTextPostChange={props.NewTextPostChange}/>}

          />
          <Route
            path="/messages/*"
            element={
              <MessagesAll
                messages={props.state.messagesPage.messagesDataBase}
                dialogs={props.state.messagesPage.dialogsDataBase}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
