document.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: "body", // Attach to the body element
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x00cf00, // Corrected hex color
    backgroundColor: 0x3e3e3e, // Corrected hex color
    points: 20.00,
    maxDistance: 29.00,
    spacing: 16.00
  });
});
