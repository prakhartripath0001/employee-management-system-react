import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Load saved credentials if "Remember Password" was checked previously
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    const savedRemember = localStorage.getItem('rememberMe') === 'true';
    
    if (savedRemember) {
      if (savedEmail) setEmail(savedEmail);
      if (savedPassword) setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email);
      localStorage.setItem('rememberedPassword', password);
      localStorage.setItem('rememberMe', 'true');
    } else {
      localStorage.removeItem('rememberedEmail');
      localStorage.removeItem('rememberedPassword');
      localStorage.removeItem('rememberMe');
    }
    
    const result = loginUser(email, password);
    if (!result.success) {
      setError(result.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 relative">
      {/* Background ambient glow inside container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      <form onSubmit={handleLogin} className="bg-zinc-950/70 backdrop-blur-md shadow-2xl rounded-3xl px-8 py-10 mb-4 border border-zinc-800/80 transition-all duration-300 hover:border-zinc-700/50 hover:shadow-blue-500/5">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-extrabold text-white text-xl shadow-lg shadow-blue-500/25 mb-4">
            E
          </div>
          <h2 className="text-3xl font-extrabold text-center text-white tracking-tight">Welcome Back</h2>
          <p className="text-zinc-400 text-center text-xs mt-2">Enter credentials to access your employee portal</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/25 text-rose-300 text-sm rounded-xl flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 flex-shrink-0 text-rose-400">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <span>{error}</span>
          </div>
        )}
        
        <div className="mb-5">
          <label className="block text-zinc-300 text-xs font-bold mb-2 uppercase tracking-wider" htmlFor="email">
            Email Address
          </label>
          <div className="relative">
            <input
              className="bg-zinc-900/60 border border-zinc-800 text-white rounded-xl w-full py-3.5 px-4 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 text-sm placeholder-zinc-600"
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-zinc-300 text-xs font-bold mb-2 uppercase tracking-wider" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              className="bg-zinc-900/60 border border-zinc-800 text-white rounded-xl w-full py-3.5 pl-4 pr-12 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-200 text-sm placeholder-zinc-600"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-zinc-300 focus:outline-none transition-colors duration-150"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.815 7.815 3 3m-3-3a9.79 9.79 0 0 1-5.15 1.517m0 0a9.799 9.799 0 0 1-5.071-1.471m0 0 3.649-3.649m4.293 4.293-4.293-4.293m0 0a3 3 0 0 1 4.293 4.293Z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-zinc-800 bg-zinc-950/60 text-blue-500 focus:ring-blue-500/50 focus:ring-2 focus:ring-offset-0 transition duration-150 cursor-pointer"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="font-medium text-xs text-zinc-400 hover:text-zinc-200 transition-colors duration-150">Remember Password</span>
          </label>
        </div>
        
        <button
          className="bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold py-3.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full transition duration-150 ease-in-out shadow-md hover:shadow-blue-500/20 text-sm flex items-center justify-center gap-2"
          type="submit"
        >
          Sign In
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Login;