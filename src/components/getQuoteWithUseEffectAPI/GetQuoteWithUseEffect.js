import { useEffect, useState } from "react";

export const GetQuoteWithUseEffect = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = async () => {
    const responce = await fetch("https://api.quotable.io/random ");
    const data = await responce.json();
    console.log(data.content);
    setQuote(data.content);
  };

  return (
    <div>
      <h2>Get Quote</h2>
      <h3>{quote}</h3>
    </div>
  );
};
