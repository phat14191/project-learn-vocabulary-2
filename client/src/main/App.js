import React from "react";
import { Route, Switch, withRouter} from "react-router-dom";

import Navbar from "./Navbar";
import AboutComponent from "./routes/about/AboutComponent";
import SignupContainer from "./routes/signup/Container";
import SigninContainer from "./routes/signin/Container";
import selectorContainer from "./routes/selector/Container";
import ProfileComponent from "./routes/profile/Component";
import ProtectedRoute from "./routes/ProtectedRoute";

class App extends React.Component {
  render() {
      return(
          <div className ="app-wrapper">
              <Navbar />
              <Switch>
                  <Route exact path="/" component={AboutComponent} />{/* What this app is about?, who made it, github/linkedin etc*/}
                  <Route path ="/signup" component={SignupContainer} />
                  <Route path ="/signin" component={SigninContainer} />

                  <ProtectedRoute path="/selector" component={selectorContainer} />{/* will show username selected language, selected level*/}
                  <ProtectedRoute path="/profile" component={ProfileComponent} />{/* will show Welcome to learning, username, language, score-card*/}
                  {/*
                    <ProtectedRoute path="/learn" component={LearnContainer}
                  />//will have listwords and listform that shows add words and
                  practice words
                  */}

              </Switch>
          </div>
      )
  }
}

export default App;
