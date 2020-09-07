import React from 'react';
import './css/MainContainer.css'
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainContainer from './components/MainSite/MainContainer'
import MainHeader from './components/MainSite/MainHeader'
import MainSideBar from './components/MainSite/MainSideBar';
import About from './components/LinkContainer/About'
import News from './components/LinkContainer/News'
import Support from './components/LinkContainer/Support'
import MovieDetail from '../src/components/LinkContainer/MovieDetail'

//Contains the full website architeture
function App() {
  return (

    //Make the website able to use Redux store.
    <Provider store={store}>

      {/* Router makes website able to route between different pages */}
      <Router>

        {/* MainHeader is the consistent header of the whole site. */}
        <MainHeader></MainHeader>

        {/* MainSidebar contains the links to different locations on the site. */}
        <MainSideBar></MainSideBar>

        {/* I use swithc to navigate between links. */}
        <Switch>
          <Route path="/About" exact component={About}></Route>
          <Route path="/News" exact component={News}></Route>
          <Route path="/Support" exact component={Support}></Route>

          {/* MovieDetail page displays the details of a the choosen movie. with its id. */}
          <Route path="/MovieDetail/:id" component={MovieDetail}></Route>

          {/* MainContainer contains the main part and the initial load of the page. */}
          <Route path="/" component={MainContainer}></Route>
        </Switch>

      </Router>

    </Provider>
  );
}

export default App;