import { useEffect, useState } from "react";
import fechMovie from "../../services/api";
import toast from "react-hot-toast";
import TrendMoviesList from "../../components/TrendMoviesList/TrendMoviesList";
import s from "./HomePage.module.css";
// import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fechMovie();
        setTrendMovies(data.dayMovie);
      } catch (error) {
        toast("Something wrong, try again", {
          icon: "X",
          style: {
            borderRadius: "10px",
            background: "red",
            color: "#fff",
          },
          position: "top-rigth",
        });
        console.error(error);
      }
    };
    getData();
  }, []);
  console.log(trendMovies);
  return (
    <section className={s.homeSection}>
      {/* <LoadMoreBtn /> */}

      <TrendMoviesList trendMovies={trendMovies} />
    </section>
  );
};

export default HomePage;
