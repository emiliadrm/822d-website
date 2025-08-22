import React, { useState, useEffect } from 'react';
import { Zap, Globe,Heart, Users, Terminal, ArrowRight } from 'lucide-react';

const BlogHome: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Cycle through features
    const interval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const upcomingFeatures = [
    { icon: Zap, name: "Comeback", description: "Stay updated with TXT comeback schedules, promotions, and activities.", route: "/comeback" },
    { icon: ArrowRight, name: "Voting", description: "Step-by-step voting guides for apps and platforms worldwide.", route: "/voting" },
    { icon: Globe, name: "Streaming", description: "Learn how to stream TXT properly on Spotify, YouTube, and more platforms.", route: "/streaming" },
    { icon: Terminal, name: "Korean Streaming", description: "Complete tutorials for Melon, Genie, and other Korean music platforms.", route: "/korean-streaming" },
    { icon: Heart, name: "Moa Zone", description: "Connect with MOA from all over the world, share projects, and discover everything about TXT.", route: "/moa-zone" },
    { icon: Users, name: "822 Team", description: "Meet the international digital team behind 822Digital and our projects.", route: "/822-team" }
  ];

  return (
    <div className={`min-h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        

        {/* Main content */}
        <div className="text-center w-full max-w-4xl mx-auto animate-fade-in-delayed px-4">
          
          {/* Welcome and Mission */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-white">
              Welcome to 822Digital
            </h1>
            {/* Logo SVG */}
            <div className="mb-4 sm:mb-6 animate-fade-in flex justify-center"> 
              <img 
                src="/BLUEBBY-LOGO.svg" 
                alt="822 Logo" 
                width="100" 
                height="100" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 drop-shadow-2xl animate-logo-color-loop"
              />
            </div>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-2">
              A global fan community built by MOA for MOA.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-2">
              We are creating a digital hub where you'll find everything you need to support 
              TOMORROW X TOGETHER (TXT)
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              Our mission is simple: to connect MOA worldwide and give you the right tools to support TXT in every comeback, vote, and stream.
            </p>
          </div>

          {/* Development Progress */}
          <div className="mb-6 sm:mb-8">
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-gray-300">Work in progress</h3>
            <div className="w-full max-w-xs sm:max-w-md mx-auto bg-gray-800 rounded-full h-2 mb-2 sm:mb-3">
              <div 
                className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 h-2 rounded-full animate-loading-bar" 
                style={{ 
                  width: '15%',
                  backgroundSize: '200% 100%',
                  animation: 'loading-bar 2s ease-in-out infinite, shimmer 1.5s ease-in-out infinite'
                }}
              ></div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-2 px-4">Our platform is currently in progress — 15% complete. Stay tuned for updates and new features!</p>
          </div>

          {/* Upcoming features preview */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-6 text-gray-300">Coming Soon</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
              {upcomingFeatures.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = index === currentFeature;
                
                return (
                  <a 
                    key={index}
                    href={feature.route}
                    className={`block p-3 sm:p-4 lg:p-6 rounded-xl border transition-all duration-500 transform cursor-pointer ${
                      isActive 
                        ? 'border-blue-400/50 bg-blue-400/5 scale-105 shadow-lg shadow-blue-400/10' 
                        : 'border-gray-800 bg-gray-900/30 hover:border-gray-700 hover:scale-105'
                    }`}
                  >
                    <Icon 
                      size={24} 
                      className={`mx-auto mb-2 sm:mb-3 transition-colors duration-500 ${
                        isActive ? 'text-blue-400' : 'text-gray-500'
                      }`} 
                    />
                    <h4 className={`text-sm sm:text-base font-semibold mb-1 sm:mb-2 transition-colors duration-500 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Media Section */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-6 text-gray-300">Follow us to keep updated!</h3>
            <div className="flex justify-center space-x-3 sm:space-x-4 lg:space-x-6">
              {/* X (Twitter) */}
              <a 
                href="https://x.com/822Digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 rounded-full bg-gray-800/50 border border-gray-700 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com/822Digitals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 rounded-full bg-gray-800/50 border border-gray-700 hover:border-pink-400/50 hover:bg-pink-400/10 transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>

              {/* TikTok */}
              <a 
                href="https://tiktok.com/@822Digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 sm:p-4 rounded-full bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-110"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>


        {/* Terminal indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-blue-400 font-mono text-xs sm:text-sm opacity-50">
          <span className="animate-pulse">█</span> © 2025 • 822 Digital • Launching Soon
        </div>
      </div>
    </div>
  );
};

export default BlogHome;