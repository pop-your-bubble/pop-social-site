import React from 'react';
import NavBar from './NavBar';
import SignUp from './SignUp';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <NavBar />
        <SignUp />
      </div>
    )
  }
}