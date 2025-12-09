import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // debug
    console.log('ScrollToTop -> pathname, hash:', location.pathname, location.hash);

    // Небольшая задержка — на случай, если контент рендерится асинхронно
    const id = setTimeout(() => {
      // Скроллим window (для большинства случаев)
      if (typeof window !== 'undefined') {
        try {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }

      // Подстраховка: принудительно ставим нулевой скролл и для document
      if (document && document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (document && document.body) {
        document.body.scrollTop = 0;
      }

      // Если у тебя основной скролл находится в контейнере с классом .app (или .main)
      // заменяй селектор на нужный (например '.page-wrapper' или '#root')
      const container =
        document.querySelector('.page-wrapper') || document.querySelector('#root') || document.querySelector('.App');
      if (container) container.scrollTop = 0;
    }, 50); // можно увеличить до 100-200ms если контент грузится медленно

    return () => clearTimeout(id);
  }, [location.pathname, location.hash]);

  return null;
}
