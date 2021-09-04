import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import HomeSearchBar from "./Components/HomeSearchBar";
import MobileMoviesTab from "./Components/MobileMoviesTab";
import MovieList from "./Components/MovieList";

const api_key = "e0bfb9e237fd3647b23717b87eb127bb";
const BASE_URL = `https://api.themoviedb.org/3/`;
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

export function Home() {
  const [search, setsearch] = useState('');
  const [data, setData] = useState([]);
  const api = axios.create({ baseURL: BASE_URL });
  const getTopRated = api.get("movie/top_rated", {
    params: { api_key }
  });

  useEffect(() => {
    getTopRated.then((res) => {
      if (search) {
        setData(res.data.results.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())));
      } else {
        setData(res.data.results);
      }
    });
  }, [search]);

  const handleChange = (e) => {
    setsearch(e.target.value)
  }

  return (
    <div className="container">
      <HomeSearchBar handleChange={handleChange} search={search} />
      <MobileMoviesTab />
      <MovieList data={data} getImage={getImage} />
    </div>
  );
}
