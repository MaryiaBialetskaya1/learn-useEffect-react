import { useState, useEffect } from "react";

export const GetAdviceWithUseEffect = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  }, []);

  const getAdvice = async () => {
    const responce = await fetch("https://api.adviceslip.com/advice");
    const data = await responce.json();
    console.log(data);
    setAdvice(data.slip.advice);
  };
  return (
    <div>
      <h2>Get Advice</h2>
      <h3>{advice}</h3>
    </div>
  );
};
