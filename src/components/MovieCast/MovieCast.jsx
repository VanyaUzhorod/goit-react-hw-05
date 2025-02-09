import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fechMovie from "../../services/api";
import toast from "react-hot-toast";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      try {
        const data = await fechMovie("", movieId);
        setCast(data.credits?.cast || []);
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
  }, [movieId]);

  return (
    <div className={s.wraper}>
      <ul className={s.castList}>
        {cast.length > 0 ? (
          cast.map((actor) => (
            <li key={actor.id} className={s.castIteam}>
              <img
                className={s.castImg}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : "https://via.placeholder.com/100x150?text=No+Image"
                }
                alt={actor.original_name}
              />
              <p>
                {actor.original_name} as {actor.character}
              </p>
            </li>
          ))
        ) : (
          <p>No cast information available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieCast;
