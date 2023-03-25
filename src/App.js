import "./App.css";
import { useState } from "react";

function App() {
  const [book, setBook] = useState({
    title: "$100 Sturtup",
    year: 2010,
    author: "Chris Guillebeaut",
    rating: "3 stars",
  });
  const onChangeRating = () => {
    //use spread operator to keep other properties which when chanching state of field
    setBook({ ...book, rating: "5 stars" });
  };

  return (
    <div className="App">
      <h2>{book.title}</h2>
      <h2>{book.year}</h2>
      <h2>{book.author}</h2>
      <h2>{book.rating}</h2>
      <button onClick={onChangeRating}>Click here</button>
    </div>
  );
}

export default App;
