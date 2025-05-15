import React, { useState, useEffect } from "react";
import s from "./JokeBox.module.css";

const jokes = [
  "Finding the right contact faster than finding your keys.",
  "Phonebook: the only place where 'Mom' is always first.",
  "If a contact doesn't answer, maybe they forgot to charge their phone.",
  "Friends are those who keep your number even after 10 missed calls.",
  "Sometimes phonebooks have more funny nicknames than real names.",
];

export default function JokeBox() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % jokes.length);
        setFade(true);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${s.jokeBox} ${fade ? s.fadeIn : s.fadeOut}`}
      title="A light joke to brighten your day"
    >
      {jokes[index]}
    </div>
  );
}
