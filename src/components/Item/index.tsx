import "./index.css";

export const Item = () => {
  let items = [
    { name: "1", item: "♡" },
    { name: "2", item: "☆" },
    { name: "3", item: "❀" },
    { name: "4", item: "✧" },
  ];

  return (
    <>
      {items.map((e: any, i: number) => (
        <div className="item" id={`item-${i}`} key={i}>
          {" "}
          {e.item}
        </div>
      ))}
    </>
  );
};
