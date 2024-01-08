import { useEffect, useState } from "react";

import { Item } from "../Item";
import "./index.css";

export const Machine = () => {
  const [grab, setGrab] = useState(false);
  const claw = document.getElementById("claw");
  const [selected, setSelected] = useState<any>(claw);

  const detectKey = (e: any) => {
    if (selected) {
      let left = selected.offsetLeft;
      if (e.keyCode == "39") {
        selected.style.left = left + 40 + "px";
      }
      if (e.keyCode == "37") {
        selected.style.left = left - 40 + "px";
      }
    }
  };

  document.onkeydown = detectKey;

  useEffect(() => {
    if (grab) {
      console.log("grabbeddd");
    }
  }, []);

  const grabItem = (e: any) => {
    let top = claw?.offsetTop;
    if (grab) {
      // claw?.style.top = top + 200 + "px";
    }
  };

  return (
    <div className="wrapper">
      <div className="machine">
        <div className="top">
          {" "}
          claw machine
          <div className="the-claw">
            <div
              className="claw"
              id="claw"
              onClick={() => {
                setSelected(claw);
              }}
            >
              CLAW
            </div>
          </div>
          <div className="stuff">
            <Item />
          </div>
        </div>
        <div className="bottom">
          <div> drop here </div>
          <button
            onClick={(e) => {
              grabItem(e);
            }}
          >
            {" "}
            grab
          </button>
        </div>
      </div>
    </div>
  );
};
