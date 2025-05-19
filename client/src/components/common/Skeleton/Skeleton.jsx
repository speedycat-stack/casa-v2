import React from 'react';
import './Skeleton.css';

const Skeleton = ({
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
  animated = true
}) => {
  const items = Array(count).fill(null);
  
  const skeletonClasses = [
    'skeleton',
    `skeleton-${variant}`,
    animated ? 'skeleton-animated' : '',
    className
  ].filter(Boolean).join(' ');

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height
  };

  return (
    <>
      {items.map((_, index) => (
        <div
          key={index}
          className={skeletonClasses}
          style={style}
          aria-hidden="true"
        />
      ))}
    </>
  );
};

// Predefined skeleton layouts
export const SkeletonText = (props) => (
  <Skeleton variant="text" {...props} />
);

export const SkeletonCircle = (props) => (
  <Skeleton variant="circle" {...props} />
);

export const SkeletonRect = (props) => (
  <Skeleton variant="rect" {...props} />
);

// Card skeleton for common card layout
export const SkeletonCard = () => (
  <div className="skeleton-card">
    <SkeletonRect height={200} />
    <div className="skeleton-card-content">
      <SkeletonText width={180} height={24} />
      <SkeletonText count={3} />
    </div>
  </div>
);

export default Skeleton;