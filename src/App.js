import React from 'react'
import { Switch, Route} from 'react-router-dom'

import NavigationBar from './component/navigationBar';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import DetailPage from './pages/details';
import CartPage from './pages/cart';
import {keepLogin} from './redux/actions'

import {connect} from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem('idUser')
    this.props.keepLogin(id)
  }
  render(){
    return (
      <div>
        <NavigationBar />
        <Switch>
          <Route path="/" component={HomePage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/detail" component={DetailPage}/>
          <Route path="/cart" component={CartPage}/>


        </Switch>
      </div>
    );
  }
  
}

export default connect (null, {keepLogin}) (App);
