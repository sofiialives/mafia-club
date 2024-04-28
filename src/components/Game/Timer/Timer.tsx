"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import cn from "@/utils/cn";
import styles from "../../Table/input.module.css";

interface TimerProps {}

export default function Timer({}: TimerProps) {
  let timer: NodeJS.Timeout;
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [sound, setSound] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);

  const handleClick = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setSound(true);
            clearInterval(timer);
            setTimerRunning(false);
            setTimeout(() => {
              setSeconds(60);
              setSound(false);
            }, 1000);
            return 0;
          }
        });
      }, 1000);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playSound = (audioFile: string) => {
    if (soundEnabled) {
      const audio = new Audio(audioFile);
      audio.play();
    }
  };

  useEffect(() => {
    if (sound) {
      playSound("/timer.mp3");
    }
    if (seconds === 10) {
      playSound("/tenseconds.mp3");
    }
  }, [playSound, seconds, sound]);

  return (
    <div className="flex flex-col gap-12 justify-center items-center my-16">
      <div className="flex items-center gap-14">
        <Button
          type="button"
          onClick={handleClick}
          size="sm"
          className={cn(styles.shadow)}
          variant="btnTimer"
        >
          Дать слово игроку
        </Button>
        <Button
          className={cn(styles.shadow)}
          size="xl"
          variant="timer"
          disabled
        >
          {seconds}
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          size="sm"
          className={cn(styles.shadow, "w-[76px]")}
          variant="btnTimer"
          disabled
        >
          Звук
        </Button>
        <div className="text-white flex items-center gap-1">
          вкл
          <Button
            variant="radio"
            className={cn(styles.shadow, soundEnabled && "bg-[#FDD901]")}
            onClick={() => setSoundEnabled(true)}
          />
        </div>
        <div className="text-white flex items-center gap-1">
          выкл
          <Button
            variant="radio"
            className={cn(styles.shadow, !soundEnabled && "bg-[#FDD901]")}
            onClick={() => setSoundEnabled(false)}
          />
        </div>
      </div>
    </div>
  );
}
