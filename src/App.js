import React, { Suspense } from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { Switch } from 'react-router-dom';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




class App extends React.Component {

  catchAllUnhandledErrors = () => {
    alert('Some error occured...')
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors )
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors )
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <div className='app-wrapper-content'>
          <Switch>
          <Route exact path='/' render={withSuspense(ProfileContainer)} />
            {/* <Route path='/dialogs' render={() => {
            return <Suspense fallback={<Preloader />}>
              <DialogsContainer />
            </Suspense>
          }} />  */}
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            {/*           <Route path='/profile/:userId?' render={() => {
            return <Suspense fallback={<Preloader />}>
              <ProfileContainer />
              </Suspense>}} /> */}
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login/facebook' render={() => <div>Facebook Login</div>} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
        <Navbar />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
