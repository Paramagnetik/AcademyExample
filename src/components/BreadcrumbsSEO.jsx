import { useEffect } from 'react';

export function BreadcrumbsSEO({ items }) {
  useEffect(() => {
    const scriptId = 'breadcrumbs-jsonld';

    // удаляем старую разметку при смене страницы
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [items]);

  return null;
}
