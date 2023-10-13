import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

import timerIcon from "../../assets/images/ic_round-timer.png";

function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-2-30`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="">
        <strong>
          {timeLeft[interval]}
          {interval !== "segundos" ? ":" : ""}
        </strong>
        {interval}
      </span>
    );
  });
  return (
    <div className="d-flex justify-content-center countdown align-items-center mt-3">
      <img src={timerIcon} alt="" />{" "}
      {timerComponents.length ? timerComponents : <span>Acabou o tempo!</span>}
    </div>
  );
}

export default Countdown;
