// @flow
import 'particles.js';
import 'sanitize.css/sanitize.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Parallax from 'parallax-js';
import particleSettings from './particles.setting';
import '../css/app.pcss';

AOS.init({
  easing: 'ease-out'
});

const scene = document.getElementById('scene');
// eslint-disable-next-line
const parallax = new Parallax(scene, {
  scalarX: 5,
  scalarY: 5
});

const { particlesJS } = window;
if (particlesJS != null) {
  particlesJS('particles', particleSettings);
}
