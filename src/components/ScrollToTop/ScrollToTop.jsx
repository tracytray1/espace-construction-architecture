import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fonction de scroll identique à ProjectFooter
    const scrollToTop = () => {
      const wrapper = document.querySelector('.project-detail_wrapper');
      if (wrapper) {
        wrapper.scrollTop = 0;
      }
      if (document.scrollingElement) document.scrollingElement.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    // Scroll immédiat
    scrollToTop();

    // Backup multiples pour assurer le scroll
    requestAnimationFrame(() => {
      scrollToTop();
    });

    const timer1 = setTimeout(scrollToTop, 0);
    const timer2 = setTimeout(scrollToTop, 50);
    const timer3 = setTimeout(scrollToTop, 100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
