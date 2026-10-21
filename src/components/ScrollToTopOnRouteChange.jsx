import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));

        if (target) {
          // Use Lenis for smooth hash-scroll if available
          if (window.__lenis) {
            window.__lenis.scrollTo(target, { offset: 0, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: "auto", block: "start" });
          }
        }
      });
      return;
    }

    // Instant scroll to top on route change (no animation — feels snappy)
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, [pathname, hash]);

  return null;
}

export default ScrollToTopOnRouteChange;
