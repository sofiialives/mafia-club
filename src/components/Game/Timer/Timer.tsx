"use client";
import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import cn from "@/utils/cn";
import styles from "../../Table/input.module.css";
import { isFunction } from "@tanstack/react-table";

interface TimerProps {}

export default function Timer({}: TimerProps) {
  let timer: NodeJS.Timeout;
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [finishSound, setFinishSound] = useState(false);
  const [timerRunning, setTimerRunning] = useState(false);

  const handleClick = () => {
    setTimerRunning(true);
    setSeconds(60);
    setFinishSound(false);
  };

  const handleStopTimer = () => {
    setTimerRunning(false);
    setSeconds(60);
    setFinishSound(false);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (timerRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          clearInterval(intervalId);
          setTimerRunning(false);
          setFinishSound(true);
        }
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
      setFinishSound(false);
      
    };
  }, [seconds, timerRunning]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const playSound = (audioFile: string) => {
    if (soundEnabled) {
      const audio = new Audio(audioFile);
      audio.play();
    }
  };

  useEffect(() => {
    if (finishSound) {
      playSound("/timer.mp3");
    }
    if (seconds === 10) {
      playSound("/tenseconds.mp3");
    }
  }, [playSound, seconds, finishSound]);

  return (
    <div className="flex flex-col gap-12 justify-center items-center my-16 border-[1px] border-white border-solid rounded-md p-4">
      <div className="flex items-center gap-14">
        <Button
          type="button"
          onClick={handleClick}
          size="sm"
          className={cn(
            styles.shadow,
            "hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]"
          )}
          variant="btnTimer"
        >
          Запустить таймер
        </Button>
        <Button
          className={cn(styles.shadow)}
          size="xl"
          variant="timer"
          disabled
        >
          {seconds}
        </Button>
        <Button
          onClick={handleStopTimer}
          type="button"
          size="sm"
          className={cn(
            styles.shadow,
            "hover:text-black border-none hover:shadow-[0px_0px_5px_5px_#FDD901]"
          )}
          variant="btnTimer"
        >
          Остановить таймер
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
            type="button"
            variant="radio"
            className={cn(styles.shadow, soundEnabled && "bg-[#FDD901]")}
            onClick={() => setSoundEnabled(true)}
          />
        </div>
        <div className="text-white flex items-center gap-1">
          выкл
          <Button
            type="button"
            variant="radio"
            className={cn(styles.shadow, !soundEnabled && "bg-[#FDD901]")}
            onClick={() => setSoundEnabled(false)}
          />
        </div>
      </div>
    </div>
  );
}
