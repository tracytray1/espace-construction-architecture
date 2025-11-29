import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

useEffect(() => {
  const scrollTargets = [
    document.querySelector('.project-detail_wrapper'),
    document.scrollingElement,
    document.documentElement,
    document.body
  ].filter(Boolean);

  scrollTargets.forEach(el => el.scrollTop = 0);
  window.scrollTo(0, 0);
}, [pathname]);
};
