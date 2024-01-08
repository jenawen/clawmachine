import { useEffect, useState } from "react";
import { Claw } from "../Claw";
import { Item } from "../Item";
import "./index.css";

export const Machine = () => {
  const [grab, setGrab] = useState(false);

  useEffect(() => {
    if (grab) {
      console.log("grabbeddd");
    }
  }, []);

  return (
    <div className="machine">
      <div className="top">
        {" "}
        claw machine
        <div className="the-claw">
          <Claw />
        </div>
        <div className="stuff">
          <Item />
        </div>
      </div>
      <div className="bottom">
        <div> opening</div>
        <button
          onClick={() => {
            setGrab(true);
            console.log("skhfskd");
          }}
        >
          {" "}
          grab
        </button>
      </div>
    </div>
  );
};
