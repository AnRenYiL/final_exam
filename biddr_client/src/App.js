import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage'
// import AuctionShowPage from './components/AuctionShowPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/auctions" exact component={AuctionIndexPage} />
        {/* <Route
          path="/auctions/:id"
          render={routeProps => (
            <AuctionShowPage
              {...routeProps}
              currentUser={this.state.currentUser}
            />
          )}
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
