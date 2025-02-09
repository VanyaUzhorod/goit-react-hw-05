import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
const SearchBar = ({ request }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query || "") {
      toast("I'm waiting for your request", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        position: "top-left",
      });
      console.error("query empty");
      return;
    }
    request(query);
    setQuery("");
  };

  return (
    <div>
      <form className={s.inputForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleQuery}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
        />
        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
