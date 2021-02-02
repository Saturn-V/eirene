import styles from './App.module.scss';
import NavBar from './components/NavBar'
import Card, {Size, Shape} from './components/Card'

import AccountsPage from './pages/Accounts'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <NavBar></NavBar>
        

        <div className={styles.Content}>
          <Switch>
            <Route exact path='/'>

              <TestPage />
            </Route>
            
            <Route exact path='/accounts'>
              <AccountsPage/>
            </Route>
            
            <Route exact path='/manage'>
              <h1>Manage</h1>
            </Route>
            
            <Route exact path='/settings'>
              <h1>Settings</h1>
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;

function TestPage() {
 return <Card size={Size.Large} shape={Shape.Rectangle}>
   A finance management tool built by me (<a href="https://alexaaronpena.com">https://alexaaronpena.com</a>). Based off of a bill tracking script I use for my own finances.
 </Card>
}