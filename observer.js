var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

var observer = new IntersectionObserver(callback, options);

var target = document.querySelector('#listItem');
observer.observe(target);

var callback = function(entries, observer) {
  entries.forEach(entry => {
    // chaque élément de entries correspond à une variation
    // d'intersection pour un des éléments cible:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
