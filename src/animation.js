import confetti from "canvas-confetti";

export function balloonsUp(duration) {
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      angle: 90,
      spread: 20,
      startVelocity: 20,
      origin: { x: Math.random(), y: 1.2 },
      gravity: -0.5,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

