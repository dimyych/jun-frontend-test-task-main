import React from "react";
import Container from "react-bootstrap/Container";

import { useDispatch, useSelector } from "react-redux";
import { setStartRace } from "store/raceSlice";

const StartRaceBtn = () => {
  const startRace = useSelector((state) => state.race.startRace);
  const dispatch = useDispatch();
  return (
    <Container>
      {!startRace ? (
        <button
          className="startRaceBtn"
          onClick={() => {
            dispatch(setStartRace(true));
          }}
        >
          <h5>Start Race</h5>
        </button>
      ) : (
        ""
      )}
    </Container>
  );
};

export default StartRaceBtn;
