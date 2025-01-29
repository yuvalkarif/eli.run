import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            eli.run
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Open links directly from your terminal
          </p>
          <div className="mt-8 bg-gray-800 p-4 rounded-lg">
            <code className="text-white">
              $ npm install -g eli.run
              <br />
              $ eli github.com
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}