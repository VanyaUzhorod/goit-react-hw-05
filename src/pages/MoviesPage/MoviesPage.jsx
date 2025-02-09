import { useEffect, useState } from "react";
import fechMovie from "../../services/api";
import toast from "react-hot-toast";
import MoviesList from "../../components/MoviesList/MoviesList";
import SearchBar from "../../components/SearchBar/SearchBar";

const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fechMovie(query);
        setmovies(data.moviesList);
      } catch (error) {
        toast("Something wrong, try again later", {
          icon: "X",
          style: {
            borderRadius: "10px",
            background: "red",
            color: "#fff",
          },
          position: "top-left",
        });
        console.error(error);
      }
    };

    getData();
  }, [query]);
  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
  };
  console.log(movies);

  return (
    <section>
      <SearchBar request={handleSetQuery} />
      <MoviesList movies={movies} />
    </section>
  );
};

export default MoviesPage;
