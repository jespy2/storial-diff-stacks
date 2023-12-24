import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

export const NotFound = () => {
  const navigate = useNavigate();
  const authState = useAppSelector((state) => state.auth.auth);
  const { isAuthenticated } = authState;

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    };
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <img src="/storial-logo.png" alt="Storial Logo" className="header-logo" />
      <h1 className="text-4xl font-bold text-gray-900">Bummer!</h1>
      <h3 className="text-xl font-bold text-gray-400">That page cannot be found</h3>
      <Link to="/">
        <button className="home-btn">Take me home!</button>
      </Link>
    </main>
  )
}