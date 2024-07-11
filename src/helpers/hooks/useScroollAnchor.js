import { useLayoutEffect } from "react";

export default function useScroollAnchor() {
  useLayoutEffect(() => {
    const smootScrollAnchor = document.querySelectorAll("a[href^='#']");
    for (let anchor = 0; anchor < smootScrollAnchor.length; anchor++) {
      const element = smootScrollAnchor[anchor];

      element.addEventListener("click", function (e) {
        e.preventDefault();
        if (document.getElementById(this.getAttribute("href").replace("#", "")))
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
      });
    }
    return () => {};
  });
}
