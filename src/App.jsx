import React, { Component } from 'react';
import {Routes, Route , NavLink} from 'react-router-dom';
import DashboardLayout from './layout/dashBoardLayout';
import HomePage from './pages/home';
import CardsPage from './pages/cards';
import NotFound from './pages/notFound';

export default class App extends Component {
  render() {
    return (
      <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
    );
  }
}
