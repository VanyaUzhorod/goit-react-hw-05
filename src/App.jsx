import { Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { Toaster } from "react-hot-toast";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const App = () => {
  return (
    <main>
      <Toaster />
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="/movies/:movieId/cast" element={<MovieCast />} />
            <Route path="/movies/:movieId/revievs" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
