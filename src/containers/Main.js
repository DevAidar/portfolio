import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from '../pages/contact/ContactComponent';
import Projects from '../pages/projects/Projects';
import PageNotFound from '../pages/pageNotFound/PageNotFound';

export default class Main extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/portfolio' />
          </Route>
          <Route exact path="/portfolio" component={Home} />
          <Route path="/portfolio/experience" exact component={Experience} />
          <Route path="/portfolio/education" component={Education} />
          <Route path="/portfolio/contact" component={Contact} />
          <Route path="/portfolio/projects" component={Projects} />
          <PageNotFound />
        </Switch>
      </>
    );
  }
}
