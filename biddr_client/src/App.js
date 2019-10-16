import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage'
import AuctionShowPage from './components/AuctionShowPage'
import { User, Session } from "./requests";
import SignInPage from './components/SignInPage'
import Navbar from "./components/Navbar";
import AuctionNewPage from './components/AuctionNewPage'
import AuthRoute from "./components/AuthRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
    this.getUser = this.getUser.bind(this);
  }
  getUser = () => {
    User.current()
      .then(data => {
        if (typeof data.id == "number") {
          this.setState({ currentUser: data });
        }
      });
  }
  signOut = () => {
    Session.destroy().then(() => {
      this.setState({
        currentUser: null
      });
    });
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    return (
      <Router>
        <div className="ui container">
          <Navbar currentUser={this.state.currentUser} onSignOut={this.signOut} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/auctions" exact component={AuctionIndexPage} />
            <AuthRoute
              isAuthenticated={this.state.currentUser}
              path="/auctions/new"
              component={AuctionNewPage}
            />
            {/* <Route path="/auctions/new" exact component={AuctionNewPage} /> */}
            <Route
              path="/auctions/:id"
              render={routeProps => (
                <AuctionShowPage
                  {...routeProps}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              path="/sign_in"
              render={routeProps => (
                <SignInPage onSignIn={this.getUser} {...routeProps} />
              )}
            />
          </Switch>
        </div>
      </Router >
    );
  }
}

export default App;
