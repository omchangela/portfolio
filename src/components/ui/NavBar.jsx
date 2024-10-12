import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    tl.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  });


  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px",
        // markers: true,
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "#DDDDD5" })
          .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0)
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),

        toggleActions: "restart reverse restart reverse",
      });
    });

  });

  return (
    <header
      ref={navBar}
      className="fixed top-0 z-50 flex w-full -translate-y-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      {/* logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <svg width="90" height="55" viewBox="0 0 192.756 192.756" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M28.777 83.667c0 1.382.104 2.723.306 4.032H2.993a52.22 52.22 0 0 1-.159-4.05c0-28.805 23.494-52.299 52.299-52.299 23.384 0 43.267 15.482 49.923 36.72l28.193-28.272h12.924v30.606l30.607-30.606h13.141v47.901H81.184c.2-1.299.319-2.487.305-4.001-.067-7.149-2.771-13.706-7.734-18.669-4.775-4.775-11.364-7.736-18.621-7.736-14.517-.001-26.357 11.838-26.357 26.374zm157.141.049V43.8h-7.479l-36.268 36.267V43.8h-7.277L102.73 76.055l-.826-3.489C99.365 61.845 93.192 52.581 84.875 46c-8.283-6.554-18.688-10.438-29.742-10.438-26.233 0-47.671 21.999-48.076 48.154h17.718v-.068c0-16.721 13.638-30.359 30.359-30.359 8.362 0 15.952 3.409 21.451 8.908 5.499 5.499 8.908 13.09 8.908 21.451l100.425.068zM39.854 105.139H7.47a52.094 52.094 0 0 1-1.813-4.562H34.93a26.712 26.712 0 0 0 4.924 4.562zM111.877 100.576a723.809 723.809 0 0 0-4.33 4.562H70.412a26.68 26.68 0 0 0 4.926-4.562h36.539zM80.188 91.857h109.734v4.561H78.195a26.13 26.13 0 0 0 1.993-4.561zM4.419 96.418a51.738 51.738 0 0 1-.935-4.561h26.594a26.202 26.202 0 0 0 1.992 4.561H4.419zM163.574 135.562v-17.546h26.348v17.546h-26.348zM163.574 113.857v-4.56h26.348v4.56h-26.348zM163.574 105.139v-4.563h26.348v4.563h-26.348zM159.572 100.576l-4.56 4.563h-39.225v-4.563h43.785zM150.852 109.297l-4.561 4.56h-30.504v-4.56h35.065zM142.133 118.016l-26.346 26.345v-26.345h26.346zM103.619 109.297a380.365 380.365 0 0 1-4.4 4.561H12.488a52.411 52.411 0 0 1-2.902-4.561h94.033zM95.016 118.016c-2.153 2.064-4.335 4.043-6.554 5.885l-37.507 37.506V135.78c-13.983-1.115-26.446-7.771-35.183-17.764h79.244z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M113.5 1.5H111V6.50001H113.5C112.119 6.50001 111 7.61931 111 9.00001V11.5H116V9.00001C116 10.3807 117.119 11.5 118.5 11.5H121V6.50001H118.5C119.881 6.50001 121 5.38072 121 4V1.5H116V4C116 2.61929 114.881 1.5 113.5 1.5ZM116 6.50001H113.5C114.881 6.50001 116 7.61931 116 9.00001V6.50001ZM116 6.50001V4C116 5.38072 117.119 6.50001 118.5 6.50001H116Z"></path></svg>
        
      </a>
      <nav className=" space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group relative hidden md:inline-block">
          <span>about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#services" className="group relative hidden md:inline-block">
          <span>services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a href="#works" className="group relative hidden md:inline-block">
          <span>projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </a>
        <a
          ref={cta}
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>Let&apos;s Talk.</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
