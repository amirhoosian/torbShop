"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const FOUR_HOURS = 4 * 60 * 60;

  const [timeLeft, setTimeLeft] = useState(FOUR_HOURS);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return FOUR_HOURS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  });

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="flex items-center justify-center gap-1 text-sm font-bold text-white">
      <span className="rounded-lg bg-gray-600/30 p-1.5">
        {String(hours).padStart(2, "0")}
      </span>{" "}
      :
      <span className="rounded-lg bg-gray-600/30 p-1.5">
        {String(minutes).padStart(2, "0")}
      </span>{" "}
      :
      <span className="rounded-lg bg-gray-600/30 p-1.5">
        {String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
}
