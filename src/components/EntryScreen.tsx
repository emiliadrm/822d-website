import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface EntryScreenProps {
  onAccessGranted: () => void;
}

const EntryScreen: React.FC<EntryScreenProps> = ({ onAccessGranted }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputVisible, setInputVisible] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
      setTimeout(() => setInputVisible(true), 500);
    }, 4000); // Animation duration + delay

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.toLowerCase() === 'moa') {
      setIsValidating(true);
      setTimeout(() => {
        onAccessGranted();
      }, 1500);
    } else {
      setShowError(true);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* 822 Animation */}
      <div className="relative z-10 mb-16">
        <div className="text-8xl md:text-9xl font-mono font-bold text-blue-400 tracking-wider">
          <span className="inline-block animate-typewriter-8">8</span>
          <span className="inline-block animate-typewriter-2 animation-delay-1000">2</span>
          <span className="inline-block animate-typewriter-2-final animation-delay-2000">2</span>
          <span className="inline-block w-1 h-20 bg-blue-400 animate-blink ml-2 animation-delay-3000"></span>
        </div>
      </div>

      {/* Input Section */}
      <div className={`transition-all duration-1000 ${inputVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {isValidating ? (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-blue-400">
              <Terminal className="animate-pulse" size={24} />
              <span className="text-xl font-mono">Access granted...</span>
            </div>
            <div className="w-32 h-1 bg-gray-800 rounded overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 animate-loading-bar"></div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
            <div className="text-center mb-4">
              {/*<p className="text-gray-400 text-lg font-mono mb-2">Enter access code</p>*/}
               <p className="text-gray-400 text-lg font-mono mb-2">Remember your name...</p>
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={`bg-gray-900/80 border-2 rounded-lg px-6 py-4 text-white font-mono text-xl text-center focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                  showError 
                    ? 'border-red-500 shadow-lg shadow-red-500/20' 
                    : 'border-blue-500/50 focus:border-blue-400 focus:shadow-lg focus:shadow-blue-400/20'
                }`}
                placeholder="***"
                maxLength={10}
                autoFocus
              />
              {showError && (
                <p className="absolute top-full mt-2 text-red-400 font-mono text-sm animate-shake">
                  Invalid access code
                </p>
              )}
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-mono"
            >
              ACCESS
            </button>
          </form>
        )}
      </div>

      {/* Terminal cursor effect */}
      <div className="absolute bottom-8 left-8 text-blue-400 font-mono text-sm opacity-50">
        <span className="animate-pulse">█</span> system_ready
      </div>
    </div>
  );
};

export default EntryScreen;