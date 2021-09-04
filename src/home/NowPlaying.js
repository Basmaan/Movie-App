import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import MobileMoviesSearchBar from "./Components/MobileMoviesSearchBar";
import MobileMoviesTab from "./Components/MobileMoviesTab";
import MovieList from "./Components/MovieList";

const api_key = "e0bfb9e237fd3647b23717b87eb127bb";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function NowPlaying() {

    const [search, setsearch] = useState('');
    const [data, setData] = useState([]);
    const api = axios.create({ baseURL: BASE_URL });
    const getNowPlaying = api.get("movie/now_playing", { params: { api_key } });

    useEffect(() => {
        getNowPlaying.then((res) => {
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
            <MobileMoviesSearchBar handleChange={handleChange} search={search} />
            <MobileMoviesTab />
            <MovieList data={data} getImage={getImage} />
        </div>
    )
}

export default NowPlaying
