export const initializeGoogleTagManager = (id: any) => {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    (j as any).async = true;
    (j as any).src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    (f as any).parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-5NB4QGQQ");
};
