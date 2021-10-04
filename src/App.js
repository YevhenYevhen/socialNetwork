import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import NewsInfiniteScroll from './components/News/NewsInfiniteScroll';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { Switch } from 'react-router-dom';
import UsersInfiniteScroll from './components/Users/UsersInfiniteScroll';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));




class App extends React.Component {

  catchAllUnhandledErrors = () => {
    alert('Some error occured...')
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className={this.props.isAuth ? 'app-wrapper' : 'initial-app-wrapper' }>
        {this.props.isAuth && <HeaderContainer />}
        <div className='app-wrapper-content'>
          <Switch>
            <Route exact path='/' render={withSuspense(ProfileContainer)} />
            <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
            <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
            <Route path='/news' render={() => <NewsInfiniteScroll />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route path='/users' render={() => <UsersInfiniteScroll />} />
            <Route path='/login/facebook' render={() => <div>Facebook Login</div>} />
            <Route path='/login' render={() => <Login />} />
            <Route path='*' render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div >

        {this.props.isAuth && <div className='app-navbar'>
          <Navbar />
        </div>}


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, { initializeApp })(App);
