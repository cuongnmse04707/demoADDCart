import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import ImageUpload from './component/ImageUpload';

class App extends React.Component {
  style = {
    height: '100vh',
    display: 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center'
  };

  render(){
    return (
      <div className="App">
        <BrowserRouter>
              <Switch>
                <Route path='/' exact={true} component={ImageUpload}></Route>
              </Switch>
            </BrowserRouter>
      </div>
    );
  }
}

export default App;
