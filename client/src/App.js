import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chart from "./components/Chart";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "style/style.scss";
import Info from "components/Info";
import StartRaceBtn from "components/StartRaceBtn";

import { useDispatch, useSelector } from "react-redux";
import { setWin, setHorses } from "store/raceSlice";

function App() {
  const race = useSelector((state) => state.race);
  const dispatch = useDispatch();

  const socket = io("http://localhost:3002/", {
    autoConnect: false,
  });

  useEffect(() => {
    if (race.startRace) {
      socket.on("connect", () => console.log(socket.connected));
      socket.emit("start");
      socket.open();
      socket.on("ticker", function (round) {
        dispatch(setHorses(round));
      });
    }
  }, [race.startRace]);

  useEffect(() => {
    race.horses.map((el, i) => {
      if (el.distance == 1000 && !race.win) dispatch(setWin(el.name));
    });
  }, [race.horses]);

  return (
    <div className="app">
      <NavBar />
      <Info />
      <StartRaceBtn />
      {race.win ? <h2 className="win">!!! Winner: {race.win} !!!</h2> : ""}
      <Chart />
    </div>
  );
}

export default App;
