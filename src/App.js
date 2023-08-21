import React, { Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import {initializeApp} from './redux/appReducer'
import { compose } from 'redux';
import './App.css';

import Menu from './Components/NavbarMenu/Menu';
import UsersContainer from './Components/Users/UsersContainer';
import { withRouter } from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Preloader from './Components/common/Preloader/preloader';
import store from './redux/reduxStore';

const Login = React.lazy(()=> import('./Components/Login/Login'));
const MessagesContainer = React.lazy(()=>import( './Components/Messages/MessagesContainer')) 
const ProfileContainer = React.lazy(() =>import("./Components/Profile/ProfileContainer")
);

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader/>
        return (
          <Suspense fallback={<div><Preloader /></div>}>
            <div className="mainSocialNetwork">
              <HeaderContainer />
              <Menu />
              <div className="content">
                <Routes>
                  <Route path="/profile/:userId?" element={<ProfileContainer />}/>
                  <Route path="/messages/*" element={<MessagesContainer />} />
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </Suspense>
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

 const SocialNetwork=(props)=>{
  return <HashRouter> 
      <Provider store={store}>
        <React.StrictMode>
          <AppContainer />
        </React.StrictMode>
      </Provider>
    </HashRouter>
}
export default SocialNetwork;
