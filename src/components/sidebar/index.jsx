import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-4">
        <h1 className="text-2xl font-bold mb-8">My Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <NavLink to="/" end className={({isActive}) => isActive ? "text-yellow-300" : ""}>Home</NavLink>
          <NavLink to="/cards" className={({isActive}) => isActive ? "text-yellow-300" : ""}>Cards</NavLink>
          <NavLink to="/users" className={({isActive}) => isActive ? "text-yellow-300" : ""}>Users</NavLink>
          <NavLink to="/images" className={({isActive}) => isActive ? "text-yellow-300" : ""}>Images</NavLink>
          <NavLink to="/settings" className={({isActive}) => isActive ? "text-yellow-300" : ""}>Settings</NavLink>
        </nav>
      </aside>
    );
  }
}
