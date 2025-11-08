"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const FOUR_HOURS = 4 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(FOUR_HOURS);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          // اگه تموم شد، دوباره از ۴ ساعت شروع کن
          return FOUR_HOURS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="flex items-center justify-center text-white text-sm gap-1 font-bold">
      <span>{String(hours).padStart(2, "0")}</span> :
      <span>{String(minutes).padStart(2, "0")}</span> :
      <span>{String(seconds).padStart(2, "0")}</span>
    </div>
  );
}
