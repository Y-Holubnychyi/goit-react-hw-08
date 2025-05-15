import React from "react";
import s from "./HomePage.module.css";
import JokeBox from "../../components/JokeBox/JokeBox";

const HomePage = () => {
  return (
    <div>
      <h1 className={s.title}>Welcome to Your Smart Phonebook</h1>
      <p className={s.subtitle}>
        Stay organized, stay connected. Create your personal contact list in
        seconds.
      </p>
      <p className={s.info}>
        🔐 Register or log in to securely manage your contacts from any device.
      </p>
      <p className={s.info}>
        📞 Add, search, and delete contacts — fast and easy.
      </p>
      <JokeBox />
    </div>
  );
};

export default HomePage;
