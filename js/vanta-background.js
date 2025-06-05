window.vantaInitialized = window.vantaInitialized || false;

if (window.vantaInitialized) {
  // Vanta already initialized, do not proceed.
  // Optionally, you could add a log here for debugging:
  // console.log("Vanta already initialized. Skipping re-initialization.");
} else {
  document.addEventListener('DOMContentLoaded', () => {
    const vantaEffect = VANTA.NET({
      el: "body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x000000,
      backgroundColor: 0x3e3e3e,
      points: 10.00,
      maxDistance: 20.00,
      spacing: 16.00
    });

    const duration = 20000; // 20 seconds, was 60 seconds
    const startTime = Date.now();

    function animateVantaParams() {
      const elapsed = Math.min(Date.now() - startTime, duration);
      const t = elapsed / duration;

      // Linear interpolation
      const points = 10 + (20 - 10) * t;
      const maxDistance = 20 + (35 - 20) * t;

      vantaEffect.setOptions({
        points: points,
        maxDistance: maxDistance
      });

      if (elapsed < duration) {
        requestAnimationFrame(animateVantaParams);
      }
    }

    animateVantaParams();
    window.vantaInitialized = true;
    // Optionally, log initialization:
    // console.log("Vanta initialized.");
  });
}
