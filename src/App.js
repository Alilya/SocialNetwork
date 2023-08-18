import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import { compose } from 'redux';
import './App.css';

import Menu from './Components/NavbarMenu/Menu';
import MessagesContainer from './Components/Messages/MessagesContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer, { withRouter } from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import Preloader from './Components/common/Preloader/preloader';
import store from './redux/reduxStore';

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader/>
        return (
                <div className="mainSocialNetwork">
                  <HeaderContainer />
                  <Menu />
                  <div className="content">
                    <Routes>
                      <Route
                        path="/profile/:userId?"
                        element={<ProfileContainer />}
                      />
                      <Route
                        path="/messages/*"
                        element={<MessagesContainer />}
                      />
                      <Route path="/users" element={<UsersContainer />} />
                      <Route path="/login" element={<Login />} />
                    </Routes>
                  </div>
                </div>
        );
  }
}

const mapStateToProps=(state)=>({
  initialized: state.app.initialized,
})

let AppContainer =  compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
  )(App)

 const SocialNetwork=()=>{
  return <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
}
export default SocialNetwork;
