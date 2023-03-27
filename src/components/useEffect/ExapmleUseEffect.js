import { useEffect, useState } from "react";

export const ExampleUseEffect = () => {
  const [points, setPoints] = useState(1);
  const [title, setTitle] = useState("ABCD");
  useEffect(() => {
    console.log("Use Effect was called!!!");
  }, [title]);
  return (
    <div>
      <div>
        <h2>{points}</h2>
        <button onClick={() => setPoints(points + 1)}>Get more points</button>
      </div>
      <div>
        <h2>{title}</h2>
        <button onClick={() => setTitle("DEFG")}>New Title</button>
      </div>
    </div>
  );
};
