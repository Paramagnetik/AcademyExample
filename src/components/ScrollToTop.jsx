import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const id = setTimeout(() => {
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }

      if (document && document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document && document.body) {
        document.body.scrollTop = 0;
      }

      const container =
        document.querySelector('.page-wrapper') || document.querySelector('#root') || document.querySelector('.App');
      if (container) container.scrollTop = 0;
    }, 50);

    return () => clearTimeout(id);
  }, [location.pathname, location.hash]);

  return null;
}
