import "./index.css";

export const Item = () => {
  let items = [
    { name: "1", item: "♡" },
    { name: "2", item: "☆" },
    { name: "3", item: "❀" },
  ];

  return (
    <>
      {items.map((e) => (
        <div className="item"> {e.item}</div>
      ))}
    </>
  );
};
