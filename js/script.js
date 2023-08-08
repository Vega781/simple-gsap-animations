let timeLine = gsap.timeline();

timeLine.from('.hero__title', {opacity: 0, y: 120, duration: 0.7});
timeLine.from('.hero__btn', {opacity: 0, y: 80, duration: 0.7}, "-=0.7");
timeLine.from('.hero__descr', {opacity: 0, duration: 1});
timeLine.from('.photo-item-1', {opacity: 0, duration: 0.3}, "-=0.3");
timeLine.from('.photo-item-2', {opacity: 0, duration: 0.3});
timeLine.from('.photo-item-3', {opacity: 0, duration: 0.3});
timeLine.from('.photos__author', {opacity: 0, duration: 1});


