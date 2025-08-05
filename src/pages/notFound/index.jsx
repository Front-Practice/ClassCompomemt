import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div className="bg-white p-6 rounded shadow text-center max-w-md mx-auto mt-20">
        <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Not Found</h2>
        <p className="mb-6">Here is empty for now!!! </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Go to Home
        </Link>
      </div>
    );
  }
}
