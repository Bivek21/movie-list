import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display";
import { SearchForm } from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToMovieList = (movie) => {
    setMovieList([...movieList, movie]);
  };

  console.log(movieList);
  return (
    <div className="container text-warning">
      <div className="row">
        <div className="col">
          <h1 className="mt-5 text-center">My movie Collections!</h1>
        </div>
      </div>
      <hr />

      {/* search section  */}
      <SearchForm addToMovieList={addToMovieList} />

      {/* movie list section  */}
      <Display />
    </div>
  );
}

export default App;
