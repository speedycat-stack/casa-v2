import React from 'react';
import './Progress.css';

export const ProgressBar = ({
  value,
  max = 100,
  height = 4,
  color = 'primary',
  variant = 'determinate',
  className = ''
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  
  const progressClasses = [
    'progress',
    `progress-${variant}`,
    `progress-${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={progressClasses}
      role="progressbar"
      aria-valuenow={variant === 'determinate' ? percentage : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ height }}
    >
      {variant === 'determinate' && (
        <div 
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        />
      )}
      {variant === 'indeterminate' && (
        <div className="progress-bar" />
      )}
    </div>
  );
};

export const ProgressSteps = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  className = ''
}) => {
  const stepsClasses = [
    'progress-steps',
    `progress-steps-${orientation}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={stepsClasses}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        
        const stepClasses = [
          'progress-step',
          isCompleted ? 'completed' : '',
          isCurrent ? 'current' : ''
        ].filter(Boolean).join(' ');

        return (
          <div key={index} className={stepClasses}>
            <div className="progress-step-indicator">
              {isCompleted ? (
                <span className="progress-step-check">✓</span>
              ) : (
                <span className="progress-step-number">{index + 1}</span>
              )}
            </div>
            <div className="progress-step-content">
              <div className="progress-step-title">{step.title}</div>
              {step.description && (
                <div className="progress-step-description">
                  {step.description}
                </div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="progress-step-connector" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export const CircularProgress = ({
  value,
  max = 100,
  size = 40,
  strokeWidth = 4,
  color = 'primary',
  variant = 'determinate',
  className = ''
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const progressClasses = [
    'circular-progress',
    `circular-progress-${variant}`,
    `circular-progress-${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={progressClasses}
      role="progressbar"
      aria-valuenow={variant === 'determinate' ? percentage : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: size, height: size }}
    >
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="circular-progress-background"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          className="circular-progress-circle"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={variant === 'determinate' ? strokeDashoffset : undefined}
        />
      </svg>
      {variant === 'determinate' && (
        <div className="circular-progress-label">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};

export default { ProgressBar, ProgressSteps, CircularProgress };