import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <DialogsContainer /* store={props.store} */  />} />
          <Route path='/profile' render={() => <Profile /* store={props.store} */ /> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
      </div>
        <Navbar />
      </div>
  )
}

export default App;
