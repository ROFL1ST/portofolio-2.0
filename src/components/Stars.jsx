import React, { useMemo } from 'react';
const Stars = () => {
  // Pre-calculate star properties once using useMemo
  const stars = useMemo(() => {
    return Array.from({ length: 200 }, () => ({
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      scale: Math.random() * 0.5 + 0.5,
      animationDuration: `${Math.random() * 15 + 5}s`,
      animationDelay: `${Math.random() * 10}s`,
    }));
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            transform: `scale(${star.scale})`,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;