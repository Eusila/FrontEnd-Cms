import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AuthForm = () => {
  const { login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-blue-400 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">
          {isLogin ? 'Login' : 'Create an Account'}
        </h1>
        {isLogin ? (
          <LoginForm login={login} toggleForm={toggleForm} />
        ) : (
          <SignupForm signup={signup} toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthForm;





