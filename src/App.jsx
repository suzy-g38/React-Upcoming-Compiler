import movies from "./data/movies";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <>
      <h1>React Upcoming Compiler</h1>
      <MoviePage movies={movies} title={"Here is the title goes"} />
    </>
  );
}

export default App;
