import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "../styles/components/ScrollToTopButton.css"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    // Use Lenis scrollTo if available for buttery-smooth animation,
    // otherwise fall back to native smooth scroll
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollToTopButton;
