import { useEffect, useRef } from "react";

const GlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#7f5af0");
    gradient.addColorStop(1, "#2cb67d");

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw glowing circles
      for (let i = 0; i < 5; i++) {
        const radius = 200 + Math.sin(time * 0.001 + i) * 50;

        ctx.beginPath();
        ctx.arc(
          width / 2 + Math.sin(time * 0.0005 + i) * 200,
          height / 2 + Math.cos(time * 0.0005 + i) * 200,
          radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(127, 90, 240, 0.05)`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
};

export default GlowBackground;