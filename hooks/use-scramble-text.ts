"use client";

import { useEffect, useState } from "react";

type ScrambleOptions = {
  duration?: number;
  fps?: number;
  chars?: string;
};

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>?/";

export function useScrambleText(text: string, options: ScrambleOptions = {}) {
  const {
    duration = 1000,
    fps = 30,
    chars = DEFAULT_CHARS,
  } = options;

  const [output, setOutput] = useState(text);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.max(1, Math.floor((duration / 1000) * fps));
    const interval = Math.max(16, Math.floor(1000 / fps));

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)] ?? "X";

    const timer = window.setInterval(() => {
      frame += 1;
      const progress = Math.min(1, frame / totalFrames);
      const revealed = Math.floor(progress * text.length);

      const scrambled = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (index < revealed) return char;
          return randomChar();
        })
        .join("");

      setOutput(scrambled);

      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setOutput(text);
      }
    }, interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [chars, duration, fps, text]);

  return output;
}
