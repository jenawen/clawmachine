import { useState } from "react";
import "./index.css";

export const Claw = () => {
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

  console.log(selected);

  document.onkeydown = detectKey;

  return (
    <div
      className="claw"
      id="claw"
      onClick={() => {
        setSelected(claw);
      }}
    >
      CLAW
    </div>
  );
};
