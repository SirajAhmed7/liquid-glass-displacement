import Lenis from "lenis";
import "./style.css";
import "lenis/dist/lenis.css";

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
  easing: (t) => 1 - Math.pow(1 - t, 3),
});
