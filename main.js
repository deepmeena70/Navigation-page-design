import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';
(() => {
  console.log('script is running...');

  const navBar = document.querySelector('.nav-bar');
  const heroContainer = document.querySelector('.hero-container');

  addEventListener('scroll', (e) => {
    console.log(navBar.getBoundingClientRect().top);
    let navTop = navBar.getBoundingClientRect().top;
    let heroTop = heroContainer.getBoundingClientRect().top;
    if (navTop <= 0) {
      navBar.setAttribute('class', 'nav-bar fixed-to-top');
    }
    if (heroTop > -300) {
      navBar.setAttribute('class', 'nav-bar');
    }
    console.log(heroTop);
  });

  const pc = particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 512,
    colors: [0x00ff00, 0x0000ff],
    color: 0xff0000,
    coordScale: 0.5,
    noiseIntensity: 0.001,
    noiseTimeCoef: 0.0001,
    pointSize: 5,
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002,
  });

  document.body.addEventListener('click', () => {
    pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
    pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
    pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
    pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
  });
})();
