import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} sendMessage={props.sendMessage} updateNewMessageData={props.updateNewMessageData} />} />
          <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostData={props.updateNewPostData}/> } />
          <Route path='/news' render={ () => <News /> } />
          <Route path='/music' render={ () => <Music /> } />
          <Route path='/settings' render={ () => <Settings /> } />
        </div>
        <Navbar state={props.state.profilePage} />
      </div>
    </BrowserRouter>
  )
}

export default App;
