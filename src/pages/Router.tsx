// Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
