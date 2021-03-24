import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <p>{this.props.tagLine}</p>
      </header>
    );
  }
}

export default Header;