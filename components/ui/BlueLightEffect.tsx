import React from 'react';

const BlueLightEffect: React.FC = () => {
  const styles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    background: 'linear-gradient(135deg, rgba(0, 100, 255, 0.5), rgba(0, 150, 255, 0.7))', // More vibrant blue
    backgroundSize: '40px 40px', // Increased size for more prominent pattern
    backgroundImage:
      'linear-gradient(135deg, rgba(0, 100, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(0, 100, 255, 0.3) 50%, rgba(0, 100, 255, 0.3) 75%, transparent 75%, transparent)', // Snake-like pattern
    animation: 'moveSnakeBackground 15s linear infinite', // Adjusted animation
  };

  const keyframes = `
    @keyframes moveSnakeBackground {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 80px 80px; // Increased movement
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles} className="blue-light-effect" />
    </>
  );
};

export default BlueLightEffect;