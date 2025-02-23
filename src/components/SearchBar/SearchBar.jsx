import { useState } from "react";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { useSearchParams } from "react-router-dom";
const SearchBar = ({ request }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");

  const handleQuery = (evt) => {
    setQuery(evt.target.value.trim());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateSearchParams("query", query);
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

  const updateSearchParams = (key, value) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  return (
    <div>
      <form className={s.inputForm} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleQuery}
          name="query"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search Movies"
        />

        <button className={s.buttonSearch} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
