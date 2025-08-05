import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="bg-white h-20 shadow flex items-center justify-center px-4">
        <div className='font-bold text-4xl' >
          Welcome to Dashboard
        </div>
      </header>
    );
  }
}
