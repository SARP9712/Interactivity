// barba.js correcto
import barba from '@barba/core';
import gsap from 'gsap';

const initBarba = () => {
  barba.init({
    transitions: [
      {
        name: 'slide',
        leave(data) {
          return new Promise((resolve) => {
            gsap.to(data.current.container, { x: '100%', duration: 1, onComplete: resolve });
          });
        },
        enter(data) {
          return new Promise((resolve) => {
            data.next.container.style.transform = 'translateX(-100%)';
            gsap.to(data.next.container, { x: '0%', duration: 1, onComplete: resolve });
          });
        },
      },
    ],
  });
};

export default initBarba;