import { useEffect } from "react";

const useHandleClick = () => {
  useEffect(() => {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    const handleClick = (event) => {
      const clickedLink = event.target;

      for (let i = 0; i < pages.length; i++) {
        if (clickedLink.innerHTML.toLowerCase() === pages[i].dataset.page) {
          pages[i].classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    };

    navigationLinks.forEach((link) =>
      link.addEventListener("click", handleClick)
    );

    return () => {
      navigationLinks.forEach((link) =>
        link.removeEventListener("click", handleClick)
      );
    };
  }, []);
};

export default useHandleClick;