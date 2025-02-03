import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<MovieDetailsPage />} />
        <Route path="/products" element={<MoviesPage />} />
        <Route path="/products/:productId" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
