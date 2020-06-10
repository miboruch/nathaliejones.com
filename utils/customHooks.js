import React, { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    document !== undefined && document.body.getBoundingClientRect()
  );
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const listener = () => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollDirection(lastScrollTop > -bodyOffset.top ? 'up' : 'down');
      setLastScrollTop(-bodyOffset.top);
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  });

  return {
    scrollDirection
  };
}
