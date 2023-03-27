import { useState } from "react";

export const SpreadOperator = () => {
  const [book, setBook] = useState({
    title: "$100 Sturtup",
    year: 2010,
    author: "Chris Guillebeaut",
    rating: "3 stars",
  });
  const onChangeRating = () => {
    //use spread operator to keep other properties which when chanching state of field
    setBook({ ...book, rating: "5 stars", year: 2014 });
  };

  const [game, setGame] = useState("TicTacToe");
  const [year, setYear] = useState(1990);
  const [rate, setRate] = useState("10 stars");

  const onChangeGameRating = () => {
    setRate("5 stars");
  };

  return (
    <div className="App">
      <div>
        <h1>"One way using useState"</h1>
        <h3>{book.title}</h3>
        <h3>{book.year}</h3>
        <h3>{book.author}</h3>
        <h3>{book.rating}</h3>
        <button onClick={onChangeRating}>Click here</button>
      </div>
      <div>
        <h1>"Another way using useState"</h1>
        <h3>{game}</h3>
        <h3>{year}</h3>
        <h3>{rate}</h3>
        <button onClick={onChangeGameRating}>Click here</button>
      </div>
    </div>
  );
};
