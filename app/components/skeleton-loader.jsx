import React from 'react';
import './skeleton.css';

const SkeletonLoader = ({ count = 5 }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className="skeleton-wrapper">
          <div className="skeleton skeleton-text" style={{ width: '60%' }}></div>
          <div className="skeleton skeleton-button"></div>
          <div className="skeleton skeleton-button"></div>
        </div>
      ))}
    </>
  );
};

export default SkeletonLoader;
