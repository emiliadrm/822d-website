import React from 'react';

const WorkInProgress: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-[#D1CFFD]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 max-lg:w-full h-full object-cover"
      >
        <source src="/hmnyaring.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Floating Text */}
      <div className="absolute inset-0 flex  lg:items-center items-end justify-center">
        <h1 className="text-2xl font-bold bg-white text-[#A8A5DC] text-center font-mono px-4 leading-tight">
          {`comeback later... we are working >.<`}
        </h1>
      </div>
    </div>
  );
};

export default WorkInProgress;
