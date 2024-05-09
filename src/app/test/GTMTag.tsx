'use client';

import { usePathname } from 'next/navigation';
// import Script from 'next/script';
import { useEffect } from 'react';
import initializeGA from './google-analytics';

export const GTMTag = () => {
  // const pathname = usePathname();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  //   useEffect(() => {
  //     if (!window.dataLayer) return;
  //     window.dataLayer = window.dataLayer || [];

  //     const dataLayer = window.dataLayer;
  //     // dataLayer.push({
  //     //   event: 'pageView',
  //     //   pagePath: window.location.pathname,
  //     // });

  //     dataLayer.push({
  //       event: 'pageView-test',
  //       value: 'test',
  //     });
  //     console.log('dataLayer', dataLayer);
  //     // window.dataLayer.push({
  //     //   event: 'page_view',
  //     //   page: window.location.href,
  //     // });
  //   }, [pathname]);

  //   const analytics = () => {
  //     if (process.env.NODE_ENV === 'production') {
  //       return (
  //         // <Script id="gtm" strategy="afterInteractive">
  //         //   {`(function (w, d, s, l, i) {
  //         //       w[l] = w[l] || [];
  //         //       w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  //         //       var f = d.getElementsByTagName(s)[0],
  //         //         j = d.createElement(s),
  //         //         dl = l != 'dataLayer' ? '&l=' + l : '';
  //         //       j.async = true;
  //         //       j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  //         //       f.parentNode.insertBefore(j, f);
  //         //     })(window, document, 'script', 'dataLayer', 'GTM-NZH6K5PW')`}
  //         // </Script>
  //         <Script
  //           src={`https://www.googletagmanager.com/gtag/js?id=GTM-NZH6K5PW`}
  //           strategy="afterInteractive"
  //           id="gtm"
  //         >
  //           {
  //             'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", ""GTM-NZH6K5PW"");'
  //           }
  //         </Script>
  //       );
  //     }
  //     // development
  //     return null;
  //   };

  return null;
};

export default GTMTag;
