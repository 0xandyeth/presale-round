import './App.scss';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './container/home';
import { Claim } from './container/claim';
import { TokenDetailContainer } from './container/tokenDetailContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/tokenDetails">
            <TokenDetailContainer/>
          </Route>
          <Route path="/claim">
            <Claim/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
      {/* <Header/>
      
      <AccountContainer/>
      <TranscationList/> */}
    </div>
  );
}

export default App;
