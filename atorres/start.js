window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#DA0463', '#404B69'],
    connectParticles: true,
    responsive: [{
      breakpoint: 800,
      options: {
        color: '#00C9B1',
        maxParticles: 80,
        connectParticles: false
      }
    }]
  });
};

