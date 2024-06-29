import React from "react";
import Notification from "./HomeNotification/Notification";
import HomeHeader from "./HomeHeader/HomeHeader";
const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <div className="balance">
        <h2>Ar 4546564</h2>
        <ul></ul>
      </div>
      <Notification />
    </div>
  );
};

export default Home;
